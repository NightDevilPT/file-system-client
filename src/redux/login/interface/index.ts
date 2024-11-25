import { ApiStatusEnum } from '@/interface/interface';

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
  status: ApiStatusEnum;
  error: string | null;
  data: {
    jwt: string;
    id: string | undefined;
  } | null;
  responseMessage: string | null;
}
