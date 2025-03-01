import { MetaData } from "@/interface/api.interface";
import { ApiStatusEnum } from "@/interface/interface";

export interface SignupPayload {
	username: string;
	email: string;
	password: string;
}

export interface SignupState {
	status: ApiStatusEnum;
	error: string | null;
	data?: any;
	responseMessage?: string | null;
}

export interface SignupResponse {
	status: "success" | "error";
	statusCode: number;
	message: string;
	data?: any;
	error?: string | null;
	meta?: MetaData;
}
