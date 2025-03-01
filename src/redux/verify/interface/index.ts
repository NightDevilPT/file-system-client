import { MetaData } from "@/interface/api.interface";
import { ApiStatusEnum } from "@/interface/interface";

export interface VerifyPayload {
	token: string;
}

export interface VerifyState {
	status: ApiStatusEnum;
	error: string | null;
	data?: any;
	responseMessage?: string | null;
}

export interface VerifyResponse {
	status: "success" | "error";
	statusCode: number;
	message: string;
	data?: any;
	error?: string | null;
	meta?: MetaData;
}
