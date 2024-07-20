import React from "react";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/react";
import icons, { IconType } from "@/utils/icons";
import { FSViewEnum } from "@/interface/interface";

export default function FSFileFolderDowndown({ view }: { view?: FSViewEnum }) {
	return (
		<Dropdown>
			<DropdownTrigger>
				<button className={`w-5 h-5`}>{icons(IconType.THREE_DOT)}</button>
			</DropdownTrigger>
			<DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
				<DropdownItem key="edit" startContent={icons(IconType.EDIT)}>
					Edit
				</DropdownItem>
				<DropdownItem
					key="delete"
					className="text-danger"
					color="danger"
					startContent={icons(IconType.DELETE)}
				>
					Delete
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
