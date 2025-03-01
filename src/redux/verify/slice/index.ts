import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VerifyState, VerifyResponse } from "../interface";
import { verifyUser } from "../thunk";
import { ApiStatusEnum } from "@/interface/interface";

const initialState: VerifyState = {
	status: ApiStatusEnum.IDLE,
	error: null,
	data: null,
	responseMessage: null,
};

const verifySlice = createSlice({
	name: "verify",
	initialState,
	reducers: {
		resetVerifyState: (state) => {
			state.status = ApiStatusEnum.IDLE;
			state.error = null;
			state.responseMessage = null;
			state.data = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(verifyUser.pending, (state) => {
				state.status = ApiStatusEnum.LOADING;
				state.error = null;
				state.responseMessage = null;
			})
			.addCase(
				verifyUser.fulfilled,
				(state, action: PayloadAction<VerifyResponse>) => {
					state.status = ApiStatusEnum.SUCCEEDED;
					state.responseMessage = action.payload.message;
					state.data = action.payload.data; // Store verified user data if needed
				}
			)
			.addCase(
				verifyUser.rejected,
				(state, action: PayloadAction<VerifyResponse | undefined>) => {
					state.status = ApiStatusEnum.FAILED;
					state.error =
						action.payload?.message || "Verification failed";
				}
			);
	},
});

export const { resetVerifyState } = verifySlice.actions;
export default verifySlice.reducer;
