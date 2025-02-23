import { createAsyncThunk } from "@reduxjs/toolkit";

import { ApiError } from "@/types/api.type";
import { post } from "@/services/api.service";
import { LoginPayload, userResponseInterface } from "../interface";

export const loginUser = createAsyncThunk<
	userResponseInterface, // ✅ Expected return type
	LoginPayload, // ✅ Payload type
	{ rejectValue: ApiError } // ✅ Reject type
>("login/loginUser", async (loginData: LoginPayload, thunkAPI) => {
	try {
		// ✅ Correct API call
		const response = await post<userResponseInterface>(
			"/users/login",
			loginData
		);

		console.log("✅ Login API Response:", response); // Debugging log

		// ✅ Return the actual response data
		return response.data;
	} catch (error: any) {
		console.error("❌ Login API Error:", error); // Debugging log

		return thunkAPI.rejectWithValue({
			message: error.message || "An error occurred during login.",
			status: error.status || 500, // ✅ Ensure statusCode is included
			data: null,
		});
	}
});
