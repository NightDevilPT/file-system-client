import { ApiStatusEnum } from "@/interface/interface";

export interface SignupPayload {
	username: string;
	email: string;
	password: string;
}

export interface SignupState {
	status: ApiStatusEnum;
	error: string | null;
	data?: SignupPayload | null;  // Optional: To store the signup data if needed
	responseMessage?: string | null;  // Optional: To store the API response message if needed
  }
  

export interface userResponseInterface {
	message: string;
}
