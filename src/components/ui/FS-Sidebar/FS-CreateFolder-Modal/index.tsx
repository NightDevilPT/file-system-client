import icons, { IconType } from "@/utils/icons";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import FSModal from "../../FS-Modal";
import FSInput from "../../FS-Input";

const FSCreateFolderModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [folderName, setFolderName] = useState<string>("");

	const handleFolderNameChange = (value: string) => {
		setFolderName(value);
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
						/>
						<FSInput
							type="text"
							label="Folder Name"
							name="folder"
							placeholder="Enter Folder Name"
							icon={"folder"}
							onChange={handleFolderNameChange}
						/>
					</form>
				}
				footerContent={
					<React.Fragment>
						<Button
							variant="solid"
							color="danger"
							onPress={onClose}
						>
							Close
						</Button>
						<Button variant="solid" color="primary">
							Create
						</Button>
					</React.Fragment>
				}
			></FSModal>
		</>
	);
};

export default FSCreateFolderModal;
