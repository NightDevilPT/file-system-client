import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginState, userResponseInterface } from '../interface';
import { ApiError } from '@/services/api.service';
import { loginUser } from '../thunk';

const initialState: LoginState = {
  status: 'idle',
  error: null,
  data: null,
  responseMessage: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<userResponseInterface>) => {
        state.status = 'succeeded';
        state.responseMessage = action.payload.message;
        state.data = action.payload.data; // Store the JWT and user ID
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<ApiError | undefined>) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Login failed';
      });
  },
});

export default loginSlice.reducer;
