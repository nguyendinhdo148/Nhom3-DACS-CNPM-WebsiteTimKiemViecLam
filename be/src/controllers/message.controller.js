import { Message } from "../models/message.model.js";
import { Conversation } from "../models/conversation.model.js";

// [POST] /api/chat/send-message
// Gửi tin nhắn mới trong một cuộc trò chuyện
export const sendMessage = async (req, res) => {
  const { conversationId, senderId, text } = req.body;

  if (!conversationId || !senderId || !text) {
    return res.status(400).json({ error: "Thiếu thông tin để gửi tin nhắn." });
  }

  try {
    const newMessage = new Message({
      conversation: conversationId,
      sender: senderId,
      text,
    });

    const savedMessage = await newMessage.save();

    await Conversation.findByIdAndUpdate(conversationId, {
      lastMessage: savedMessage._id,
      updatedAt: Date.now(),
    });

    const populatedMsg = await Message.findById(savedMessage._id)
      .populate("sender", "fullname profile.profilePhoto role");

    // Đảm bảo populatedMsg có trường conversationId là string cho FE
    const emitMsg = {
      ...populatedMsg.toObject(),
      conversationId: conversationId.toString(),
    };

    console.log(`[API] Emitting receive_message to room ${conversationId}:`, emitMsg);

    req.app.get("io").to(conversationId).emit("receive_message", emitMsg);
    res.status(201).json(emitMsg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// [GET] /api/chat/messages/:conversationId
// Lấy toàn bộ tin nhắn trong một cuộc trò chuyện
export const getMessages = async (req, res) => {
  const { conversationId } = req.params;

  try {
    const messages = await Message.find({ conversation: conversationId })
      .sort("createdAt")
      .populate("sender", "fullname profile.profilePhoto role");

    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// [PUT] /api/chat/message/:messageId
// Sửa nội dung tin nhắn (nếu là của chính người gửi)
export const updateMessage = async (req, res) => {
  const { messageId } = req.params;
  const { senderId, newText } = req.body;

  if (!newText || !senderId) {
    return res.status(400).json({ error: "Thiếu dữ liệu để cập nhật." });
  }

  try {
    const message = await Message.findById(messageId);
    if (!message) return res.status(404).json({ error: "Tin nhắn không tồn tại." });

    if (message.sender.toString() !== senderId) {
      return res.status(403).json({ error: "Không được phép sửa tin nhắn người khác." });
    }

    message.text = newText;
    await message.save();

    res.status(200).json({ success: true, message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// [DELETE] /api/chat/message/:messageId
// Xoá tin nhắn (nếu là của chính người gửi)    
export const deleteMessage = async (req, res) => {
  const { messageId } = req.params;
  const { senderId } = req.body;

  try {
    const message = await Message.findById(messageId);
    if (!message) return res.status(404).json({ error: "Tin nhắn không tồn tại." });

    if (message.sender.toString() !== senderId) {
      return res.status(403).json({ error: "Không được phép xoá tin nhắn người khác." });
    }

    await Message.findByIdAndDelete(messageId);

    res.status(200).json({ success: true, message: "Đã xoá tin nhắn." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
