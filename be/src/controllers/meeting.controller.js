import Meeting from "../models/meeting.model.js";
import crypto from "crypto";
import { sendMail } from "../services/emailService.js";

// Tạo cuộc họp và gửi mail (chỉ gửi 1 lần khi tạo)
export const createMeeting = async (req, res) => {
  try {
    const { title, candidateId, jobId, scheduledAt, participantEmails } = req.body;

    if (!title || !candidateId || !jobId || !scheduledAt) {
      return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });
    }

    const recruiterId = req.id;
    const roomName = `viejob-${crypto.randomBytes(6).toString("hex")}`;

    // Tạo meeting
    let meeting = await Meeting.create({
      title,
      recruiter: recruiterId,
      candidate: candidateId,
      job: jobId,
      roomName,
      scheduledAt,
      participantEmails: participantEmails || [],
      mailSent: false, // Đánh dấu chưa gửi mail
    });

    // Populate recruiter, candidate, job, recruiter.profile.company, job.company
    meeting = await Meeting.findById(meeting._id)
      .populate([
        {
          path: "recruiter",
          select: "fullname email profile.profilePhoto profile.company",
          populate: {
            path: "profile.company",
            select: "name logo"
          }
        },
        {
          path: "candidate",
          select: "fullname email profile.profilePhoto"
        },
        {
          path: "job",
          select: "title company",
          populate: {
            path: "company",
            select: "name logo"
          }
        }
      ]);

    // Nếu thiếu thông tin, trả lỗi
    if (!meeting || !meeting.candidate || !meeting.job || !meeting.recruiter) {
      return res.status(400).json({ message: "Không đủ thông tin để gửi mail" });
    }

    // Lấy thông tin công ty từ recruiter hoặc từ job
    const company =
      meeting.recruiter?.profile?.company ||
      meeting.job?.company ||
      null;
    const companyName = company?.name || "VieJobs";
    const companyLogo = company?.logo || "";

    // Gửi mail duy nhất 1 lần khi tạo
    if (!meeting.mailSent) {
      const candidateEmail = meeting.candidate.email;
      const htmlForCandidate = `
        <div style="font-family: Arial, sans-serif;">
          <div style="margin-bottom:16px;">
            ${companyLogo ? `<img src="${companyLogo}" alt="logo" style="height:48px;object-fit:contain;border-radius:8px;" />` : ""}
          </div>
          <p>Xin chào ${meeting.candidate.fullname},</p>
          <p>Bạn đã được mời tham gia buổi phỏng vấn cho vị trí <b>${meeting.job.title}</b> tại <b>${companyName}</b>.</p>
          <p><b>Thời gian:</b> ${new Date(meeting.scheduledAt).toLocaleString("vi-VN")}</p>
          <p><b>Phòng họp:</b> <a href="https://meet.jit.si/${meeting.roomName}" target="_blank">Tham gia phòng</a></p>
          <p>Trân trọng,<br/>${meeting.recruiter.fullname} (${companyName})</p>
        </div>
      `;

      await sendMail({
        to: candidateEmail,
        subject: `🎉 Lời mời phỏng vấn từ ${companyName} qua VieJobs`,
        html: htmlForCandidate,
      });

      // Gửi mail cho các email được mời thêm (khác ứng viên)
      const uniqueExtraEmails = (participantEmails || []).filter(
        (email) => email && email !== candidateEmail
      );

      for (const email of uniqueExtraEmails) {
        const htmlForParticipant = `
          <div style="font-family: Arial, sans-serif;">
            ${companyLogo ? `<img src="${companyLogo}" alt="logo" style="height:48px;object-fit:contain;border-radius:8px;" />` : ""}
            <p>Bạn được mời tham gia cuộc họp/phỏng vấn: <b>${meeting.title}</b> cho vị trí <b>${meeting.job.title}</b> tại <b>${companyName}</b>.</p>
            <p>Thời gian: <b>${new Date(meeting.scheduledAt).toLocaleString("vi-VN")}</b></p>
            <p>Phòng họp trực tuyến: <a href="https://meet.jit.si/${meeting.roomName}">https://meet.jit.si/${meeting.roomName}</a></p>
            <p>Trân trọng,<br/>VieJobs</p>
          </div>
        `;
        await sendMail({
          to: email,
          subject: `[VieJobs] Mời tham gia cuộc họp: ${meeting.title} (${companyName})`,
          html: htmlForParticipant,
        });
      }

      meeting.mailSent = true;
      await meeting.save();
    }

    res.status(201).json({ meeting });
  } catch (err) {
    res.status(500).json({ message: "Tạo meeting thất bại", error: err.message });
  }
};

