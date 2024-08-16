import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignupState, userResponseInterface } from '../interface';
import { ApiError } from '@/services/api.service';
import { signupUser } from '../thunk';

const initialState: SignupState = {
  status: 'idle',
  error: null,
  data: null,
  responseMessage: null,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<userResponseInterface>) => {
        state.status = 'succeeded';
        state.responseMessage = action.payload.message; // Store the response message
      })
      .addCase(signupUser.rejected, (state, action: PayloadAction<ApiError | undefined>) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Signup failed';
      });
  },
});

export default signupSlice.reducer;
