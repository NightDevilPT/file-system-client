import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiStatusEnum } from "@/interface/interface";
import { UpdatePasswordResponse, UpdatePasswordState } from "../interface/intex";
import { updatePassword } from "../thunk/intex";

const initialState: UpdatePasswordState = {
	status: ApiStatusEnum.IDLE,
	error: null,
	responseMessage: null,
};

const updatePasswordSlice = createSlice({
	name: "updatePassword",
	initialState,
	reducers: {
		resetUpdatePasswordState: (state) => {
			state.status = ApiStatusEnum.IDLE;
			state.error = null;
			state.responseMessage = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(updatePassword.pending, (state) => {
				state.status = ApiStatusEnum.LOADING;
				state.error = null;
				state.responseMessage = null;
			})
			.addCase(
				updatePassword.fulfilled,
				(state, action: PayloadAction<UpdatePasswordResponse>) => {
					state.status = ApiStatusEnum.SUCCEEDED;
					state.responseMessage = action.payload.message;
				}
			)
			.addCase(
				updatePassword.rejected,
				(state, action: PayloadAction<UpdatePasswordResponse | undefined>) => {
					state.status = ApiStatusEnum.FAILED;
					state.error = action.payload?.message || "Failed to update password";
				}
			);
	},
});

export const { resetUpdatePasswordState } = updatePasswordSlice.actions;
export default updatePasswordSlice.reducer;
