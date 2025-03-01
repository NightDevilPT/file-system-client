import { MetaData } from "@/interface/api.interface";
import { ApiStatusEnum } from "@/interface/interface";

export interface ForgotPasswordPayload {
	email: string;
}

export interface ForgotPasswordState {
	status: ApiStatusEnum;
	error: string | null;
	responseMessage?: string | null;
}

export interface ForgotPasswordResponse {
	status: "success" | "error";
	statusCode: number;
	message: string;
	meta?: MetaData;
	error?: string | null;
}
