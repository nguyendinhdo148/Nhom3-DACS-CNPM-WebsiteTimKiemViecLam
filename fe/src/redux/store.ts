import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    // Add your slices here
    auth: authSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
