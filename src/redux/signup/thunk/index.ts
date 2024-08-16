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
  async (signupData: SignupPayload, thunkAPI) => {
    try {
      const response = await apiService.post<any>('/users', signupData);

      if (response.data.message === "User created successfully and email sent") {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response as ApiError);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error as ApiError);
    }
  }
);
