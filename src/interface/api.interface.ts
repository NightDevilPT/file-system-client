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
  