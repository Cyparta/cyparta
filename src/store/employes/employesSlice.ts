import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import axios from "axios";
import { toast } from 'react-toastify';


export interface employsState {
  value: number,
  loading: boolean,
  error: boolean,
  employs: any,
  test: any
}

const initialState: employsState = {
  value: 0,
  loading: false,
  employs: [],
  error: false,
  test: []
}

// https://cyparta-backend-gf7qm.ondigitalocean.app/users/api/router/employee/
export const RequestPostEmploye = createAsyncThunk(
  "RequestPostEmploye",
  async (data: any, ThunkApi) => {
    try {
      const response = await axios.post(
        `https://cyparta-backend-gf7qm.ondigitalocean.app/users/api/router/employee/`,
        {
          ...data
        },
        {
          headers: {
            Authorization: `Token 9c8a92693de36528160272cd72e85ac026459a27`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return ThunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const RequestGetEmploye = createAsyncThunk(
  "RequestGetEmploye",
  async (data, ThunkApi) => {
    try {
      const response = await axios.get(
        `https://cyparta-backend-gf7qm.ondigitalocean.app/users/api/router/employee/`,
        {
          headers: {
            Authorization: `Token 9c8a92693de36528160272cd72e85ac026459a27`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return ThunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const RequestDeleteEmploye = createAsyncThunk(
  "RequestDeleteEmploye",
  async (data: number, ThunkApi) => {
    try {
      const response = await axios.delete(
        `https://cyparta-backend-gf7qm.ondigitalocean.app/users/api/router/employee/${data}/`,
        {
          headers: {
            Authorization: `Token 9c8a92693de36528160272cd72e85ac026459a27`,
          },
        }
      );
      return {id:data};
    } catch (error: any) {
      return ThunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const employsSlice = createSlice({
  name: 'employs',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // post Employee
    builder
      .addCase(RequestPostEmploye.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.employs = [];
      })
      .addCase(RequestPostEmploye.fulfilled, (state, action) => {
        state.loading = false;
        state.employs = action.payload;
      })
      .addCase(RequestPostEmploye.rejected, (state, action:any) => {
        state.loading = false;
        state.error = false;
      });

      // Get Employee
      builder
      .addCase(RequestGetEmploye.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.employs = [];
      })
      .addCase(RequestGetEmploye.fulfilled, (state, action) => {
        state.loading = false;
        state.employs = action.payload.data;
      })
      .addCase(RequestGetEmploye.rejected, (state, action:any) => {
        state.loading = false;
        state.error = false;
      });

      // Delete Employee
      builder
      .addCase(RequestDeleteEmploye.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(RequestDeleteEmploye.fulfilled, (state, action) => {
        state.loading = false;
        state.employs = state.employs.filter((item:any) => item.id !== action.payload.id)
      })
      .addCase(RequestDeleteEmploye.rejected, (state, action:any) => {
        state.loading = false;
        state.error = false;
      });
  },
})


// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = employsSlice.actions

export default employsSlice.reducer