import { createAsyncThunk } from "@reduxjs/toolkit";
import { put } from "@/services/api.service"; // ✅ Use named export
import { UpdatePasswordResponse, UpdatePasswordPayload } from "../interface";
import { ApiError } from "@/types/api.type"; // ✅ Correct error typing

export const updatePassword = createAsyncThunk<
  UpdatePasswordResponse,
  UpdatePasswordPayload,
  { rejectValue: ApiError }
>(
  "updatePassword/updatePassword",
  async ({ password, token }, thunkAPI) => {
    try {
      const response = await put<UpdatePasswordResponse>(
        `/users/update-password?token=${token}`,
        { password }
      );

      return response.data; // ✅ API response is already formatted by interceptor
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        status: error.status || 500,
        message: error.message || "Failed to update password.",
        data: error.data || null,
      } as ApiError);
    }
  }
);
