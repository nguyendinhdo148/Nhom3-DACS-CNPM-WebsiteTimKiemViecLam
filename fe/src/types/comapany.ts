import { User } from "./user";

export interface Company {
  _id: string;
  name: string;
  description?: string; // Optional description
  website?: string; // Optional website URL
  location?: string; // Optional location
  logo?: string; // Optional logo URL
  userId: User; // ID của người dùng tạo công ty
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
