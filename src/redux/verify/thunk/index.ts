import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService, ApiError } from '@/services/api.service';
import { VerifyResponseInterface } from '../interface';

const apiService = new ApiService();

export const verifyUser = createAsyncThunk<
  VerifyResponseInterface,
  string,
  { rejectValue: ApiError }
>(
  'verify/verifyUser',
  async (token, thunkAPI) => {
    try {
      const response = await apiService.put<VerifyResponseInterface>(`/users/verify?token=${token}`);

      if (response.data.message === 'User verified successfully') {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue({
          message: 'Unexpected response from the server.',
        } as ApiError);
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        message: error.message || 'Verification failed.',
      } as ApiError);
    }
  }
);
