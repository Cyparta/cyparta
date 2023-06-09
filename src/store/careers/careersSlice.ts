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
    work_from: string;
    category: string;
    jop_type: string;
  };
  category: []
}

const initialState: CareersState = {
  loading: false,
  error: false,
  careers: [],
  career: {},
  filter: {
    category: "",
    jop_type: "",
    work_from: "",
  },
  category: []
};

// get All Career
export const RequestGetCategory = createAsyncThunk(
  "RequestGetCategory",
  async (data, { getState, rejectWithValue }) => {
    try {
      const state: any = getState();
      const lang = state.lang.value.lang;
      
      const careerLang =
      lang === "en"
        ? `apis/careers/`
        : `ar/apis/careers/`;

      const response = await axios.get(`${BASEURL}${careerLang}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// get All Career
export const RequestGetCareers = createAsyncThunk(
  "RequestGetCareers",
  async (data, { getState, rejectWithValue }) => {
    try {
      const state: any = getState();
      const { category, jop_type, work_from } = state.careers.filter;
      const lang = state.lang.value.lang;
      
      const careerLang =
      lang === "en"
        ? `apis/careers/?work_from=${work_from}&jop_type=${jop_type}&category=${category}`
        : `ar/apis/careers/?work_from=${work_from}&jop_type=${jop_type}&category=${category}`;

      const response = await axios.get(
        `${BASEURL}${careerLang}`
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// get career
export const RequestGetCareer = createAsyncThunk(
  "RequestGetCareer",
  async (id: any, { getState, rejectWithValue }) => {
    try {
      const state: any = getState();
      const lang = state.lang.value.lang;
      
      const careerLang =
      lang === "en"
        ? `apis/careers/${id}/`
        : `ar/apis/careers/${id}/`;

      const response = await axios.get(
        `${BASEURL}${careerLang}`
      );
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
      state.filter[action.payload.name as keyof typeof state.filter] =
        action.payload.val;
    },
  },
  extraReducers: (builder) => {
    // Get products
    builder
      .addCase(RequestGetCareers.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.careers = [];
        // state.category = state.category;
      })
      .addCase(RequestGetCareers.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.careers = action.payload;
        // state.category = action.payload;
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
        state.loading = false;
        state.career = action.payload;
      })
      .addCase(RequestGetCareer.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });

      builder
      .addCase(RequestGetCategory.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.category = [];
      })
      .addCase(RequestGetCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(RequestGetCategory.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });

  },
});

// Action creators are generated for each case reducer function
export const { setFilter } = careersSlice.actions;

export default careersSlice.reducer;
