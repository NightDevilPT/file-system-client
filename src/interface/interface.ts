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

export type FolderEnum = "FOLDER" | "FILE";
export type PrivateEnum = "PUBLIC" | "PRIVATE";

export interface Breadcrumb {
	name: string;
	id: string;
}

export interface FSGridTableProps {
    data: FileFolder;
}

export interface FSFileFolderProps{
	data:FileFolder[]
}

export interface Folder {
	id: string;
	name: string;
	type: FolderEnum;
	isTrash: boolean;
	isAccessable: PrivateEnum;
	userIds: string[];
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
