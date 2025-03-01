import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignupState, SignupResponse } from "../interface";
import { signupUser } from "../thunk";
import { ApiStatusEnum } from "@/interface/interface";

const initialState: SignupState = {
	status: ApiStatusEnum.IDLE,
	error: null,
	data: null,
	responseMessage: null,
};

const signupSlice = createSlice({
	name: "signup",
	initialState,
	reducers: {
		resetSignupState: (state) => {
			state.status = ApiStatusEnum.IDLE;
			state.error = null;
			state.responseMessage = null;
			state.data = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signupUser.pending, (state) => {
				state.status = ApiStatusEnum.LOADING;
				state.error = null;
				state.responseMessage = null;
			})
			.addCase(
				signupUser.fulfilled,
				(state, action: PayloadAction<SignupResponse>) => {
					state.status = ApiStatusEnum.SUCCEEDED;
					state.responseMessage = action.payload.message;
					state.data = action.payload.data; // Store user data if needed
				}
			)
			.addCase(
				signupUser.rejected,
				(state, action: PayloadAction<SignupResponse | undefined>) => {
					state.status = ApiStatusEnum.FAILED;
					state.error = action.payload?.message || "Signup failed";
				}
			);
	},
});

export const { resetSignupState } = signupSlice.actions;
export default signupSlice.reducer;
