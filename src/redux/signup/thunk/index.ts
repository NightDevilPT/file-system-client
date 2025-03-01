import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignupPayload, SignupResponse } from "../interface";
import { postRequest } from "@/services/api.service";
import { ApiRoutes } from "@/interface/api.interface";

export const signupUser = createAsyncThunk<
	SignupResponse, // Success Response Type
	SignupPayload, // Argument Type
	{ rejectValue: SignupResponse } // Rejected Response Type
>("signup/signupUser", async (signupData, thunkAPI) => {
	try {
		const response = await postRequest<SignupResponse>(
			ApiRoutes.users,
			signupData
		);

		// ✅ Check if response is successful
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
			message: error.message || "Signup failed",
			error: error.error || null,
		} as SignupResponse);
	}
});
