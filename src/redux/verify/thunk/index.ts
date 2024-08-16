import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService, ApiError } from '@/services/api.service'; // Adjust the path to your ApiService
import { VerifyResponseInterface } from '../interface'; // Adjust the path based on your interface structure

const apiService = new ApiService();

export const verifyUser = createAsyncThunk<
  VerifyResponseInterface, // Success response type
  string, // Argument type (token)
  { rejectValue: ApiError } // Rejected action type
>(
  'verify/verifyUser',
  async (token: string, thunkAPI) => {
    try {
      const response = await apiService.put<any>(`/users/verify?token=${token}`);

      if (response.data.message === "User verified successfully") {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response as ApiError);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error as ApiError);
    }
  }
);
