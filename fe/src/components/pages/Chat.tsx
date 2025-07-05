import { API, SOCKET_URL } from "@/utils/constant";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Trash2, Edit, Check, X, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "../shared/Navbar";
import { io, Socket } from "socket.io-client";

interface User {
  _id: string;
  fullname: string;
  email: string;
  profile?: {
    profilePhoto?: string;
  };
  role: string;
}
interface SocketResponse {
  status: 'success' | 'error';
  error?: {
    message: string;
    code?: string;
  };
  message?: Message; // Kiểu Message đã định nghĩa trước đó
}
interface Message {
  _id: string;
  text: string;
  sender: User;
  conversation: string | { _id: string }; // Có thể là string ID hoặc object với _id
  conversationId?: string; // Trường hợp có trường conversationId trực tiếp
  createdAt: string;
  updatedAt?: string;
  isEdited?: boolean;
  tempId?: string; // Thêm trường tempId nếu cần
  status?: "sending" | "delivered" | "error"; // Thêm trạng thái sending
}

interface Conversation {
  _id: string;
  participants: User[];
  lastMessage?: Message;
  createdAt: string;
  updatedAt: string;
}



const Chat = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConv, setSelectedConv] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState({
    conv: false,
    msg: false,
    candidates: false,
    sending: false
  });
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [socket, setSocket] = useState<Socket | null>(null);
  const [candidates, setCandidates] = useState<User[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Khởi tạo socket connection
  useEffect(() => {
  // Khởi tạo socket với cấu hình phù hợp
  const accessToken = localStorage.getItem("accessToken");
  console.log("📦 AccessToken trước khi socket connect:", accessToken);
  const newSocket = io(SOCKET_URL, {
    
  path: "/socket.io", // Phải đúng với server
  auth: {
    token: accessToken,
  },
  withCredentials: true,
  transports: ["websocket", "polling"], // polling dự phòng nếu websocket fail
  autoConnect: false,
});

setSocket(newSocket);
  // Socket event handlers
  newSocket.on("connect", () => {
    console.log("Socket connected");
    setIsConnected(true);
    if (selectedConv) {
      newSocket.emit("join_conversation", selectedConv._id);
    }
  });

  newSocket.on("disconnect", (reason) => {
    console.log("Socket disconnected:", reason);
    setIsConnected(false);
  });

  newSocket.on("connect_error", (err) => {
    console.error("Socket connection error:", err.message);
  });

  setSocket(newSocket);

  // Ping/pong để giữ kết nối
  const pingInterval = setInterval(() => {
    if (newSocket.connected) {
      newSocket.emit("ping", (response: string) => {
        console.debug("Pong received:", response);
      });
    }
  }, 25000);

  return () => {
    clearInterval(pingInterval);
    newSocket.disconnect();
    newSocket.off("connect");
    newSocket.off("disconnect");
    newSocket.off("connect_error");
  };
}, []);

  // Kết nối socket khi có user
  useEffect(() => {
    if (user?._id && socket && !socket.connected) {
      socket.connect();
      if (selectedConv) {
       socket.emit("join_conversation", selectedConv._id);
}
    }
    
  }, [user?._id, socket]);

  // Join conversation khi chọn hội thoại
  useEffect(() => {
    if (selectedConv && socket?.connected) {
      socket.emit("join_conversation", selectedConv._id);
    }

    return () => {
      if (selectedConv && socket?.connected) {
        socket.emit("leave_conversation", selectedConv._id);
      }
    };
  }, [selectedConv, socket]);

  // Lấy danh sách ứng viên đã ứng tuyển (cho nhà tuyển dụng)
  useEffect(() => {
    if (user?.role !== "recruiter") return;

    const fetchCandidates = async () => {
      setLoading(prev => ({ ...prev, candidates: true }));
      try {
        const res = await axios.get<User[]>(`${API}/chat/recruiter/candidates`, {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        setCandidates(res.data);
      } catch (err) {
        console.error("Error fetching candidates:", err);
      } finally {
        setLoading(prev => ({ ...prev, candidates: false }));
      }
    };

    fetchCandidates();
  }, [user?._id, user?.role]);

  // Lấy danh sách hội thoại
  useEffect(() => {
    if (!user?._id) return;

    const fetchConversations = async () => {
      setLoading(prev => ({ ...prev, conv: true }));
      try {
        const res = await axios.get<Conversation[]>(`${API}/chat/conversations/${user._id}`, {
          withCredentials: true
        });
        setConversations(res.data);
      } catch (err) {
        console.error("Error fetching conversations:", err);
      } finally {
        setLoading(prev => ({ ...prev, conv: false }));
      }
    };

    fetchConversations();
  }, [user?._id]);

  // Xử lý socket events
  useEffect(() => {
  if (!socket || !selectedConv) return;

  const getConvId = (msg: Message): string | undefined => {
    if (typeof msg.conversation === "string") return msg.conversation;
    if (msg.conversation && "_id" in msg.conversation) return msg.conversation._id;
    if ("conversationId" in msg && typeof msg.conversationId === "string") {
    return msg.conversationId;
  }
    return undefined;
  };

  // Nhận tin nhắn mới (tạm thời hoặc thật)
  const handleReceiveMessage = (msg: Message) => {
  const msgConvId = getConvId(msg);

  // Nếu không đúng hội thoại đang xem → bỏ qua
  if (msgConvId !== selectedConv?._id) return;

  // Kiểm tra trùng lặp - ưu tiên kiểm tra tempId trước
  const isDuplicate = messages.some(m => 
    (msg.tempId && m.tempId === msg.tempId) || 
    (m._id && msg._id && m._id === msg._id)
  );

  if (!isDuplicate) {
    setMessages(prev => [...prev, msg]);
  } else if (msg.tempId) {
    // Nếu là tin nhắn thật thay thế tin nhắn tạm
    setMessages(prev => prev.map(m => 
      m.tempId === msg.tempId ? { ...msg, tempId: undefined } : m
    ));
  }
};

  // Cập nhật tin nhắn từ server (từ tạm -> thật)
  const handleMessageUpdated = (msg: Message) => {
    const msgConvId = getConvId(msg);
    if (msgConvId !== selectedConv._id) return;

    setMessages(prev => {
      // Nếu có sẵn _id thì cập nhật
      if (prev.some(m => m._id === msg._id)) {
        return prev.map(m => m._id === msg._id ? msg : m);
      }

      // Nếu có tempId thì thay thế
      if ('tempId' in msg && typeof msg.tempId === 'string') {
          return prev.map(m => 'tempId' in m && m.tempId === msg.tempId ? msg : m);
        }

      // Nếu chưa có, thêm mới
      return [...prev, msg];
    });
  };

  // Xoá tin nhắn
  const handleMessageDeleted = ({ messageId }: { messageId: string }) => {
    setMessages(prev => prev.filter(m => m._id !== messageId));
  };

  const handleUserJoined = ({ userId }: { userId: string }) => {
    console.log(`User ${userId} joined conversation`);
  };

  const handleUserLeft = ({ userId }: { userId: string }) => {
    console.log(`User ${userId} left conversation`);
  };

  // Lắng nghe các sự kiện socket (dùng đúng tên theo server bạn đang dùng)
  socket.on("receive_message", handleReceiveMessage);
  socket.on("message_updated", handleMessageUpdated);
  socket.on("message_deleted", handleMessageDeleted);
  socket.on("user_joined", handleUserJoined);
  socket.on("user_left", handleUserLeft);

  return () => {
    socket.off("receive_message", handleReceiveMessage);
    socket.off("message_updated", handleMessageUpdated);
    socket.off("message_deleted", handleMessageDeleted);
    socket.off("user_joined", handleUserJoined);
    socket.off("user_left", handleUserLeft);
  };
}, [socket, selectedConv]);


  // Load tin nhắn khi chọn hội thoại
  useEffect(() => {
    if (selectedConv) {
      const loadMessages = async () => {
        setLoading(prev => ({ ...prev, msg: true }));
        try {
          const res = await axios.get<Message[]>(`${API}/chat/messages/${selectedConv._id}`, {
            withCredentials: true
          });
          setMessages(res.data);
        } catch (err) {
          console.error("Error loading messages:", err);
        } finally {
          setLoading(prev => ({ ...prev, msg: false }));
        }
      };
      loadMessages();
    }
  }, [selectedConv]);

  // Auto scroll xuống tin nhắn mới
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Gửi tin nhắn
  const handleSend = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!message.trim() || !selectedConv || !user?._id || !socket) return;

  setLoading(prev => ({ ...prev, sending: true }));
  
  // Tạo tin nhắn tạm với tempId duy nhất
  const tempId = `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const tempMessage: Message = {
    _id: tempId,
    text: message,
    sender: user,
    conversation: selectedConv._id,
    createdAt: new Date().toISOString(),
    isEdited: false,
    tempId,
    status: "sending" // Thêm trạng thái sending
  };

  // Hiển thị tin nhắn tạm
  setMessages(prev => [...prev, tempMessage]);
  setMessage("");

  // Gửi qua socket
  socket.emit("send_message", {
    conversationId: selectedConv._id,
    message: {
      text: message,
      sender: user._id
    },
    tempId
  }, (response: SocketResponse) => {
    setLoading(prev => ({ ...prev, sending: false }));
    
    if (response.status === "error") {
      // Cập nhật trạng thái lỗi cho tin nhắn tạm
      setMessages(prev => prev.map(m => 
        m.tempId === tempId ? { ...m, status: "error" } : m
      ));
    }
  });
};

  // Chỉnh sửa tin nhắn
  const handleEdit = async () => {
    if (!editingMessageId || !user?._id || !selectedConv || !socket) return;

    try {
      const res = await axios.put(
        `${API}/chat/message/${editingMessageId}`,
        { senderId: user._id, newText: editText },
        { withCredentials: true }
      );

      const updatedMessage = {
        ...res.data.message,
        sender: user,
        isEdited: true
      };

      setMessages(prev => prev.map(m => m._id === editingMessageId ? updatedMessage : m));
      socket.emit("update_message", {
        conversationId: selectedConv._id,
        message: updatedMessage,
      });

      setEditingMessageId(null);
    } catch (err) {
      console.error("Error editing message:", err);
    }
  };

  // Xóa tin nhắn
  const handleDelete = async (messageId: string) => {
    if (!confirm("Bạn chắc chắn muốn xóa tin nhắn này?")) return;
    if (!user?._id || !selectedConv || !socket) return;

    try {
      await axios.delete(`${API}/chat/message/${messageId}`, {
        data: { senderId: user._id },
        withCredentials: true,
      });

      setMessages(prev => prev.filter(m => m._id !== messageId));
      socket.emit("delete_message", {
        conversationId: selectedConv._id,
        messageId,
      });
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  };

  // Tạo hoặc chọn hội thoại với ứng viên
  const handleSelectCandidate = async (candidate: User) => {
    try {
      // Kiểm tra hội thoại đã tồn tại
      const existingConv = conversations.find(conv => 
        conv.participants.some(p => p._id === candidate._id)
      );

      if (existingConv) {
        setSelectedConv(existingConv);
        return;
      }

      // Tạo hội thoại mới
      const res = await axios.post<Conversation>(
        `${API}/chat/conversations`,
        { participantIds: [user?._id, candidate._id] },
        {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );

      const newConversation = {
        ...res.data,
        participants: [user!, candidate],
      };

      setConversations(prev => [newConversation, ...prev]);
      setSelectedConv(newConversation);
    } catch (err) {
      console.error("Error creating conversation:", err);
    }
  };

  // Lấy người tham gia khác trong hội thoại
  const getOtherParticipant = (conv: Conversation) => {
    return conv.participants.find(p => p._id !== user?._id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Connection status indicator */}
        <div className={`fixed bottom-4 right-4 flex items-center px-3 py-1 rounded-full text-sm ${
          isConnected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          <div className={`h-2 w-2 rounded-full mr-2 ${
            isConnected ? 'bg-green-500' : 'bg-red-500'
          }`}></div>
          {isConnected ? 'Đang kết nối' : 'Mất kết nối'}
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex h-[calc(100vh-150px)]">
            {/* Sidebar - Danh sách ứng viên & hội thoại */}
            <div className="w-80 border-r bg-gray-50 flex flex-col">
              {/* Danh sách ứng viên (cho nhà tuyển dụng) */}
              {user?.role === "recruiter" && (
                <div className="p-3 border-b">
                  <h3 className="font-medium text-sm mb-2">Ứng viên</h3>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {loading.candidates ? (
                      <div className="text-center py-2">Đang tải...</div>
                    ) : candidates.length === 0 ? (
                      <div className="text-sm text-gray-500 py-2">Chưa có ứng viên</div>
                    ) : (
                      candidates.map(candidate => (
                        <div
                          key={candidate._id}
                          className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer"
                          onClick={() => handleSelectCandidate(candidate)}
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={candidate.profile?.profilePhoto} />
                            <AvatarFallback>{candidate.fullname.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-2">
                            <p className="text-sm font-medium">{candidate.fullname}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* Danh sách hội thoại */}
              <div className="flex-1 overflow-y-auto">
                <h3 className="font-medium text-sm p-3">Cuộc trò chuyện</h3>
                {loading.conv ? (
                  <div className="text-center py-4">Đang tải...</div>
                ) : conversations.length === 0 ? (
                  <div className="text-sm text-gray-500 p-3">Chưa có cuộc trò chuyện</div>
                ) : (
                  <div className="divide-y">
                    {conversations.map(conv => {
                      const otherParticipant = getOtherParticipant(conv);
                      return (
                        <div
                          key={conv._id}
                          className={`flex items-center p-3 hover:bg-gray-100 cursor-pointer ${
                            selectedConv?._id === conv._id ? "bg-blue-50" : ""
                          }`}
                          onClick={() => setSelectedConv(conv)}
                        >
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={otherParticipant?.profile?.profilePhoto} />
                            <AvatarFallback>{otherParticipant?.fullname.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-3 flex-1 min-w-0">
                            <p className="font-medium truncate">{otherParticipant?.fullname}</p>
                            <p className="text-sm text-gray-500 truncate">
                              {conv.lastMessage?.text || "Bắt đầu trò chuyện"}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Khung chat chính */}
            <div className="flex-1 flex flex-col">
              {selectedConv ? (
                <>
                  {/* Header hội thoại */}
                  <div className="p-3 border-b flex items-center">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={getOtherParticipant(selectedConv)?.profile?.profilePhoto} />
                      <AvatarFallback>
                        {getOtherParticipant(selectedConv)?.fullname.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="font-medium">
                        {getOtherParticipant(selectedConv)?.fullname}
                      </p>
                    </div>
                  </div>

                  {/* Nội dung chat */}
                  <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                    {loading.msg ? (
                      <div className="text-center py-8">Đang tải tin nhắn...</div>
                    ) : messages.length === 0 ? (
                      <div className="text-center text-gray-500 py-8">
                        Bắt đầu cuộc trò chuyện
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {messages.map(msg => (
                          <div
                            key={msg._id}
                            className={`flex ${msg.sender._id === user?._id ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                                msg.sender._id === user?._id 
                                  ? "bg-blue-500 text-white" 
                                  : "bg-white border"
                              }`}
                            >
                              {editingMessageId === msg._id ? (
                                <div className="space-y-2">
                                  <Input
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="bg-white text-black"
                                  />
                                  <div className="flex gap-2 justify-end">
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      className="text-white hover:text-white hover:bg-blue-600"
                                      onClick={handleEdit}
                                    >
                                      <Check size={16} />
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      className="text-white hover:text-white hover:bg-blue-600"
                                      onClick={() => setEditingMessageId(null)}
                                    >
                                      <X size={16} />
                                    </Button>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <div className="text-sm">{msg.text}</div>
                                  <div className={`text-xs mt-1 flex justify-between ${
                                    msg.sender._id === user?._id 
                                      ? "text-blue-100" 
                                      : "text-gray-500"
                                  }`}>
                                    <span>
                                      {format(new Date(msg.createdAt), "HH:mm dd/MM/yyyy", { locale: vi })}
                                      {msg.isEdited && " (đã sửa)"}
                                    </span>
                                    {msg.sender._id === user?._id && (
                                      <span className="flex gap-1 ml-2">
                                        <button 
                                          onClick={() => {
                                            setEditingMessageId(msg._id);
                                            setEditText(msg.text);
                                          }}
                                          className="hover:text-blue-300"
                                        >
                                          <Edit size={14} />
                                        </button>
                                        <button 
                                          onClick={() => handleDelete(msg._id)}
                                          className="hover:text-blue-300"
                                        >
                                          <Trash2 size={14} />
                                        </button>
                                      </span>
                                    )}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                        <div ref={messagesEndRef} />
                      </div>
                    )}
                  </div>

                  {/* Input chat */}
                  <form onSubmit={handleSend} className="p-3 border-t">
                    <div className="flex gap-2">
                      <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Nhập tin nhắn..."
                        disabled={loading.sending}
                      />
                      <Button 
                        type="submit" 
                        disabled={!message.trim() || loading.sending}
                      >
                        {loading.sending ? "Đang gửi..." : "Gửi"}
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MessageSquare size={48} className="mx-auto mb-4 text-gray-300" />
                    <p>Chọn một cuộc trò chuyện để bắt đầu</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;