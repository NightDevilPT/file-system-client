import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiError } from '@/services/api.service';
import { forgetPassword } from '../thunk';
import { ForgetPasswordState } from '../interface';

const initialState: ForgetPasswordState = {
  status: 'idle',
  error: null,
  responseMessage: null,
};

const forgetPasswordSlice = createSlice({
  name: 'forgetPassword',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgetPassword.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(forgetPassword.fulfilled, (state, action: PayloadAction<{ message: string }>) => {
        state.status = 'succeeded';
        state.responseMessage = action.payload.message;
      })
      .addCase(forgetPassword.rejected, (state, action: PayloadAction<ApiError | undefined>) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Failed to send reset password email';
      });
  },
});

export default forgetPasswordSlice.reducer;