// Lấy danh sách cuộc họp của user (lấy đủ thông tin recruiter, candidate, job)
export const getMeetings = async (req, res) => {
  try {
    const userId = req.id;
    const meetings = await Meeting.find({
      $or: [{ recruiter: userId }, { candidate: userId }],
    })
      .populate("recruiter", "fullname email profile.profilePhoto")
      .populate("candidate", "fullname email profile.profilePhoto")
      .populate("job", "title description requirements salary experienceLevel benefits location jobType position company status approval approvalNote category created_by applications createdAt updatedAt");

    res.json({ meetings });
  } catch (err) {
    res.status(500).json({ message: "Lỗi lấy danh sách meeting", error: err.message });
  }
};

// Lấy 1 meeting cụ thể (lấy đủ thông tin recruiter, candidate, job)
export const getMeetingById = async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id)
      .populate("recruiter", "fullname email profile.profilePhoto")
      .populate("candidate", "fullname email profile.profilePhoto")
      .populate("job", "title description requirements salary experienceLevel benefits location jobType position company status approval approvalNote category created_by applications createdAt updatedAt");

    if (!meeting) {
      return res.status(404).json({ message: "Meeting không tồn tại" });
    }

    res.json({ meeting });
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi lấy meeting", error: err.message });
  }
};

// Cập nhật cuộc họp, gửi lại mail khi cập nhật thông tin
export const updateMeeting = async (req, res) => {
  try {
    let meeting = await Meeting.findById(req.params.id)
      .populate("recruiter", "fullname email profile.profilePhoto")
      .populate("candidate", "fullname email profile.profilePhoto")
      .populate("job", "title");

    if (!meeting) {
      return res.status(404).json({ message: "Meeting không tồn tại" });
    }

    // Chỉ recruiter tạo meeting mới được sửa
    if (meeting.recruiter._id.toString() !== req.id) {
      return res.status(403).json({ message: "Không có quyền sửa meeting này" });
    }

    const { title, scheduledAt } = req.body;
    if (title) meeting.title = title;
    if (scheduledAt) meeting.scheduledAt = scheduledAt;

    await meeting.save();

    // Gửi lại mail thông báo cập nhật cho candidate và participantEmails
    const candidateEmail = meeting.candidate.email;
    const htmlForCandidate = `
      <p>Xin chào ${meeting.candidate.fullname},</p>
      <p>Thông tin buổi phỏng vấn cho vị trí <b>${meeting.job.title}</b> đã được cập nhật.</p>
      <p><b>Thời gian mới:</b> ${new Date(meeting.scheduledAt).toLocaleString("vi-VN")}</p>
      <p><b>Phòng họp:</b> <a href="https://meet.jit.si/${meeting.roomName}" target="_blank">Tham gia phòng</a></p>
      <p>Trân trọng,<br/>${meeting.recruiter.fullname}</p>
    `;

    await sendMail({
      to: candidateEmail,
      subject: "VieJobs - Cập nhật thông tin cuộc họp/phỏng vấn",
      html: htmlForCandidate,
    });

    // Gửi lại cho các participantEmails nếu có
    const uniqueExtraEmails = (meeting.participantEmails || []).filter(
      (email) => email && email !== candidateEmail
    );

    for (const email of uniqueExtraEmails) {
      const htmlForParticipant = `
        <p>Thông tin cuộc họp/phỏng vấn <b>${meeting.title}</b> đã được cập nhật.</p>
        <p>Thời gian mới: <b>${new Date(meeting.scheduledAt).toLocaleString("vi-VN")}</b></p>
        <p>Phòng họp trực tuyến: <a href="https://meet.jit.si/${meeting.roomName}">https://meet.jit.si/${meeting.roomName}</a></p>
        <p>Trân trọng,<br/>VieJobs</p>
      `;
      await sendMail({
        to: email,
        subject: `[VieJobs] Cập nhật cuộc họp: ${meeting.title}`,
        html: htmlForParticipant,
      });
    }

    res.json({ message: "Cập nhật thành công", meeting });
  } catch (err) {
    res.status(500).json({ message: "Lỗi cập nhật meeting", error: err.message });
  }
};

