import { API_USER } from "@/utils/constant";
import axios from "axios";

interface RegisterParams {
  fullname: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
}

interface LoginParams {
  email: string;
  password: string;
  role: string;
}

export const register = async ({
  fullname,
  email,
  phoneNumber,
  password,
  role,
}: RegisterParams) => {
  try {
    const { data } = await axios.post(`${API_USER}/register`, {
      fullname,
      email,
      phoneNumber,
      password,
      role,
    });
    return data;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.data.message
    ) {
      throw new Error(error.response.data.message);
    }
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};

export const login = async ({ email, password, role }: LoginParams) => {
  try {
    const { data } = await axios.post(`${API_USER}/login`, {
      email,
      password,
      role,
    });
    
    return data;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.data.message
    ) {
      throw new Error(error.response.data.message);
    }
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};
