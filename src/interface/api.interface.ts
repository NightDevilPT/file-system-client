export enum ApiRoutes {
	users = "/users",
	login = "/users/login",
	verify = '/users/verify?token=',
	forgetPassword = '/users/forget-password',
	updatePassword = '/users/update-password?token=',

	folders = "/folder",
	foldersPermission = "/folder/permission",

	commonResource = "/common/resource",
}

export interface MetaData {
	totalCount?: number;
	totalPages?: number;
	nextPage?: number | null;
	previousPage?: number | null;
	timestamp?: string;
	path?: string;
	[key: string]: any;
  }
  
  export interface ApiResponse<T = any> {
	status: 'success' | 'error';
	statusCode: number;
	message: string;
	data?: T | null;
	meta?: MetaData;
	error?: any; // Additional error details if applicable
  }
  
  export interface ApiError {
	status: 'error';
	statusCode: number;
	message: string;
	error?: any;
	meta?: MetaData;
  }
  