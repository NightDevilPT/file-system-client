import { Button } from "@nextui-org/button";
import icons, { IconType } from "@/utils/icons";
import { useDisclosure } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FSModal from "../../FS-Modal";
import FSInput from "../../FS-Input";
import { createFolder } from "@/redux/folders/thunk"; // Import the createFolder thunk
import { AppDispatch, RootState } from "@/redux/store"; // Import store types
import { CreateFolderPayload } from "@/redux/folders/interface";

const FSCreateFolderModal = ({
	parentFolderId,
}: {
	parentFolderId?: string | null;
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const dispatch = useDispatch<AppDispatch>();

	const [folderName, setFolderName] = useState<string>("");
	const { folders, status } = useSelector((state: RootState) => state.folders); // Select folder state

	console.log(parentFolderId, "Parent Folder ID");

	// Handler for input change
	const handleFolderNameChange = (event: any) => {
		setFolderName(event.target.value);
	};

	// Handler for form submission
	const handleCreateFolder = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!folderName.trim()) return; // Prevent empty submissions

		const folderData: CreateFolderPayload = {
			name: folderName,
			type: "FOLDER", // Assuming default type
			...(parentFolderId && { parentFolderId }), // Add parentFolderId if available
		};

		await dispatch(createFolder(folderData));

		// Close the modal if creation is successful
		if (status === "succeeded") {
			onClose();
			setFolderName(""); // Reset input
		}
	};

	// Close modal if folder creation is successful
	useEffect(() => {
		if (status === "succeeded") {
			onClose();
			setFolderName(""); // Reset form after success
		}
	}, [status, onClose]);

	return (
		<>
			<Button
				aria-label="Create Folder"
				variant="solid"
				color="primary"
				fullWidth
				startContent={icons(IconType.ADD_FOLDER)}
				className="flex justify-start items-center"
				onPress={onOpen}
			>
				Create Folder
			</Button>

			<FSModal
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
				title="Create Folder"
				bodyContent={
					<form
						className="grid grid-cols-1 gap-3"
						onSubmit={handleCreateFolder}
					>
						<FSInput
							type="text"
							label="Parent Folder"
							name="parentFolder"
							placeholder={
								parentFolderId
									? `Parent ID: ${parentFolderId}`
									: "Root Folder"
							}
							icon={"folder"}
							disabled
						/>
						<FSInput
							type="text"
							label="Folder Name"
							name="folder"
							placeholder="Enter Folder Name"
							icon={"folder"}
							value={folderName}
							onChange={handleFolderNameChange}
							required
						/>
					</form>
				}
				footerContent={
					<React.Fragment>
						<Button
							aria-label="Close"
							variant="solid"
							color="danger"
							onPress={onClose}
						>
							Close
						</Button>
						<Button
							aria-label="Create"
							variant="solid"
							color="primary"
							isLoading={status === "loading"} // Show loading state
							onClick={handleCreateFolder}
						>
							Create
						</Button>
					</React.Fragment>
				}
			/>
		</>
	);
};

export default FSCreateFolderModal;
