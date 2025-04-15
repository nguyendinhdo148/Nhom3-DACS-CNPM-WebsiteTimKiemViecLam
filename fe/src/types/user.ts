export interface User {
  _id: string;
  fullname: string;
  email: string;
  phoneNumber: number;
  profile: {
    bio?: string;
    skills?: string[];
    resume?: string;
    resumeOriginalName?: string;
    company?: string;
    profilePhoto: string;
  };
  createdAt: string;
  updatedAt: string;
}
