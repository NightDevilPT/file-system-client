import { ApiStatusEnum } from '@/interface/interface';

export interface VerifyResponseInterface {
  message: string;
}

export interface VerifyState {
  status: ApiStatusEnum;
  error: string | null;
  message: string | null;
}
