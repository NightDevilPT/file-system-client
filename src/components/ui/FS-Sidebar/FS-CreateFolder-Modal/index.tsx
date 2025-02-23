"use client"; // ✅ Ensure it's a Client Component

import { Button } from "@nextui-org/button";
import icons, { IconType } from "@/utils/icons";
import { useSearchParams } from "next/navigation";
import { useDisclosure } from "@nextui-org/react";
import React, { useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

import FSModal from "../../FS-Modal";
import FSInput from "../../FS-Input";
import { AppDispatch, RootState } from "@/redux/store";

const FSCreateFolderModalContent = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [folderName, setFolderName] = useState<string>("");

	const searchParam = useSearchParams(); // ✅ Ensure this is inside Suspense
	const params = useSearchParams();
	console.log(params.get("folderId"), "PAEANSJHGSHJGJS");

	const dispatch = useDispatch<AppDispatch>();

	const handleFolderNameChange = (value: any) => {
		setFolderName(value.target.value);
	};

	const handleCreateFolder = async () => {
		console.log("Creating folder", folderName);
	};

	const { status } = useSelector((state: RootState) => state.updatePassword); // ✅ Added missing `status`

	return (
		<>
			<Button
				variant="solid"
				color="primary"
				fullWidth
				startContent={icons(IconType.ADD_FOLDER)}
				className={`flex justify-start items-center`}
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
					<form className={`grid grid-cols-1 gap-3`}>
						<FSInput
							type="text"
							label="Parent Folder"
							name="folder"
							placeholder="Portfolio"
							icon={"folder"}
							disabled
							value={"FOLDER"}
						/>
						<FSInput
							type="text"
							label="Folder Name"
							name="folder"
							placeholder="Enter Folder Name"
							icon={"folder"}
							onChange={handleFolderNameChange}
							value={folderName}
						/>
					</form>
				}
				footerContent={
					<React.Fragment>
						<Button variant="solid" color="danger" onPress={onClose}>
							Close
						</Button>
						<Button
							variant="solid"
							color="primary"
							onPress={handleCreateFolder}
							isLoading={status === "loading"} // ✅ Fixed status issue
						>
							Create
						</Button>
					</React.Fragment>
				}
			></FSModal>
		</>
	);
};

// ✅ Wrap in Suspense to fix `useSearchParams()` issue
const FSCreateFolderModal = () => (
	<Suspense fallback={<div>Loading Folder Modal...</div>}>
		<FSCreateFolderModalContent />
	</Suspense>
);

export default FSCreateFolderModal;
