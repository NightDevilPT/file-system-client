import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService, ApiError } from '@/services/api.service';
import { ForgetPasswordResponse } from '../interface';

const apiService = new ApiService();

export const forgetPassword = createAsyncThunk<
  ForgetPasswordResponse,
  { email: string },
  { rejectValue: ApiError }
>(
  'forgetPassword/forgetPassword',
  async (forgetData, thunkAPI) => {
    try {
      const response = await apiService.put<ForgetPasswordResponse>(
        '/users/forget-password',
        forgetData
      );

      if (response.data.message === 'Reset password email sent successfully') {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue({
          message: 'Unexpected response from the server.',
        } as ApiError);
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        message: error.message || 'An error occurred.',
      } as ApiError);
    }
  }
);
