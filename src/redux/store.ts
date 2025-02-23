// src/app/store.ts

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {},
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
