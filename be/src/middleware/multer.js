import multer from "multer";

// Multer storage chung
const storage = multer.memoryStorage();

// Middleware upload avatar mobile
export const mobileAvatarUpload = multer({ storage }).single("avatar"); // mobile gửi field 'avatar'

// Middleware upload file chung cho web
export const singleUpload = multer({ storage }).single("file");

// Upload company (logo, businessLicense)
export const companyUpload = multer({ storage }).fields([
  { name: "logo", maxCount: 1 },
  { name: "businessLicense", maxCount: 1 },
]);
