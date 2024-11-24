import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginState, userResponseInterface } from '../interface';
import { ApiError } from '@/services/api.service';
import { loginUser } from '../thunk';
import { ApiStatusEnum } from '@/interface/interface';

const initialState: LoginState = {
  status: ApiStatusEnum.IDLE,
  error: null,
  data: null,
  responseMessage: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    resetLoginState: (state) => {
      state.status = ApiStatusEnum.IDLE;
      state.error = null;
      state.responseMessage = null;
      // Preserve JWT if it exists
      if (state.data?.jwt) {
        state.data = {
          jwt: state.data.jwt,
          id: state.data.id,
        };
      } else {
        state.data = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = ApiStatusEnum.LOADING;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<userResponseInterface>) => {
          state.status = ApiStatusEnum.SUCCEEDED;
          state.responseMessage = action.payload.message;
          state.data = action.payload.data; // Store the JWT and user ID
        }
      )
      .addCase(
        loginUser.rejected,
        (state, action: PayloadAction<ApiError | undefined>) => {
          state.status = ApiStatusEnum.FAILED;
          state.error = action.payload?.message || 'Login failed';
        }
      );
  },
});

export const { resetLoginState } = loginSlice.actions;

export default loginSlice.reducer;
