import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

import { env } from "@/config/env";
import { ApiError, ApiResponse } from "@/interface/api.interface";

// **🔹 Create Axios Instance**
const api: AxiosInstance = axios.create({
	baseURL: env.BACKEND_URL,
	withCredentials: true, // ✅ Ensure cookies are sent with requests
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 10000, // ✅ Set request timeout
});

// **🔹 API Response Interceptor: Handles Success & Errors**
api.interceptors.response.use(
	(response: AxiosResponse<ApiResponse<any>>) => {
		return response; // ✅ Return full AxiosResponse object
	},
	async (error: AxiosError<ApiResponse | undefined>) => {
		if (error.response) {
			const statusCode = error.response.status;

			// **🔹 Refresh Token Logic**
			if (statusCode === 401) {
				console.warn("Access Token expired, attempting refresh...");
				try {
					await refreshToken();
					console.log("Token refreshed, retrying request...");
					return api.request(error.config as any); // ✅ Retry failed request
				} catch (refreshError) {
					console.error(
						"Refresh Token expired, user must log in again."
					);
					return Promise.reject<ApiError>({
						status: "error",
						statusCode: 401,
						message: "Session expired. Please log in again.",
					});
				}
			}

			// **🔹 Return structured API error response**
			return Promise.reject<ApiError>({
				status: "error",
				statusCode: statusCode,
				message:
					error.response.data?.message ||
					"Unexpected server response",
				error: error.response.data?.error || null,
				meta: error.response.data?.meta || undefined,
			});
		}

		// **🔹 Handle Network Errors**
		return Promise.reject<ApiError>({
			status: "error",
			statusCode: 500,
			message: error.message || "Network error",
		});
	}
);

// TODO: Add more API helper functions as needed
// **🔹 Token Refresh Function**
export const refreshToken = async (): Promise<void> => {
	try {
		console.log("Refreshing access token...");
		await api.post("/auth/refresh-token"); // ✅ Backend will set new tokens in cookies
	} catch (error) {
		throw new Error("Unable to refresh token.");
	}
};

// **🔹 GET Request**
export const getRequest = async <T = any>(
	url: string,
	params: object = {}
): Promise<ApiResponse<T>> => {
	const response = await api.get<ApiResponse<T>>(url, { params });
	return response.data; // ✅ Extract & return API response data
};

// **🔹 POST Request**
export const postRequest = async <T = any>(
	url: string,
	data: any
): Promise<ApiResponse<T>> => {
	const response = await api.post<ApiResponse<T>>(url, data);
	return response.data;
};

// **🔹 PUT Request**
export const putRequest = async <T = any>(
	url: string,
	data?: any
): Promise<ApiResponse<T>> => {
	const response = await api.put<ApiResponse<T>>(url, data);
	return response.data;
};

// **🔹 DELETE Request**
export const deleteRequest = async <T = any>(
	url: string
): Promise<ApiResponse<T>> => {
	const response = await api.delete<ApiResponse<T>>(url);
	return response.data;
};

// **🔹 File Upload Request**
export const uploadFile = async <T = any>(
	url: string,
	formData: FormData
): Promise<ApiResponse<T>> => {
	const response = await api.post<ApiResponse<T>>(url, formData, {
		headers: { "Content-Type": "multipart/form-data" },
	});
	return response.data;
};
