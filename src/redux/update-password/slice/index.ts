import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiError } from '@/services/api.service';
import { updatePassword } from '../thunk';
import { UpdatePasswordState } from '../interface';
import { ApiStatusEnum } from '@/interface/interface';

const initialState: UpdatePasswordState = {
  status: ApiStatusEnum.IDLE,
  error: null,
  responseMessage: null,
};

const updatePasswordSlice = createSlice({
  name: 'updatePassword',
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
      })
      .addCase(
        updatePassword.fulfilled,
        (state, action: PayloadAction<{ message: string }>) => {
          state.status = ApiStatusEnum.SUCCEEDED;
          state.responseMessage = action.payload.message;
        }
      )
      .addCase(
        updatePassword.rejected,
        (state, action: PayloadAction<ApiError | undefined>) => {
          state.status = ApiStatusEnum.FAILED;
          state.error = action.payload?.message || 'Failed to update password';
        }
      );
  },
});

export const { resetUpdatePasswordState } = updatePasswordSlice.actions;

export default updatePasswordSlice.reducer;
