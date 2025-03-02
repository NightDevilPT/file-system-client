import { MetaData } from "@/interface/api.interface";
import { ApiStatusEnum } from "@/interface/interface";

export interface UpdatePasswordPayload {
	password: string;
	token: string;
}

export interface UpdatePasswordState {
	status: ApiStatusEnum;
	error: string | null;
	responseMessage?: string | null;
}

export interface UpdatePasswordResponse {
	status: "success" | "error";
	statusCode: number;
	message: string;
	meta?: MetaData;
	error?: string | null;
}
