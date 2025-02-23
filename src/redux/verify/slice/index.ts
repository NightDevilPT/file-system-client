import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VerifyState, VerifyResponseInterface } from "../interface";
import { verifyUser } from "../thunk";
import { ApiStatusEnum } from "@/interface/interface";
import { ApiError } from "@/types/api.type"; // ✅ Correct error type import

const initialState: VerifyState = {
	status: ApiStatusEnum.IDLE,
	error: null,
	message: null,
};

const verifySlice = createSlice({
	name: "verify",
	initialState,
	reducers: {
		resetVerifyState: (state) => {
			state.status = ApiStatusEnum.IDLE;
			state.error = null;
			state.message = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(verifyUser.pending, (state) => {
				state.status = ApiStatusEnum.LOADING;
				state.error = null;
				state.message = null; // ✅ Reset message on new request
			})
			.addCase(
				verifyUser.fulfilled,
				(state, action: PayloadAction<VerifyResponseInterface>) => {
					state.status = ApiStatusEnum.SUCCEEDED;
					state.message = action.payload.message;
					state.error = null;
				}
			)
			.addCase(verifyUser.rejected, (state, action) => {
				console.log(action.payload, "PAYLOAD");
				state.status = ApiStatusEnum.FAILED;
				state.error = action.payload?.message || "Verification failed"; // ✅ Proper error handling
				state.message = null;
			});
	},
});

export const { resetVerifyState } = verifySlice.actions;

export default verifySlice.reducer;
