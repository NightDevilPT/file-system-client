import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updatePassword } from "../thunk";
import { UpdatePasswordState, UpdatePasswordResponse } from "../interface";
import { ApiStatusEnum } from "@/interface/interface";

const initialState: UpdatePasswordState = {
  status: ApiStatusEnum.IDLE,
  error: null,
  responseMessage: null,
};

const updatePasswordSlice = createSlice({
  name: "updatePassword",
  initialState,
  reducers: {
    resetUpdatePasswordState: (state) => {
      state.status = ApiStatusEnum.IDLE;
      state.error = null;
      state.responseMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatePassword.pending, (state) => {
        state.status = ApiStatusEnum.LOADING;
        state.error = null;
        state.responseMessage = null; // ✅ Reset response message
      })
      .addCase(
        updatePassword.fulfilled,
        (state, action: PayloadAction<UpdatePasswordResponse>) => {
          state.status = ApiStatusEnum.SUCCEEDED;
          state.responseMessage = action.payload.message;
          state.error = null; // ✅ Clear error on success
        }
      )
      .addCase(updatePassword.rejected, (state, action) => {
        state.status = ApiStatusEnum.FAILED;
        state.error = action.payload?.message || "Failed to update password"; // ✅ Proper error handling
        state.responseMessage = null;
      });
  },
});

export const { resetUpdatePasswordState } = updatePasswordSlice.actions;

export default updatePasswordSlice.reducer;
