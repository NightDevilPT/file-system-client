import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService, ApiError } from '@/services/api.service';
import { UpdatePasswordResponse, UpdatePasswordPayload } from '../interface';

const apiService = new ApiService();

export const updatePassword = createAsyncThunk<
  UpdatePasswordResponse,
  UpdatePasswordPayload,
  { rejectValue: ApiError }
>(
  'updatePassword/updatePassword',
  async ({ password, token }, thunkAPI) => {
    try {
      const response = await apiService.put<UpdatePasswordResponse>(
        `/users/update-password?token=${token}`,
        { password }
      );

      if (response.data.message === 'Password updated successfully') {
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
