import { createAsyncThunk } from "@reduxjs/toolkit";
import { put } from "@/services/api.service"; // ✅ Use named export
import { VerifyResponseInterface } from "../interface";
import { ApiError } from "@/types/api.type"; // ✅ Ensure correct error type

export const verifyUser = createAsyncThunk<
  VerifyResponseInterface,
  string,
  { rejectValue: ApiError }
>(
  "verify/verifyUser",
  async (token, thunkAPI) => {
    try {
      const response = await put<VerifyResponseInterface>(`/users/verify?token=${token}`);

      return response.data; // ✅ Response is already formatted by interceptor
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        status: error.status || 500,
        message: error.message || "Verification failed.",
        data: error.data || null,
      } as ApiError);
    }
  }
);
