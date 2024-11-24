import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiError } from '@/services/api.service';
import { forgetPassword } from '../thunk';
import { ForgetPasswordState } from '../interface';
import { ApiStatusEnum } from '@/interface/interface';

const initialState: ForgetPasswordState = {
  status: ApiStatusEnum.IDLE,
  error: null,
  responseMessage: null,
};

const forgetPasswordSlice = createSlice({
  name: 'forgetPassword',
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
      })
      .addCase(
        forgetPassword.fulfilled,
        (state, action: PayloadAction<{ message: string }>) => {
          state.status = ApiStatusEnum.SUCCEEDED;
          state.responseMessage = action.payload.message;
        }
      )
      .addCase(
        forgetPassword.rejected,
        (state, action: PayloadAction<ApiError | undefined>) => {
          state.status = ApiStatusEnum.FAILED;
          state.error =
            action.payload?.message || 'Failed to send reset password email';
        }
      );
  },
});

export const { resetForgetPasswordState } = forgetPasswordSlice.actions;

export default forgetPasswordSlice.reducer;
