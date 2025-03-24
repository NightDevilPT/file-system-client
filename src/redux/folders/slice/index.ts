import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiStatusEnum } from "@/interface/interface";
import {
	createFolder,
	fetchResources,
	updateFolder,
	updateFolderPermission,
} from "../thunk";
import { Folder, FolderResponse, FolderState } from "../interface";
import { ApiResponse } from "@/interface/api.interface";

const initialState: FolderState = {
	status: ApiStatusEnum.IDLE,
	error: null,
	responseMessage: null,
	folders: [],
};

const folderSlice = createSlice({
	name: "folder",
	initialState,
	reducers: {
		resetFolderState: (state) => {
			state.status = ApiStatusEnum.IDLE;
			state.error = null;
			state.responseMessage = null;
			state.folders = [];
		},
	},
	extraReducers: (builder) => {
		builder
			// ✅ Create Folder
			.addCase(createFolder.pending, (state) => {
				state.status = ApiStatusEnum.LOADING;
				state.error = null;
				state.responseMessage = null;
			})
			.addCase(
				createFolder.fulfilled,
				(state, action: PayloadAction<ApiResponse>) => {
					state.status = ApiStatusEnum.SUCCEEDED;
					state.responseMessage = action.payload.message;
					if (action.payload.data) {
						state.folders.push(action.payload.data);
					}
				}
			)
			.addCase(createFolder.rejected, (state, action) => {
				state.status = ApiStatusEnum.FAILED;
				state.error =
					action.payload?.message || "Folder creation failed";
			})

			// ✅ Update Folder
			.addCase(updateFolder.pending, (state) => {
				state.status = ApiStatusEnum.LOADING;
			})
			.addCase(
				updateFolder.fulfilled,
				(state, action: PayloadAction<ApiResponse>) => {
					state.status = ApiStatusEnum.SUCCEEDED;
					state.responseMessage = action.payload.message;
					if (action.payload.data) {
						state.folders = state.folders.map((folder) =>
							folder.id === action.payload.data!.id
								? action.payload.data!
								: folder
						);
					}
				}
			)
			.addCase(updateFolder.rejected, (state, action) => {
				state.status = ApiStatusEnum.FAILED;
				state.error = action.payload?.message || "Folder update failed";
			})

			// ✅ Update Folder Permission
			.addCase(updateFolderPermission.pending, (state) => {
				state.status = ApiStatusEnum.LOADING;
			})
			.addCase(
				updateFolderPermission.fulfilled,
				(state, action: PayloadAction<FolderResponse>) => {
					state.status = ApiStatusEnum.SUCCEEDED;
					state.responseMessage = action.payload.message;
				}
			)
			.addCase(updateFolderPermission.rejected, (state, action) => {
				state.status = ApiStatusEnum.FAILED;
				state.error =
					action.payload?.message ||
					"Folder permission update failed";
			})

			.addCase(fetchResources.pending, (state) => {
				state.status = ApiStatusEnum.LOADING;
				state.error = null;
			})
			.addCase(
				fetchResources.fulfilled,
				(state, action: PayloadAction<{ folders: Folder[] }>) => {
					state.status = ApiStatusEnum.SUCCEEDED;
					state.responseMessage = "Fetched folders successfully";

					console.log(action.payload,'XOOXOXOXO');

					// ✅ Ensure folders are set correctly
					state.folders = action.payload.folders ?? [];
				}
			)
			.addCase(fetchResources.rejected, (state, action) => {
				state.status = ApiStatusEnum.FAILED;
				state.error =
					action.payload?.message || "Failed to fetch resources";
			});
	},
});

export const { resetFolderState } = folderSlice.actions;
export default folderSlice.reducer;
