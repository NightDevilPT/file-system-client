import { MetaData } from "@/interface/api.interface";
import { ApiStatusEnum } from "@/interface/interface";

export interface Folder {
	id: string;
	name: string;
	type: string;
	isTrash: boolean;
	isAccessable: string;
	userIds: string[];
	shareToken: string;
	breadcrumb: { name: string; id: string }[];
	createdBy: string;
	resourceId: string;
	createdAt: string;
	updatedAt: string;
	parentFolderId?: string;
	parentProfileId?: string;
}

export interface CreateFolderPayload {
	name: string;
	type: string;
	parentFolderId?: string;
}

export interface UpdateFolderPayload {
	name?: string;
	parentFolderId?: string;
}

export interface UpdateFolderPermissionPayload {
	isPrivate: string;
	userIds: string[];
}

export interface FolderState {
	status: ApiStatusEnum;
	error: string | null;
	responseMessage?: string | null;
	folders: Folder[];
}

export interface FolderResponse {
	status: "success" | "error";
	statusCode: number;
	message: string;
	meta?: MetaData;
	error?: string | null;
	data?: Folder | { folders: Folder[] };
}
