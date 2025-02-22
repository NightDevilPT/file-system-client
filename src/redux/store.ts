// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './signup/slice/index'; // Adjust the path as necessary
import verifyReducer from './verify/slice/index';
import loginReducer from './login/slice/index';
import forgetPasswordReducer from './forget-password/slice/index';
import updatePasswordReducer from './update-password/slice/index';


export const store = configureStore({
  reducer: {
    signup: signupReducer,
    verify: verifyReducer,
    login:loginReducer,
    forgetPassword:forgetPasswordReducer,
    updatePassword:updatePasswordReducer,
  },
});

// Export types for the store's state and dispatch to use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export enum StatusEnum {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

