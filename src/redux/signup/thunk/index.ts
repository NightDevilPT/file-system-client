import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService, ApiError } from '@/services/api.service';
import { SignupPayload, userResponseInterface } from '../interface';

const apiService = new ApiService();

export const signupUser = createAsyncThunk<
  userResponseInterface,  // Success response type
  SignupPayload,          // Argument type
  { rejectValue: ApiError } // Rejected action type
>(
  'signup/signupUser',
  async (signupData, thunkAPI) => {
    try {
      const response = await apiService.post<userResponseInterface>('/users', signupData);

      if (response.data.message === "User created successfully and email sent") {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue({
          message: 'Unexpected response from the server.',
        } as ApiError);
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        message: error.message || 'Signup failed due to an unknown error.',
      } as ApiError);
    }
  }
);
