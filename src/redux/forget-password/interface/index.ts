import { ApiStatusEnum } from '@/interface/interface';

export interface ForgetPasswordResponse {
  message: string;
}

export interface ForgetPasswordState {
  status: ApiStatusEnum;
  error: string | null;
  responseMessage: string | null;
}
