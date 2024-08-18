import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService, ApiError } from '@/services/api.service';
import { UpdatePasswordResponse, UpdatePasswordPayload } from '../interface';


const apiService = new ApiService();

export const updatePassword = createAsyncThunk<
  UpdatePasswordResponse,  // Success response type
  UpdatePasswordPayload,   // Argument type
  { rejectValue: ApiError } // Rejected action type
>(
  'updatePassword/updatePassword',
  async ({ password, token }, thunkAPI) => {
    try {
      const response = await apiService.put<any>(`/users/update-password?token=${token}`, { password });

      if (response.data.message === 'Password updated successfully') {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response as ApiError);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error as ApiError);
    }
  }
);