// Xoá cuộc họp
export const deleteMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id);

    if (!meeting) {
      return res.status(404).json({ message: "Meeting không tồn tại" });
    }

    if (meeting.recruiter.toString() !== req.id) {
      return res.status(403).json({ message: "Không có quyền xoá meeting này" });
    }

    await Meeting.deleteOne({ _id: meeting._id });
    res.json({ message: "Xoá meeting thành công" });
  } catch (err) {
    res.status(500).json({ message: "Lỗi xoá meeting", error: err.message });
  }
};

// Gửi lại mail mời họp cho candidate và participantEmails
export const resendInviteMail = async (req, res) => {
  try {
    const { meetingId } = req.body;
    if (!meetingId) {
      return res.status(400).json({ message: "Thiếu meetingId" });
    }
    let meeting = await Meeting.findById(meetingId)
      .populate("recruiter", "fullname email profile.profilePhoto")
      .populate("candidate", "fullname email profile.profilePhoto")
      .populate("job", "title");

    if (!meeting) {
      return res.status(404).json({ message: "Meeting không tồn tại" });
    }

    // Gửi lại mail cho candidate
    const candidateEmail = meeting.candidate.email;
    const htmlForCandidate = `
      <p>Xin chào ${meeting.candidate.fullname},</p>
      <p>Bạn được mời tham gia buổi phỏng vấn cho vị trí <b>${meeting.job.title}</b>.</p>
      <p><b>Thời gian:</b> ${new Date(meeting.scheduledAt).toLocaleString("vi-VN")}</p>
      <p><b>Phòng họp:</b> <a href="https://meet.jit.si/${meeting.roomName}" target="_blank">Tham gia phòng</a></p>
      <p>Trân trọng,<br/>${meeting.recruiter.fullname}</p>
    `;
    await sendMail({
      to: candidateEmail,
      subject: "🎉 Lời mời phỏng vấn từ VieJobs",
      html: htmlForCandidate,
    });

    // Gửi lại cho các participantEmails nếu có
    const uniqueExtraEmails = (meeting.participantEmails || []).filter(
      (email) => email && email !== candidateEmail
    );
    for (const email of uniqueExtraEmails) {
      const htmlForParticipant = `
        <p>Bạn được mời tham gia cuộc họp/phỏng vấn: <b>${meeting.title}</b></p>
        <p>Thời gian: <b>${new Date(meeting.scheduledAt).toLocaleString("vi-VN")}</b></p>
        <p>Phòng họp trực tuyến: <a href="https://meet.jit.si/${meeting.roomName}">https://meet.jit.si/${meeting.roomName}</a></p>
        <p>Trân trọng,<br/>VieJobs</p>
      `;
      await sendMail({
        to: email,
        subject: `[VieJobs] Mời tham gia cuộc họp: ${meeting.title}`,
        html: htmlForParticipant,
      });
    }

    res.json({ message: "Đã gửi lại mail mời họp/phỏng vấn!" });
  } catch (err) {
    res.status(500).json({ message: "Lỗi gửi lại mail mời họp", error: err.message });
  }
};
