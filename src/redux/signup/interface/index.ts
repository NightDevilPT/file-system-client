import { ApiStatusEnum } from "@/interface/interface";

export interface SignupPayload {
  username: string;
  email: string;
  password: string;
}

export interface SignupState {
  status: ApiStatusEnum;
  error: string | null;
  data?: SignupPayload | null;
  responseMessage?: string | null;
}

export interface UserResponseInterface {
  status: "success" | "error";
  statusCode: number;
  message: string;
}
