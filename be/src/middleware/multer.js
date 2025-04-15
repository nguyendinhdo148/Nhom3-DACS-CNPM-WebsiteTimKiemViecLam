import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory
export const singleUpload = multer({ storage }).single("file"); // Use 'file' as the field name for the file input in the form
