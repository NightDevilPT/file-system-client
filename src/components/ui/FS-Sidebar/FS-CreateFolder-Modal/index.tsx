import icons, { IconType } from "@/utils/icons";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import FSModal from "../../FS-Modal";
import FSInput from "../../FS-Input";
import { useParams, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { FolderEnum } from "@/interface/interface";

const FSCreateFolderModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [folderName, setFolderName] = useState<string>("");
	const searchParam = useSearchParams();
	const params = useParams<{ folderId: string }>();
	const dispatch = useDispatch<AppDispatch>();

	const handleFolderNameChange = (value: any) => {
		setFolderName(value.target.value);
	};

	const handleCreateFolder = async () => {
		console.log("Creating folder",folderName);
	};

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
							isLoading={status === "loading"} // Show loading indicator
						>
							Create
						</Button>
					</React.Fragment>
				}
			></FSModal>
		</>
	);
};

export default FSCreateFolderModal;
