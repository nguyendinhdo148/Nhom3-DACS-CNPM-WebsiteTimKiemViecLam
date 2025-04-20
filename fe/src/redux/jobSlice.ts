import { Job } from "@/types/job";
import { createSlice } from "@reduxjs/toolkit";

interface JobState {
  allJobs: Job[];
  singleJob: Job | undefined;
  jobsForRecruiter: Job[];
  selectedJob: Job | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: JobState = {
  allJobs: [],
  singleJob: undefined,
  jobsForRecruiter: [],
  selectedJob: null,
  isLoading: false,
  error: null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setJobsForRecruiter: (state, action) => {
      state.jobsForRecruiter = action.payload;
    },
    setSelectedJob: (state, action) => {
      state.selectedJob = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
    resetSelectedJob: (state) => {
      state.selectedJob = null;
    },
  },
});

export const {
  setAllJobs,
  setSingleJob,
  setJobsForRecruiter,
  setSelectedJob,
  setLoading,
  setError,
  resetError,
  resetSelectedJob,
} = jobSlice.actions;
export default jobSlice.reducer;
