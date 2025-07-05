import { User } from "../models/user.model.js";
import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";
import { Job } from '../models/job.model.js';
import { Application } from '../models/application.model.js';
// Tạo cuộc trò chuyện giữa hai người (nếu chưa có)
export const createConversation = async (req, res) => {
  try {
    // Debug: Log toàn bộ request
    console.log('Request body:', req.body);
    console.log('User ID:', req.user?._id);

    const { participantIds } = req.body;
    
    // Kiểm tra participantIds có tồn tại và là mảng 2 phần tử
    if (!Array.isArray(participantIds) || participantIds.length !== 2) {
      return res.status(400).json({ 
        error: "participantIds must be an array with exactly 2 user IDs" 
      });
    }

    // Kiểm tra 2 user có tồn tại không
    const users = await User.find({ _id: { $in: participantIds } });
    if (users.length !== 2) {
      return res.status(400).json({ error: "One or more users not found" });
    }

    // Kiểm tra conversation đã tồn tại
    const existingConv = await Conversation.findOne({
      participants: { $all: participantIds, $size: 2 }
    });

    if (existingConv) {
      return res.status(200).json(existingConv);
    }

    // Tạo conversation mới
    const newConversation = new Conversation({
      participants: participantIds
    });

    await newConversation.save();
    res.status(201).json(newConversation);

  } catch (err) {
    console.error("Create conversation error:", err);
    res.status(500).json({ error: err.message });
  }
};

// Lấy danh sách các cuộc trò chuyện mà người dùng tham gia
export const getUserConversations = async (req, res) => {
  const { userId } = req.params;

  try {
    const conversations = await Conversation.find({
      participants: userId,
    })
      .sort("-updatedAt")
      .populate("participants", "fullname profile.profilePhoto role")
      .populate({
        path: "lastMessage",
        populate: { path: "sender", select: "fullname" },
      });

    res.status(200).json(conversations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lấy chi tiết một cuộc trò chuyện theo ID
export const getConversationById = async (req, res) => {
  try {
    const conversation = await Conversation.findById(req.params.id)
      .populate("participants", "fullname profile.profilePhoto role")
      .populate({
        path: "lastMessage",
        populate: { path: "sender", select: "fullname" },
      });

    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found." });
    }

    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cập nhật lastMessage cho một cuộc trò chuyện
export const updateLastMessage = async (req, res) => {
  const { conversationId, messageId } = req.body;

  try {
    const updated = await Conversation.findByIdAndUpdate(
      conversationId,
      { lastMessage: messageId },
      { new: true }
    ).populate("lastMessage");

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const updateConversation = async (req, res) => {
  const { conversationId } = req.params;
  const updateData = req.body; // ví dụ { title: "Nhóm IT" }

  try {
    const updated = await Conversation.findByIdAndUpdate(conversationId, updateData, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ error: "Conversation not found" });
    }
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Xoá cuộc trò chuyện và toàn bộ tin nhắn liên quan
export const deleteConversation = async (req, res) => {
  const { conversationId } = req.params;

  try {
    const convo = await Conversation.findById(conversationId);
    if (!convo) {
      return res.status(404).json({ error: "Conversation not found." });
    }

    await Message.deleteMany({ conversation: convo._id }); // ✅ Dùng ObjectId đúng kiểu
    await convo.deleteOne();

    res.status(200).json({ success: true, message: "Conversation deleted." });
  } catch (err) {
    console.error("Delete conversation error:", err); // ✅ log ra để debug nhanh
    res.status(500).json({ error: err.message });
  }
};
// Thêm hàm này vào conversation.controller.js
export const getRecruiterCandidates = async (req, res) => {
  try {
    const recruiter = await User.findById(req.id);
    
    // 1. Lấy tất cả job của recruiter
    const jobs = await Job.find({ 
      created_by: recruiter._id,
      status: 'active'
    }).select('_id');

    // 2. Lấy tất cả applications và populate applicant (student)
    const applications = await Application.find({
      job: { $in: jobs.map(j => j._id) }
    }).populate({
      path: 'applicant', // Sử dụng trường applicant thay vì student
      select: 'fullname email profile.profilePhoto role',
      match: { role: 'student' } // Chỉ lấy user có role là student
    });

    // 3. Lọc các applicant hợp lệ và loại bỏ trùng lặp
    const uniqueStudents = [];
    const seen = new Set();
    
    applications.forEach(app => {
      if (app.applicant && !seen.has(app.applicant._id.toString())) {
        seen.add(app.applicant._id.toString());
        uniqueStudents.push(app.applicant);
      }
    });

    res.status(200).json(uniqueStudents);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ 
      error: "Internal server error",
      details: err.message 
    });
  }
};