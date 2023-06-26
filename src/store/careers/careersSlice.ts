// /apis/careers/


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "@/data/APIS";

export interface CareersState {
  loading: boolean;
  error: boolean;
  careers: [];
  career: {};
  filter: {
    type:string;
    ordering: string;
  }
}

const initialState: CareersState = {
  loading: false,
  error: false,
  careers: [],
  career: {},
  filter: {
    type: "",
    ordering: "launched_at"
  }
};


// get All Career
export const RequestGetCareers = createAsyncThunk(
  "RequestGetCareers",
  async (data, {getState,rejectWithValue }) => {
    try {
      const state:any = getState()
      const response = await axios.get(`${BASEURL}apis/careers/`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// get career
export const RequestGetCareer = createAsyncThunk(
  "RequestGetCareer",
  async (id: any, {getState,rejectWithValue }) => {
    try {
      const state:any = getState()
      const response = await axios.get(`https://cyparta-backend-gf7qm.ondigitalocean.app/apis/careers/1/`);
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

      builder
      .addCase(RequestGetCareer.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.career = [];
      })
      .addCase(RequestGetCareer.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.career = action.payload;
      })
      .addCase(RequestGetCareer.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setFilter } = careersSlice.actions

export default careersSlice.reducer;