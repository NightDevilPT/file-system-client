import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { env } from "@/config/env";
import { ApiError, ApiResponse } from "@/types/api.type";

export const apiRoutes = {
	users : '/users',
}

// ✅ Create Axios Instance
const api: AxiosInstance = axios.create({
	baseURL: env.BACKEND_URL,
	headers: { "Content-Type": "application/json" },
	timeout: 10000, // 10s timeout
	withCredentials: true, // ✅ Allow cookies for authentication
});

// ✅ Debugging Request Interceptor
api.interceptors.request.use(
	(config) => {
	  console.log("🚀 Axios Request:", config);
	  return config;
	},
	(error) => {
	  console.error("❌ Axios Request Error:", error);
	  return Promise.reject(error);
	}
  );

// ✅ Response Interceptor (Fixed)
api.interceptors.response.use(
	(response: AxiosResponse) => {
		const { status, data } = response;

		// ✅ Ensure response follows expected format
		const formattedResponse: ApiResponse<any> = {
			status: "success",
			statusCode: status,
			data: data?.data ?? data, // Extract nested `data` if present
			message: data?.message ?? "Success",
		};

		// ✅ Attach metadata if available
		if (data?.meta || data?.metadata) {
			formattedResponse.meta = {
				totalCount: data?.meta?.totalCount ?? 0,
				totalPages: data?.meta?.totalPages ?? 0,
				nextPage: data?.meta?.nextPage ?? null,
				previousPage: data?.meta?.previousPage ?? null,
				...data?.meta,
			};
		}

		// ✅ Return transformed data but maintain `AxiosResponse` structure
		return { ...response, data: formattedResponse };
	},
	(error: AxiosError<{ message?: string }>) => {
		if (error.response) {
			return Promise.reject<ApiError>({
				status: error.response.status,
				message: error.response.data?.message || error.message,
				data: error.response.data || null,
			});
		}
		return Promise.reject<ApiError>({
			status: 500,
			message: error.message || "Internal Server Error",
			data: null,
		});
	}
);

// ✅ Generic Request Handler with Proper Typing
const handleRequest = async <T>(
	request: Promise<AxiosResponse<ApiResponse<T>>>
): Promise<ApiResponse<T>> => {
	try {
		const response = await request;
		console.log(response,'CONSLINGREPONSE');
		return response.data; // ✅ Extract and return only `ApiResponse<T>`
	} catch (error: any) {
		return Promise.reject({
			status: error.status || 500,
			message: error.message || "An unexpected error occurred",
			data: null,
		});
	}
};

// ✅ API Methods with Proper Typing & Error Handling
export const get = async <T = any>(
	url: string,
	params: object = {}
): Promise<ApiResponse<T>> => handleRequest<T>(api.get(url, { params }));

export const post = async <T = any>(
	url: string,
	data: any
): Promise<ApiResponse<T>> => handleRequest<T>(api.post(url, data));

export const put = async <T = any>(
	url: string,
	data?: any
): Promise<ApiResponse<T>> => handleRequest<T>(api.put(url, data));

export const del = async <T = any>(url: string): Promise<ApiResponse<T>> =>
	handleRequest<T>(api.delete(url));

export const upload = async <T = any>(
	url: string,
	formData: FormData
): Promise<ApiResponse<T>> =>
	handleRequest<T>(
		api.post(url, formData, {
			headers: { "Content-Type": "multipart/form-data" },
		})
	);

// ✅ Export Axios instance for direct access if needed
export default api;
