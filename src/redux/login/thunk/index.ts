import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService, ApiError } from '@/services/api.service';
import { LoginPayload, userResponseInterface } from '../interface';

const apiService = new ApiService();

export const loginUser = createAsyncThunk<
  userResponseInterface,
  LoginPayload,
  { rejectValue: ApiError }
>(
  'login/loginUser',
  async (loginData: LoginPayload, thunkAPI) => {
    try {
      const response = await apiService.post<userResponseInterface>(
        '/users/login',
        loginData
      );

      if (response.data.message === 'Login successful') {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue({
          message: 'Unexpected response from the server.',
        } as ApiError);
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        message: error.message || 'An error occurred during login.',
      } as ApiError);
    }
  }
);
