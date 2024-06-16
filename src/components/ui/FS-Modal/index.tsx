import React from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from "@nextui-org/react";

export interface FSModalInterface {
	isOpen: boolean;
	onOpen: any;
	onClose: any;
	title: string;
	bodyContent: React.ReactNode;
	footerContent?: React.ReactNode;
}

export default function FSModal({
	isOpen,
	onOpen,
	onClose,
	title,
	bodyContent,
	footerContent,
}: FSModalInterface) {
	return (
		<Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							{title}
						</ModalHeader>
						<ModalBody>{bodyContent}</ModalBody>
						{footerContent && (
							<ModalFooter>{footerContent}</ModalFooter>
						)}
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
