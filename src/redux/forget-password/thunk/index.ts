import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService, ApiError } from '@/services/api.service';
import { ForgetPasswordResponse } from '../interface';

const apiService = new ApiService();

export const forgetPassword = createAsyncThunk<
  ForgetPasswordResponse,  // Success response type
  { email: string },       // Argument type
  { rejectValue: ApiError } // Rejected action type
>(
  'forgetPassword/forgetPassword',
  async (forgetData, thunkAPI) => {
    try {
      const response = await apiService.put<any>('/users/forget-password', forgetData);

      if (response.data.message === "Reset password email sent successfully") {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response as ApiError);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error as ApiError);
    }
  }
);
