import { Company } from "../models/company.model.js";
import { Job } from "../models/job.model.js";
import { Application } from "../models/application.model.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/dataUri.js";

// for recruiter
export const createCompany = async (req, res, next) => {
  try {
    const { name, description, website, location, taxCode } = req.body;
    const files = req.files;

    // Kiểm tra tên công ty trùng
    let company = await Company.findOne({ taxCode });
    if (company) {
      return res.status(400).json({
        message: "Duplicate business license.",
        success: false,
      });
    }

    // Upload logo nếu có
    let logo = null;
    if (files?.logo?.length) {
      const fileUri = getDataUri(files.logo[0]);
      const uploadRes = await cloudinary.uploader.upload(fileUri.content);
      logo = uploadRes.secure_url;
    }

    // Upload business license nếu có
    let businessLicense = null;
    if (files?.businessLicense?.length) {
      const fileUri = getDataUri(files.businessLicense[0]);
      const uploadRes = await cloudinary.uploader.upload(fileUri.content);
      businessLicense = uploadRes.secure_url;
    }

    company = await Company.create({
      name,
      description,
      website,
      location,
      taxCode,
      logo,
      businessLicense,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company created successfully.",
      company,
      success: true,
    });
  } catch (error) {
    console.error("Error creating company:", error);
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
    const { name, description, website, location, taxCode } = req.body;

    const files = req.files; // req.files là một object chứa các file được upload

    // kiểm tra taxCode có bị trùng không
    const checkTaxCode = await Company.findOne({
      taxCode,
      _id: { $ne: req.params.id }, // loại trừ công ty hiện tại
    });
    if (checkTaxCode) {
      return res.status(400).json({
        message: "Duplicate business license.",
        success: false,
      });
    }

    // Upload logo nếu có
    let logo = null;
    if (files?.logo?.length) {
      const fileUri = getDataUri(files.logo[0]);
      const uploadRes = await cloudinary.uploader.upload(fileUri.content);
      logo = uploadRes.secure_url;
    }

    // Upload business license nếu có
    let businessLicense = null;
    if (files?.businessLicense?.length) {
      const fileUri = getDataUri(files.businessLicense[0]);
      const uploadRes = await cloudinary.uploader.upload(fileUri.content);
      businessLicense = uploadRes.secure_url;
    }

    const updateData = { name, description, website, location, taxCode };

    if (logo) {
      updateData.logo = logo;
    }

    if (businessLicense) {
      updateData.businessLicense = businessLicense;
    }

    // Kiểm tra xem công ty có tồn tại
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
