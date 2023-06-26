// /apis/careers/


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "@/data/APIS";

export interface CareersState {
  loading: boolean;
  error: boolean;
  careers: [];
  col: {};
  filter: {
    type:string;
    ordering: string;
  }
}

const initialState: CareersState = {
  loading: false,
  error: false,
  careers: [],
  col: {},
  filter: {
    type: "",
    ordering: "launched_at"
  }
};

export const RequestGetCareers = createAsyncThunk(
  "RequestGetCareers",
  async (data, {getState,rejectWithValue }) => {
    try {
      const state:any = getState()
      const filter = state.products.filter
      const response = await axios.get(`${BASEURL}apis/careers/`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const careersSlice = createSlice({
  name: "careers",
  initialState,
  reducers: {
    setFilter: (state, action: { payload: { name: string; val: string } }) => {
      state.filter[action.payload.name as keyof typeof state.filter] = action.payload.val;
    }
  },
  extraReducers: (builder) => {
    // Get products
    builder
      .addCase(RequestGetCareers.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.careers = [];
      })
      .addCase(RequestGetCareers.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.careers = action.payload;
      })
      .addCase(RequestGetCareers.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setFilter } = careersSlice.actions

export default careersSlice.reducer;