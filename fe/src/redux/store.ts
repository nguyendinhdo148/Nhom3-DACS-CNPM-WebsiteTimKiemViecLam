import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice";

const store = configureStore({
  reducer: {
    // Add your slices here
    auth: authSlice,
    job: jobSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
