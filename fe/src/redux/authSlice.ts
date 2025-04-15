import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user";

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")!)
  : null;

interface AuthState {
  loading: boolean;
  user: User | null;
}

const initialState: AuthState = {
  loading: false,
  user: userFromStorage,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // action
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
