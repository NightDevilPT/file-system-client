import React from "react";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/react";
import icons from "@/utils/icons";

export default function FSFileFolderDowndown() {

	return (
		<Dropdown>
			<DropdownTrigger>
				<button className={`w-5 h-5`}>{icons("threeDot")}</button>
			</DropdownTrigger>
			<DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
				<DropdownItem key="edit" startContent={icons("edit")}>
					Edit
				</DropdownItem>
				<DropdownItem
					key="delete"
					className="text-danger"
					color="danger"
					startContent={icons("delete")}
				>
					Delete
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
