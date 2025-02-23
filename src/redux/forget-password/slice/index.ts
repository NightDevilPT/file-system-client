import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { forgetPassword } from "../thunk";
import { ForgetPasswordState } from "../interface";
import { ApiStatusEnum } from "@/interface/interface";
import { ApiError } from "@/types/api.type"; // ✅ Import ApiError type
import { ForgetPasswordResponse } from "../interface"; // ✅ Import the correct response type

const initialState: ForgetPasswordState = {
  status: ApiStatusEnum.IDLE,
  error: null,
  responseMessage: null,
};

const forgetPasswordSlice = createSlice({
  name: "forgetPassword",
  initialState,
  reducers: {
    resetForgetPasswordState: (state) => {
      state.status = ApiStatusEnum.IDLE;
      state.error = null;
      state.responseMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgetPassword.pending, (state) => {
        state.status = ApiStatusEnum.LOADING;
        state.error = null;
        state.responseMessage = null;
      })
      .addCase(
        forgetPassword.fulfilled,
        (state, action: PayloadAction<ForgetPasswordResponse>) => {
          state.status = ApiStatusEnum.SUCCEEDED;
          state.responseMessage = action.payload.message; // ✅ Ensure message extraction is correct
          state.error = null; // ✅ Clear error upon success
        }
      )
      .addCase(forgetPassword.rejected, (state, action) => {
        state.status = ApiStatusEnum.FAILED;
        state.error =
          action.payload?.message || "Failed to send reset password email"; // ✅ Correct error handling
        state.responseMessage = null; // ✅ Clear previous response message
      });
  },
});

export const { resetForgetPasswordState } = forgetPasswordSlice.actions;

export default forgetPasswordSlice.reducer;
