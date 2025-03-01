import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRoutes } from "@/interface/api.interface";
import { VerifyPayload, VerifyResponse } from "../interface";
import { postRequest, putRequest } from "@/services/api.service";

export const verifyUser = createAsyncThunk<
	VerifyResponse, // Success Response Type
	VerifyPayload, // Argument Type
	{ rejectValue: VerifyResponse } // Rejected Response Type
>("verify/verifyUser", async (verifyData, thunkAPI) => {
	try {
		const response = await putRequest<VerifyResponse>(
			ApiRoutes.verify + verifyData.token // Adjust the endpoint according to your API
		);

		// ✅ If response is successful
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
			message: error.message || "Verification failed",
			error: error.error || null,
		} as VerifyResponse);
	}
});
