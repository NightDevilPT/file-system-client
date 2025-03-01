// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "@/redux/login/slice";
import signupReducer from "@/redux/signup/slice";
import verifyReducer from "@/redux/verify/slice";
import forgetPasswordReducer from "@/redux/forget-password/slice";

export const store = configureStore({
	reducer: {
		signup: signupReducer,
		login: loginReducer,
		verify: verifyReducer,
		forgetPassword: forgetPasswordReducer,
	},
});

// Export types for the store's state and dispatch to use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export enum StatusEnum {
	Idle = "idle",
	Loading = "loading",
	Succeeded = "succeeded",
	Failed = "failed",
}
