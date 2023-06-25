import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RequestPostJob } from "../job/jobSlice";
import { BASEURL } from "@/data/APIS";

export interface CollectionState {
  loading: boolean;
  error: boolean;
  collection: [];
  col: {};
}

const initialState: CollectionState = {
  loading: false,
  error: false,
  collection: [],
  col: {},
};

export const RequestGetCollection = createAsyncThunk(
  "RequestGetCollection",
  async (data, ThunkApi) => {
    try {
      const response = await axios.get(`${BASEURL}apis/collections/`);
      return response.data;
    } catch (error: any) {
      return ThunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const RequestGetColDetails = createAsyncThunk(
  "RequestGetColDetails",
  async (id, ThunkApi) => {
    console.log(id)
    try {
      const response = await axios.get(`${BASEURL}apis/collections/1`);
      return response.data;
    } catch (error: any) {
      return ThunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const projectsSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Jobs
    builder
      .addCase(RequestGetCollection.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.collection = [];
      })
      .addCase(RequestGetCollection.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.collection = action.payload;
      })
      .addCase(RequestGetCollection.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });

    builder
      .addCase(RequestGetColDetails.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.col = {};
      })
      .addCase(RequestGetColDetails.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.col = action.payload;
      })
      .addCase(RequestGetColDetails.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = projectsSlice.actions

export default projectsSlice.reducer;
