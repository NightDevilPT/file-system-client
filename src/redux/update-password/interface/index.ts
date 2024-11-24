import { ApiStatusEnum } from '@/interface/interface';

export interface UpdatePasswordPayload {
  password: string;
  token: string;
}

export interface UpdatePasswordResponse {
  message: string;
}

export interface UpdatePasswordState {
  status: ApiStatusEnum;
  error: string | null;
  responseMessage: string | null;
}
