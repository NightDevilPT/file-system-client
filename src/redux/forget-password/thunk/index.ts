import { createAsyncThunk } from "@reduxjs/toolkit";
import { put } from "@/services/api.service"; // ✅ Use the named export `put`
import { ForgetPasswordResponse } from "../interface";
import { ApiError } from "@/types/api.type"; // Ensure correct error typing

export const forgetPassword = createAsyncThunk<
  ForgetPasswordResponse,
  { email: string },
  { rejectValue: ApiError }
>(
  "forgetPassword/forgetPassword",
  async (forgetData, thunkAPI) => {
    try {
      // ✅ Call the `put` function from the API service
      const response = await put<ForgetPasswordResponse>(
        "/users/forget-password",
        forgetData
      );

      // ✅ Since the interceptor formats responses, we can return `response.data`
      return response.data;
    } catch (error: any) {
      // ✅ Handle API error properly
      return thunkAPI.rejectWithValue({
        status: error.status || 500,
        message: error.message || "An error occurred.",
        data: error.data || null,
      } as ApiError);
    }
  }
);
