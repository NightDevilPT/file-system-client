import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VerifyState, VerifyResponseInterface } from '../interface';
import { ApiError } from '@/services/api.service';
import { verifyUser } from '../thunk';
import { ApiStatusEnum } from '@/interface/interface';

const initialState: VerifyState = {
  status: ApiStatusEnum.IDLE,
  error: null,
  message: null,
};

const verifySlice = createSlice({
  name: 'verify',
  initialState,
  reducers: {
    resetVerifyState: (state) => {
      state.status = ApiStatusEnum.IDLE;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyUser.pending, (state) => {
        state.status = ApiStatusEnum.LOADING;
        state.error = null;
      })
      .addCase(verifyUser.fulfilled, (state, action: PayloadAction<VerifyResponseInterface>) => {
        state.status = ApiStatusEnum.SUCCEEDED;
        state.message = action.payload.message;
      })
      .addCase(verifyUser.rejected, (state, action: PayloadAction<ApiError | undefined>) => {
        state.status = ApiStatusEnum.FAILED;
        state.error = action.payload?.message || 'Verification failed';
      });
  },
});

export const { resetVerifyState } = verifySlice.actions;

export default verifySlice.reducer;
