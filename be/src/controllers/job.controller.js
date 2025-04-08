import { Job } from "../models/job.model.js";
import { Company } from "../models/company.model.js";

// for recruiter
export const postJob = async (req, res, next) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;

    const recruiterId = req.id; // middleware authentication

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Something is missing.",
        success: false,
      });
    }

    // check if company exists
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }

    // check if recruiter is authorized to create a job for this company
    if (company.userId.toString() !== recruiterId) {
      return res.status(401).json({
        message: "You are not authorized to create a job for this company.",
        success: false,
      });
    }

    // check if job already exists with this title for this company by recruiter
    const jobExists = await Job.findOne({ title });
    if (jobExists) {
      return res.status(400).json({
        message: "Job already exists.",
        success: false,
      });
    }

    // create job
    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: experience,
      position,
      company: companyId,
      created_by: recruiterId,
    });

    return res.status(201).json({
      message: "Job created successfully.",
      job,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// for student
export const getAllJobs = async (req, res, next) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });

    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found.",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// for student
export const getJobById = async (req, res, next) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
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
export const getRecruiterJobs = async (req, res, next) => {
  try {
    const recruiterId = req.id;
    const jobs = await Job.find({ created_by: recruiterId });

    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found.",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
