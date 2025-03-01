import icons, { IconType } from "@/utils/icons";
import { Button } from "@nextui-org/button";
import { Input, useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import FSModal from "../../FS-Modal";
import FSInput from "../../FS-Input";

const FSCreateFolderModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [file, setFile] = useState({
		fileName: "",
		file: undefined,
	});

	const handleFolderNameChange = (name: string, value: string) => {
		setFile((pre) => ({ ...pre, [name]: value }));
	};

	return (
		<>
			<Button
				aria-label="Create Folder"
				variant="solid"
				color="secondary"
				fullWidth
				startContent={icons(IconType.ADD_FILE)}
				className={`flex justify-start items-center`}
				onPress={onOpen}
			>
				Add New File
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
							label="File Name"
							name="file"
							placeholder="Enter File Name"
							icon={"file"}
							onChange={handleFolderNameChange}
						/>
						<Input type="file" />
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
							aria-label="Create Folder"
							variant="solid"
							color="primary"
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
