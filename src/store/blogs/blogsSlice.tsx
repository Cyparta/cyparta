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
  cate: [];
  filter: {
    category: string | number;
    search:string | number
  };
}

const initialState: BlogsState = {
  loading: false,
  error: false,
  blogs: [],
  blog: {},
  cate: [],
  filter: {
    category: "",
    search:""
  },
};


export const RequestGetBlogsCate = createAsyncThunk(
  "RequestGetBlogsCate",
  async (data, { getState, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASEURL}apis/category/`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const RequestGetBlogs = createAsyncThunk(
  "RequestGetBlogs",
  async (data, { getState, rejectWithValue }) => {
    const state: any = getState();
    const filter = state.blogs.filter;

    const params: {category?:any, search?:any} = {};
    console.log(filter.category)
    if (filter.category !== "") {
      params.category = filter.category
    }
    if (filter.search !== "") {
      params.search = filter.search
    }
    try {
      const response = await axios.get(
        `${BASEURL}apis/blogs/`,
        {params}
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const RequestGetBlog = createAsyncThunk(
  "RequestGetBlog",
  async (id: string | string[] | undefined, { getState, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASEURL}apis/blogs/${id}/`
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
    setFilter: (state, action: { payload: { name: string; val: string | number } }) => {
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
    // Get Blog
      builder
      .addCase(RequestGetBlog.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.blog = [];
      })
      .addCase(RequestGetBlog.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.blog = action.payload;
      })
      .addCase(RequestGetBlog.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });
      // Get Blog
      builder
      .addCase(RequestGetBlogsCate.pending, (state) => {
        state.error = false;
        state.cate = [];
      })
      .addCase(RequestGetBlogsCate.fulfilled, (state, action) => {
        state.loading = false;
        state.cate = action.payload;
      })
      .addCase(RequestGetBlogsCate.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setFilter } = blogsSlice.actions;

export default blogsSlice.reducer;
