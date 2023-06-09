import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "@/data/APIS";

export interface CollectionState {
  loading: boolean;
  error: boolean;
  collection: [];
  col: {};
  filter: {
    type: string;
    ordering: string;
  };
}

const initialState: CollectionState = {
  loading: false,
  error: false,
  collection: [],
  col: {},
  filter: {
    type: "",
    ordering: "launched_at",
  },
};

export const RequestGetProducts = createAsyncThunk(
  "RequestGetProducts",
  async (data, { getState, rejectWithValue }) => {
    const state: any = getState();
    const filter = state.products.filter;
    const lang = state.lang.value.lang;

    let params: any = {};

    if (filter.type !== "") {
      params.type = filter.type;
    }

    const productsLang =
      lang === "en"
        ? `apis/products/?ordering=${filter.ordering}`
        : `ar/apis/products/?ordering=${filter.ordering}`;

    try {
      const response = await axios.get(`${BASEURL}${productsLang}`, { params });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const RequestGetAllProducts = createAsyncThunk(
  "RequestGetAllProducts",
  async (data, { getState, rejectWithValue }) => {
    try {
      const state: any = getState();
      const filter = state.products.filter;

      const response = await axios.get(
        `${BASEURL}apis/products/?ordering=${filter.ordering}`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const RequestGetProduct = createAsyncThunk(
  "RequestGetProduct",
  async (id: any, {getState, rejectWithValue}) => {
    try {
      const state: any = getState();
      const lang = state.lang.value.lang;

      const productsLang =
      lang === "en"
        ? `apis/products/${id}/`
        : `ar/apis/products/${id}/`;

      const response = await axios.get(
        `${BASEURL}${productsLang}`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const projectsSlice = createSlice({
  name: "products",
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
      .addCase(RequestGetProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.collection = [];
      })
      .addCase(RequestGetProducts.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.collection = action.payload;
      })
      .addCase(RequestGetProducts.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });

    builder
      .addCase(RequestGetProduct.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.col = {};
      })
      .addCase(RequestGetProduct.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.col = action.payload;
      })
      .addCase(RequestGetProduct.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });

    builder
      .addCase(RequestGetAllProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.collection = [];
      })
      .addCase(RequestGetAllProducts.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.collection = action.payload;
      })
      .addCase(RequestGetAllProducts.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setFilter } = projectsSlice.actions;

export default projectsSlice.reducer;
