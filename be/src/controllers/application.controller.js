import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

// for student
export const applyJob = async (req, res, next) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    if (!jobId) {
      return res.status(400).json({
        message: "Job id is required.",
        success: false,
      });
    }
    // check if the user has already applied for the job
    const existApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existApplication) {
      return res.status(400).json({
        message: "You have applied for this job.",
        success: false,
      });
    }

    // check if the jobs exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    // create a new application
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.applications.push(newApplication._id);
    await job.save();

    return res.status(201).json({
      message: "Job applied successfully.",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// for student
export const getAppliedJobs = async (req, res, next) => {
  try {
    const userId = req.id;
    const applications = await Application.find({ applicant: userId })
      .sort({
        createdAt: -1,
      })
      .populate({
        path: "job",
        select: "-_id -created_by -createdAt -updatedAt -__v -applications",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          select: "-_id -userId -createdAt -updatedAt -__v",
          options: { sort: { createdAt: -1 } },
        },
      });

    if (!applications) {
      return res.status(404).json({
        message: "Applications not found.",
        success: false,
      });
    }

    return res.status(200).json({
      applications,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// for recruiter
export const getApplicants = async (req, res, next) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
        select: "-_id -password -role -createdAt -updatedAt -__v",
        options: { sort: { createdAt: -1 } },
      },
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
        success: false,
      });
    }

    // check if the user is authorized to view this job
    if (job.created_by.toString() !== req.id) {
      return res.status(401).json({
        message: "You are not authorized to view this job.",
        success: false,
      });
    }

    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// for recruiter
export const updateApplicationStatus = async (req, res, next) => {
  try {
    const applicationId = req.params.id;
    const { status } = req.body;

    if (!applicationId || !status) {
      return res.status(400).json({
        message: "Application id and status are required.",
        success: false,
      });
    }

    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res.status(404).json({
        message: "Application not found.",
        success: false,
      });
    }

    const job = await Job.findById(application.job);

    // check if the user is authorized to update this application
    if (job.created_by.toString() !== req.id) {
      return res.status(401).json({
        message: "You are not authorized to update this application.",
        success: false,
      });
    }

    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message: "Application status updated.",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
