import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VerifyState, VerifyResponseInterface } from '../interface'; // Adjust based on your interface structure
import { ApiError } from '@/services/api.service';
import { verifyUser } from '../thunk';

const initialState: VerifyState = {
  status: 'idle',
  error: null,
  message: null,
};

const verifySlice = createSlice({
  name: 'verify',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(verifyUser.fulfilled, (state, action: PayloadAction<VerifyResponseInterface>) => {
        state.status = 'succeeded';
        state.message = action.payload.message; // Store the response message
      })
      .addCase(verifyUser.rejected, (state, action: PayloadAction<ApiError | undefined>) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Verification failed';
      });
  },
});

export default verifySlice.reducer;
