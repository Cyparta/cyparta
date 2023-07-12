import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import axios from "axios";


const getLocalStoarge = () => {
  let user = null
  if (typeof window !== 'undefined') {
    const result = localStorage.getItem("token");
    user = result ? result : null;
  }
  return user;
};

export interface UserState {
  loading: boolean;
  error: boolean;
  user: any;
  errorMsg: String
}

const initialState: UserState = {
  loading: false,
  user: getLocalStoarge(),
  error: false,
  errorMsg: ""
}


export const RequestPostRegister = createAsyncThunk(
    "RequestPostRegister",
    async (data: any, ThunkApi) => {
      try {
        const response = await axios.post(
          `https://cyparta-backend-gf7qm.ondigitalocean.app/api/register/`,
          {
            ...data
          }
        );
        return response.data;
      } catch (error: any) {
        return ThunkApi.rejectWithValue(error.response.data);
      }
    }
  );

  export const RequestPostLogin = createAsyncThunk(
    "RequestPostLogin",
    async (data: {email: string; password: string}, ThunkApi) => {
      try {
        const response = await axios.post(
          `https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/`,
          {
            ...data,
          }
        );
        return response.data;
      } catch (error: any) {
        return ThunkApi.rejectWithValue(error.response.data);
      }
    }
  );

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RequestPostRegister.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.user = [];
      })
      .addCase(RequestPostRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.user = [action.payload];
      })
      .addCase(RequestPostRegister.rejected, (state, action:any) => {
        state.loading = false;
        state.error = false;
        state.errorMsg = action.payload.message;
      });

      builder
      .addCase(RequestPostLogin.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.user = [];
        state.errorMsg = ""
      })
      .addCase(RequestPostLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = [action.payload];
      })
      .addCase(RequestPostLogin.rejected, (state, action:any) => {
        state.loading = false;
        state.error = false;
        state.errorMsg = action.payload.message;
      });
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer