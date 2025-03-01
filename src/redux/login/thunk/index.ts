import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginPayload, LoginResponse } from "../interface";
import { postRequest } from "@/services/api.service";
import { ApiRoutes } from "@/interface/api.interface";

export const loginUser = createAsyncThunk<
	LoginResponse, // Success Response Type
	LoginPayload, // Argument Type
	{ rejectValue: LoginResponse } // Rejected Response Type
>("login/loginUser", async (loginData, thunkAPI) => {
	try {
		const response = await postRequest<LoginResponse>(
			ApiRoutes.login,
			loginData
		);

		// ✅ Successful login
		if (response.status === "success") {
			return response;
		} else {
			// ❌ Reject with API error response
			return thunkAPI.rejectWithValue(response);
		}
	} catch (error: any) {
		return thunkAPI.rejectWithValue({
			status: "error",
			statusCode: error.statusCode || 500,
			message: error.message || "Login failed",
			error: error.error || null,
		} as LoginResponse);
	}
});
