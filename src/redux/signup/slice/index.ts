import { signupUser } from "../thunk";
import { ApiStatusEnum } from "@/interface/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignupState, UserResponseInterface } from "../interface";

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
			state.responseMessage = null;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signupUser.pending, (state) => {
				state.status = ApiStatusEnum.LOADING;
				state.error = null;
			})
			.addCase(
				signupUser.fulfilled,
				(state, action: PayloadAction<UserResponseInterface>) => {
					state.status = ApiStatusEnum.SUCCEEDED;
					state.responseMessage = action.payload.message;
				}
			)
			.addCase(signupUser.rejected, (state, action) => {
				state.status = ApiStatusEnum.FAILED;
				state.error = action.payload?.message || "Signup failed";
			});
	},
});

export const { resetSignupState } = signupSlice.actions;
export default signupSlice.reducer;
