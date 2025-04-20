import { Company } from "../models/company.model.js";
import { Job } from "../models/job.model.js";
import { Application } from "../models/application.model.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/dataUri.js";

// for recruiter
export const createCompany = async (req, res, next) => {
  try {
    const { name, description, website, location } = req.body;

    let logo = null;
    if (req.file) {
      try {
        const fileUri = getDataUri(req.file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        logo = cloudResponse.secure_url;
      } catch (uploadError) {
        console.error("File upload error:", uploadError);
        return res.status(500).json({
          message: "Error uploading profile photo",
          success: false,
        });
      }
    }

    // if (!name || !description || !website || !location) {
    //   return res.status(400).json({
    //     message: "Something is missing",
    //     success: false,
    //   });
    // }

    let company = await Company.findOne({ name });
    if (company) {
      return res.status(400).json({
        message: "Company already exist with this name.",
        success: false,
      });
    }

    company = await Company.create({
      name,
      description,
      website,
      location,
      logo,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company created successfully.",
      company,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// for recruiter
export const getCompanies = async (req, res, next) => {
  try {
    const userId = req.id;
    const companies = await Company.find({ userId });

    if (!companies) {
      return res.status(404).json({
        message: "Companies not found.",
        success: false,
      });
    }

    return res.status(200).json({ companies, success: true });
  } catch (error) {
    next(error);
  }
};

// for user
export const getCompanyById = async (req, res, next) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }
    return res.status(200).json({ company, success: true });
  } catch (error) {
    next(error);
  }
};

// for recruiter
export const updateCompany = async (req, res, next) => {
  try {
    const { name, description, website, location } = req.body;

    let logo = null;
    if (req.file) {
      try {
        const fileUri = getDataUri(req.file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        logo = cloudResponse.secure_url;
      } catch (uploadError) {
        console.error("File upload error:", uploadError);
        return res.status(500).json({
          message: "Error uploading profile photo",
          success: false,
        });
      }
    }

    const updateData = { name, description, website, location };

    if (logo) {
      updateData.logo = logo;
    }

    const existCompany = await Company.findById(req.params.id);
    if (!existCompany) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }

    if (existCompany.userId.toString() !== req.id) {
      return res.status(401).json({
        message: "You are not authorized to update this company.",
        success: false,
      });
    }

    await Company.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true }
    );

    return res
      .status(200)
      .json({ message: "Company information updated.", success: true });
  } catch (error) {
    next(error);
  }
};

// for recruiter
export const deleteCompany = async (req, res, next) => {
  // Find all jobs under this company
  const companyId = req.params.id;
  
  try {
    const existCompany = await Company.findById(companyId);
    if (!existCompany) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }

    if (existCompany.userId.toString() !== req.id) {
      return res.status(401).json({
        message: "You are not authorized to delete this company.",
        success: false,
      });
    }

    // Find all jobs of this company
    const jobs = await Job.find({ company: companyId });
    const jobIds = jobs.map((job) => job._id);

    // Delete applications related to those jobs
    if (jobIds.length > 0) {
      await Application.deleteMany({ job: { $in: jobIds } });
      await Job.deleteMany({ _id: { $in: jobIds } });
    }

    // Delete the company
    await Company.findByIdAndDelete(companyId);

    return res.status(200).json({
      message: "Company, related jobs, and applications deleted successfully.",
      success: true,
    });
  } catch (error) {
    console.error("Delete company error:", error);
    return next(error);
  }
};
