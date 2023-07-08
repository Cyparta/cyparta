// /apis/blogs/

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "@/data/APIS";

export interface BlogsState {
  loading: boolean;
  error: boolean;
  blogs: [];
  blog: {};
  filter: {
    type: string;
    ordering: string;
  };
}

const initialState: BlogsState = {
  loading: false,
  error: false,
  blogs: [],
  blog: {},
  filter: {
    type: "",
    ordering: "launched_at",
  },
};

export const RequestGetBlogs = createAsyncThunk(
  "RequestGetBlogs",
  async (data, { getState, rejectWithValue }) => {
    try {
      const state: any = getState();
      const filter = state.products.filter;
      const response = await axios.get(
        `${BASEURL}apis/blogs/`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setFilter: (state, action: { payload: { name: string; val: string } }) => {
      state.filter[action.payload.name as keyof typeof state.filter] =
        action.payload.val;
    },
  },
  extraReducers: (builder) => {
    // Get Blogs
    builder
      .addCase(RequestGetBlogs.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.blogs = [];
      })
      .addCase(RequestGetBlogs.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(RequestGetBlogs.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { setFilter } = blogsSlice.actions;

export default blogsSlice.reducer;
