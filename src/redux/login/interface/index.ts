export interface LoginPayload {
	email: string;
	password: string;
  }
  
  export interface userResponseInterface {
	message: string;
	data: {
	  jwt: string;
	  id: string;
	};
  }
  
  export interface LoginState {
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
	data: {
	  jwt: string;
	  id: string;
	} | null;
	responseMessage: string | null;
  }
  