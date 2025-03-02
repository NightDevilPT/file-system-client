import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest, putRequest } from "@/services/api.service";
import { ApiRoutes } from "@/interface/api.interface";
import { ForgotPasswordPayload, ForgotPasswordResponse } from "../interface";

export const sendForgotPasswordEmail = createAsyncThunk<
	ForgotPasswordResponse, // Success Response Type
	ForgotPasswordPayload, // Argument Type
	{ rejectValue: ForgotPasswordResponse } // Rejected Response Type
>("forgotPassword/sendForgotPasswordEmail", async (payload, thunkAPI) => {
	try {
		const response = await putRequest<ForgotPasswordResponse>(
			`${ApiRoutes.forgetPassword}`, // Adjust the endpoint as per your API
			payload
		);

		if (response.status === "success") {
			return response;
		} else {
			return thunkAPI.rejectWithValue(response);
		}
	} catch (error: any) {
		return thunkAPI.rejectWithValue({
			status: "error",
			statusCode: error.statusCode || 500,
			message: error.message || "Failed to send reset link",
			error: error.error || null,
		} as ForgotPasswordResponse);
	}
});
