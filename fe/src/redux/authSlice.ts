import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user";

interface AuthState {
  loading: boolean;
  user: User | null;
}

const initialState: AuthState = {
  loading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
