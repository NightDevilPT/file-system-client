export interface VerifyResponseInterface {
	message: string;
}

export interface VerifyState {
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
	message: string | null;
}
