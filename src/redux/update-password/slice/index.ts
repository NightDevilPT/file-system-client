import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiError } from '@/services/api.service';
import { updatePassword } from '../thunk';
import { UpdatePasswordState } from '../interface';

const initialState: UpdatePasswordState = {
  status: 'idle',
  error: null,
  responseMessage: null,
};

const updatePasswordSlice = createSlice({
  name: 'updatePassword',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePassword.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updatePassword.fulfilled, (state, action: PayloadAction<{ message: string }>) => {
        state.status = 'succeeded';
        state.responseMessage = action.payload.message;
      })
      .addCase(updatePassword.rejected, (state, action: PayloadAction<ApiError | undefined>) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Failed to update password';
      });
  },
});

export default updatePasswordSlice.reducer;
