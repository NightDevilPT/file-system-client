import { MetaData } from "@/interface/api.interface";
import { ApiStatusEnum } from "@/interface/interface";

export interface LoginPayload {
	email: string;
	password: string;
}

export interface LoginState {
	status: ApiStatusEnum;
	error: string | null;
	data?: any; // Store user data if needed
	responseMessage?: string | null;
}

export interface LoginResponse {
	status: "success" | "error";
	statusCode: number;
	message: string;
	data?: any;
	error?: string | null;
	meta?: MetaData;
}
