// ✅ Define Backend Response Structure
export interface MetaData {
	totalCount?: number;
	totalPages?: number;
	nextPage?: number | null;
	previousPage?: number | null;
	[key: string]: any;
}

export interface ApiResponse<T> {
	status: "success" | "error";
	statusCode: number;
	data: T;
	message: string;
	meta?: MetaData;
}

export interface ApiError {
	status: number;
	message: string;
	data: any;
}
