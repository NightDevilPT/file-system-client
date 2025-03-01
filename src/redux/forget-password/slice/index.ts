import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sendForgotPasswordEmail } from "../thunk";
import { ApiStatusEnum } from "@/interface/interface";
import { ForgotPasswordState, ForgotPasswordResponse } from "../interface";

const initialState: ForgotPasswordState = {
	status: ApiStatusEnum.IDLE,
	error: null,
	responseMessage: null,
};

const forgotPasswordSlice = createSlice({
	name: "forgotPassword",
	initialState,
	reducers: {
		resetForgotPasswordState: (state) => {
			state.status = ApiStatusEnum.IDLE;
			state.error = null;
			state.responseMessage = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(sendForgotPasswordEmail.pending, (state) => {
				state.status = ApiStatusEnum.LOADING;
				state.error = null;
				state.responseMessage = null;
			})
			.addCase(
				sendForgotPasswordEmail.fulfilled,
				(state, action: PayloadAction<ForgotPasswordResponse>) => {
					state.status = ApiStatusEnum.SUCCEEDED;
					state.responseMessage = action.payload.message;
				}
			)
			.addCase(
				sendForgotPasswordEmail.rejected,
				(
					state,
					action: PayloadAction<ForgotPasswordResponse | undefined>
				) => {
					state.status = ApiStatusEnum.FAILED;
					state.error =
						action.payload?.message || "Failed to send reset link";
				}
			);
	},
});

export const { resetForgotPasswordState } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
