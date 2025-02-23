import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRoutes, post } from "@/services/api.service";
import { SignupPayload, UserResponseInterface } from "../interface";

export const signupUser = createAsyncThunk<
	UserResponseInterface, // ✅ Expected response format
	SignupPayload, // ✅ Payload format
	{ rejectValue: { message: string } } // ✅ Error format
>("signup/signupUser", async (signupData, thunkAPI) => {
	try {
		const response = await post<UserResponseInterface>(
			apiRoutes.users,
			signupData
		);

		if (response.statusCode === 201) {
			return response;
		} else {
			return thunkAPI.rejectWithValue({
				message:
					response.message || "Unexpected response from the server.",
			});
		}
	} catch (error: any) {
		return thunkAPI.rejectWithValue({
			message: error.message || "Signup failed due to an unknown error.",
		});
	}
});
