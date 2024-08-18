export interface UpdatePasswordPayload {
	password: string;
	token: string;
}

export interface UpdatePasswordResponse {
	message: string;
}

export interface UpdatePasswordState {
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
	responseMessage: string | null;
  }