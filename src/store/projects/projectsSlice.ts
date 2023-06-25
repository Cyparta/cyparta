import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";
import { RequestPostJob } from '../job/jobSlice';


export interface ProjectsState {
  loading: boolean;
  error: boolean;
  projects: []
}

const initialState: ProjectsState = {
  loading: false,
  error: false,
  projects: []
}

export const RequestGetProjects = createAsyncThunk(
    "RequestGetProjects",
    async (data, ThunkApi) => {
      try {
        const response = await axios.get(
          `https://cyparta-backend-gf7qm.ondigitalocean.app/projects/project/`);
        return response.data;
      } catch (error: any) {
        return ThunkApi.rejectWithValue(error.response.data);
      }
    }
  );

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Get Jobs
    builder
      .addCase(RequestGetProjects.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.projects = [];
      })
      .addCase(RequestGetProjects.fulfilled, (state, action) => {
        console.log(action)
        state.loading = false;
        state.projects = action.payload.results;
      })
      .addCase(RequestGetProjects.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = projectsSlice.actions

export default projectsSlice.reducer