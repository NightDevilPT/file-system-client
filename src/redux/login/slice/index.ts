import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginState, LoginResponse } from "../interface";
import { ApiStatusEnum } from "@/interface/interface";
import { loginUser } from "../thunk";

const initialState: LoginState = {
	status: ApiStatusEnum.IDLE,
	error: null,
	data: null,
	responseMessage: null,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		resetLoginState: (state) => {
			state.status = ApiStatusEnum.IDLE;
			state.error = null;
			state.responseMessage = null;
			state.data = null;
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
				(state, action: PayloadAction<LoginResponse>) => {
					state.status = ApiStatusEnum.SUCCEEDED;
					state.responseMessage = action.payload.message;
					state.data = action.payload.data; // Store user data if needed
				}
			)
			.addCase(
				loginUser.rejected,
				(state, action: PayloadAction<LoginResponse | undefined>) => {
					state.status = ApiStatusEnum.FAILED;
					state.error = action.payload?.message || "Login failed";
				}
			);
	},
});

export const { resetLoginState } = loginSlice.actions;
export default loginSlice.reducer;
