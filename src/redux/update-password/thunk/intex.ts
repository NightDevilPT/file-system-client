import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest, putRequest } from "@/services/api.service";
import { ApiRoutes } from "@/interface/api.interface";
import {
	UpdatePasswordPayload,
	UpdatePasswordResponse,
} from "../interface/intex";

export const updatePassword = createAsyncThunk<
	UpdatePasswordResponse, // Success Response Type
	UpdatePasswordPayload, // Argument Type
	{ rejectValue: UpdatePasswordResponse } // Rejected Response Type
>("updatePassword/updatePassword", async (payload, thunkAPI) => {
	try {
		const response = await putRequest<UpdatePasswordResponse>(
			`${ApiRoutes.updatePassword}${payload.token}`, // Adjust the endpoint as per your API
			{ password: payload.password }
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
			message: error.message || "Failed to update password",
			error: error.error || null,
		} as UpdatePasswordResponse);
	}
});
