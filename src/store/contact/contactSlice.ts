import { BASEURL } from '@/data/APIS';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";
import { toast } from 'react-toastify';

export interface ContactState {
  loading: boolean;
  error: boolean;
  contact: [];
  sent: boolean;
}

const initialState: ContactState = {
  loading: false,
  error: false,
  contact: [],
  sent: false
}

export const RequestPostContact = createAsyncThunk(
    "RequestPostContact",
    async (data: any, ThunkApi) => {
      try {
        const response = await axios.post(
          `${BASEURL}contact_us/`, {
            ...data
          });
        return response.data;
      } catch (error: any) {
        return ThunkApi.rejectWithValue(error.response.data);
      }
    }
  );


export const RequestPostSubscibe = createAsyncThunk(
    "RequestPostSubscibe",
    async (data: any, ThunkApi) => {
      try {
        const response = await axios.post(
          `${BASEURL}apis/subscribe/`, {
            ...data
          });
        return response.data;
      } catch (error: any) {
        return ThunkApi.rejectWithValue(error.response.data);
      }
    }
);

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // POST Contact
    builder
      .addCase(RequestPostContact.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.contact = [];
      })
      .addCase(RequestPostContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = action.payload;
      })
      .addCase(RequestPostContact.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });

      // POST Subscribe
      builder
      .addCase(RequestPostSubscibe.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.contact = [];
      })
      .addCase(RequestPostSubscibe.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = action.payload;
        state.sent = true
      })
      .addCase(RequestPostSubscibe.rejected, (state, action: any) => {
        state.loading = false;
        state.error = false;
      });
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = contactSlice.actions

export default contactSlice.reducer