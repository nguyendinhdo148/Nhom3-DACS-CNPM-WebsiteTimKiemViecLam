import { Company } from "../models/company.model.js";

// for recruiter
export const registerCompany = async (req, res, next) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "Company already exist with this name.",
        success: false,
      });
    }

    company = await Company.create({ name: companyName, userId: req.id });

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
    const file = req.file;

    const updateData = { name, description, website, location };

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
  try {
    const existCompany = await Company.findById(req.params.id);
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

    await Company.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Company deleted.", success: true });
  } catch (error) {
    next(error);
  }
};
