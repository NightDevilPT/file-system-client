export enum FSViewEnum {
	GRID = "GRID",
	TABLE = "TABLE",
}

export enum FileTypeEnum {
	IMAGE = "IMAGE",
	DOCUMENT = "DOCUMENT",
	VIDEO = "VIDEO",
	OTHER = "OTHER",
}

export enum ApiStatusEnum {
	IDLE = "idle",
	LOADING = "loading",
	SUCCEEDED = "succeeded",
	FAILED = "failed",
}

export enum FolderEnum {
	FOLDER='FOLDER',
	FILE='FILE'
};
export type PrivateEnum = "PUBLIC" | "PRIVATE";

export interface Breadcrumb {
	name: string;
	id: string;
}

export interface FSGridTableProps {
	data: FileFolder;
}

export interface FSFileFolderProps {
	data: FileFolder[];
}

export interface Folder {
	id: string;
	name: string;
	type: FolderEnum;
	isTrash: boolean;
	isAccessable: PrivateEnum;
	userIds: string[];
	isFavourite?: boolean;
	shareToken: string | null;
	breadcrumb: Breadcrumb[];
	createdBy: string;
	resourceId: string | null;
	createdAt: Date;
	updatedAt: Date;
}

export interface File {
	id: string;
	name: string;
	size: number;
	data: string;
	fileType: FileTypeEnum;
	type: "FILE";
	isTrash: boolean;
	isFavourite?: boolean;
	isAccessable: PrivateEnum;
	shareToken: string | null;
	userIds: string[];
	resourceId: string;
	breadcrumb: Breadcrumb[];
	createdBy: string;
	createdAt: Date;
	updatedAt: Date;
}

export type FileFolder = File | Folder;
