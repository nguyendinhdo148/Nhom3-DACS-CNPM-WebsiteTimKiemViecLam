import { Application } from "./application";
import { Company } from "./comapany";
import { User } from "./user";

export interface Job {
  _id: string;
  title: string;
  description: string;
  requirements: string[];
  benefits: string[]; // Assuming benefits is an array of strings
  salary: number;
  experienceLevel: number;
  location: string;
  jobType: string;
  position: number;
  company: Company; // Company object instead of just an ID
  created_by: User; // Assuming user ID as a string
  applications: Application[]; // Array of application IDs
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
