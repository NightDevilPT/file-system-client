import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponse, ApiRoutes } from "@/interface/api.interface";
import { getRequest, postRequest, putRequest } from "@/services/api.service";
import {
	Folder,
	CreateFolderPayload,
	UpdateFolderPayload,
	UpdateFolderPermissionPayload,
	FolderResponse,
} from "../interface";
import { RootState } from "@/redux/store";

// ✅ Create Folder
export const createFolder = createAsyncThunk<
	FolderResponse,
	CreateFolderPayload,
	{ rejectValue: FolderResponse }
>("folder/createFolder", async (folderData, thunkAPI) => {
	try {
		const response = await postRequest<ApiResponse<Folder>>(
			ApiRoutes.folders,
			folderData
		);

		if (response.status === "success") {
			return response as FolderResponse;
		} else {
			return thunkAPI.rejectWithValue(response as FolderResponse);
		}
	} catch (error: any) {
		return thunkAPI.rejectWithValue({
			status: "error",
			statusCode: error.statusCode || 500,
			message: error.message || "Folder creation failed",
			error: error.error || null,
		} as FolderResponse);
	}
});

// ✅ Update Folder
export const updateFolder = createAsyncThunk<
	FolderResponse,
	{ folderId: string; data: UpdateFolderPayload },
	{ rejectValue: FolderResponse }
>("folder/updateFolder", async ({ folderId, data }, thunkAPI) => {
	try {
		const response = await putRequest<ApiResponse<Folder>>(
			`${ApiRoutes.folders}/${folderId}`,
			data
		);

		if (response.status === "success") {
			return response as FolderResponse;
		} else {
			return thunkAPI.rejectWithValue(response as FolderResponse);
		}
	} catch (error: any) {
		return thunkAPI.rejectWithValue({
			status: "error",
			statusCode: error.statusCode || 500,
			message: error.message || "Folder update failed",
			error: error.error || null,
		} as FolderResponse);
	}
});

// ✅ Update Folder Permission
export const updateFolderPermission = createAsyncThunk<
	FolderResponse,
	{ folderId: string; data: UpdateFolderPermissionPayload },
	{ rejectValue: FolderResponse }
>("folder/updateFolderPermission", async ({ folderId, data }, thunkAPI) => {
	try {
		const response = await putRequest<ApiResponse<Folder>>(
			`${ApiRoutes.foldersPermission}/${folderId}`,
			data
		);

		if (response.status === "success") {
			return response as FolderResponse;
		} else {
			return thunkAPI.rejectWithValue(response as FolderResponse);
		}
	} catch (error: any) {
		return thunkAPI.rejectWithValue({
			status: "error",
			statusCode: error.statusCode || 500,
			message: error.message || "Folder permission update failed",
			error: error.error || null,
		} as FolderResponse);
	}
});

// ✅ Get Resources and Set Folders in Redux
export const fetchResources = createAsyncThunk<
	{ folders: Folder[] }, // ✅ Now returning an object with folders
	{ resourceId: string },
	{ rejectValue: FolderResponse; state: RootState }
>("folder/fetchResources", async ({ resourceId }, thunkAPI) => {
	try {
		// API request to fetch resources
		const response = await getRequest<any>(
			`${ApiRoutes.commonResource}/${resourceId}`
		);

		// Console log the response for debugging
		console.log("API Response:", response);

		if (response.status === "success" && response.data) {
			console.log("Folders fetched successfully", response.data);
			return response.data;
		} else {
			return thunkAPI.rejectWithValue(response as FolderResponse);
		}
	} catch (error: any) {
		return thunkAPI.rejectWithValue({
			status: "error",
			statusCode: error.statusCode || 500,
			message: error.message || "Failed to fetch resources",
			error: error.error || null,
		} as FolderResponse);
	}
});

