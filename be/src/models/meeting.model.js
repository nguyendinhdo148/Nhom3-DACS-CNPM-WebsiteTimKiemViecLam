import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    recruiter: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
    roomName: { type: String, required: true },
    scheduledAt: { type: Date, required: true },
    status: {
      type: String,
      enum: ["scheduled", "completed", "cancelled"],
      default: "scheduled",
    },
    notes: { type: String },
    participantEmails: [{ type: String }],
  },
  { timestamps: true }
);

// ✅ Export mặc định (ESM)
const Meeting = mongoose.model("Meeting", meetingSchema);
export default Meeting;
