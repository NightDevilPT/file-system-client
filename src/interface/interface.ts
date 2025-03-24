// ✅ View Type Enum (For Grid/Table View)
export enum FSViewEnum {
	GRID = "GRID",
	TABLE = "TABLE",
}

// ✅ File Type Enum
export enum FileTypeEnum {
	IMAGE = "IMAGE",
	DOCUMENT = "DOCUMENT",
	VIDEO = "VIDEO",
	OTHER = "OTHER",
}

// ✅ API Status Enum (For API Calls)
export enum ApiStatusEnum {
	IDLE = "idle",
	LOADING = "loading",
	SUCCEEDED = "succeeded",
	FAILED = "failed",
}

// ✅ Folder Type Enum (Replaces `FolderEnum` Type Alias)
export enum FolderTypeEnum {
	FOLDER = "FOLDER",
	FILE = "FILE",
}

// ✅ Access Level Enum (Replaces `PrivateEnum` Type Alias)
export enum AccessLevelEnum {
	PUBLIC = "PUBLIC",
	PRIVATE = "PRIVATE",
	ONLY = "ONLY",
}


// ✅ Breadcrumb Interface
export interface Breadcrumb {
	name: string;
	id: string;
}

// ✅ Grid & Table Props
export interface FSGridTableProps {
	data: FileFolder;
}

export interface FSFileFolderProps {
	data: FileFolder[];
}

// ✅ Folder Interface
export interface Folder {
	id: string;
	name: string;
	type: FolderTypeEnum; // ✅ Changed from type alias to Enum
	isTrash: boolean;
	isAccessable: AccessLevelEnum; // ✅ Changed from type alias to Enum
	userIds: string[];
	isFavourite?: boolean;
	shareToken: string | null;
	breadcrumb: Breadcrumb[];
	createdBy: string;
	resourceId: string | null;
	createdAt: Date;
	updatedAt: Date;
}

// ✅ File Interface
export interface File {
	id: string;
	name: string;
	size: number;
	data: string;
	fileType: FileTypeEnum;
	type: FolderTypeEnum.FILE; // ✅ Using Enum instead of hardcoded string
	isTrash: boolean;
	isFavourite?: boolean;
	isAccessable: AccessLevelEnum; // ✅ Changed from type alias to Enum
	shareToken: string | null;
	userIds: string[];
	resourceId: string;
	breadcrumb: Breadcrumb[];
	createdBy: string;
	createdAt: Date;
	updatedAt: Date;
}

// ✅ FileFolder Type (Union of File & Folder)
export type FileFolder = File | Folder;
