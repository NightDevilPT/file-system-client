export interface ForgetPasswordResponse {
	message: string;
}

export interface ForgetPasswordState {
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
	responseMessage: string | null;
}
