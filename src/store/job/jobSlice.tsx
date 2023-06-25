import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

import type { PayloadAction } from '@reduxjs/toolkit'

export interface jobState {
  value: number,
  loading: boolean,
  error: boolean,
  jobs: any
}

const initialState: jobState = {
  value: 0,
  loading: false,
  error: false,
  jobs: []
}

// get JOBS
export const RequestGetJobs = createAsyncThunk(
  "RequestGetJobs",
  async (data, ThunkApi) => {
    try {
      const response = await axios.get(
        `https://cyparta-backend-gf7qm.ondigitalocean.app/api/router/job/`,
        {
          headers: {
            Authorization: `Token 9c8a92693de36528160272cd72e85ac026459a27`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return ThunkApi.rejectWithValue(error.response.data);
    }
  }
);

// post JOB
export const RequestPostJob = createAsyncThunk(
  "RequestPostJob",
  async (data: any, ThunkApi) => {
    try {
      const response = await axios.post(
        `https://cyparta-backend-gf7qm.ondigitalocean.app/api/router/job/`,
        {
          ...data
        },
        {
          headers: {
            Authorization: `Token 9c8a92693de36528160272cd72e85ac026459a27`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return ThunkApi.rejectWithValue(error.response.data);
    }
  }
);

// delete JOB
export const RequestDeleteJob = createAsyncThunk(
  "RequestDeleteJob",
  async (data: number, ThunkApi) => {
    try {
      const response = await axios.delete(
        `https://cyparta-backend-gf7qm.ondigitalocean.app/api/router/job/${data}/`,
        {
          headers: {
            Authorization: `Token 9c8a92693de36528160272cd72e85ac026459a27`,
          },
        }
      );
      return {id:data};
    } catch (error: any) {
      return ThunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Get Jobs
    builder
      .addCase(RequestGetJobs.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.jobs = [];
      })
      .addCase(RequestGetJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload.data;
      })
      .addCase(RequestGetJobs.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });

      // post Job
      builder
      .addCase(RequestPostJob.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(RequestPostJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(RequestPostJob.rejected, (state, action:any) => {
        state.loading = false;
        state.error = false;
      });

      // Delete job
      builder
      .addCase(RequestDeleteJob.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(RequestDeleteJob.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action.payload.id)
        state.jobs = state.jobs.filter((item:any) => item.id !== action.payload.id)
      })
      .addCase(RequestDeleteJob.rejected, (state, action:any) => {
        state.loading = false;
        state.error = false;
      });
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = jobSlice.actions

export default jobSlice.reducer