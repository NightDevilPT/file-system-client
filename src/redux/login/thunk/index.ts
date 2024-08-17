import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService, ApiError } from '@/services/api.service';
import { LoginPayload, userResponseInterface } from '../interface';

const apiService = new ApiService();

export const loginUser = createAsyncThunk<
  userResponseInterface,  // Success response type
  LoginPayload,          // Argument type
  { rejectValue: ApiError } // Rejected action type
>(
  'login/loginUser',
  async (loginData: LoginPayload, thunkAPI) => {
    try {
      const response = await apiService.post<any>('/users/login', loginData);

      if (response.data.message === "Login successful") {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response as ApiError);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error as ApiError);
    }
  }
);
