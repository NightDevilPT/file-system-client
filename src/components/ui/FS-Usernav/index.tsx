import {
	Avatar,
	Button,
	Divider,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";
import React from "react";

import avtar from "../../../assets/avtar.jpeg";
import icons from "@/utils/icons";

const FSUsernav = () => {
	return (
		<Dropdown>
			<DropdownTrigger>
				<Button className="flex-1 flex justify-start items-center gap-2 bg-transparent h-auto p-2">
					<Avatar src={avtar.src} size="sm" />
					<div className="grid grid-cols-1 gap-0 flex-1">
						<span className={`truncate flex-1 text-start`}>
							Pawan Kumar
						</span>
						<span
							className={`truncate flex-1 text-start text-xs text-foreground-400`}
						>
							pawankumartada@gmail.com
						</span>
					</div>
				</Button>
			</DropdownTrigger>
			<DropdownMenu aria-label="Static Actions">
				<DropdownItem
					key="profile"
					startContent={icons("userName")}
					color="primary"
				>
					Profile
				</DropdownItem>
				<DropdownItem
					key="profile"
					startContent={icons("edit")}
					color="primary"
				>
					Edit
				</DropdownItem>
				<DropdownItem
					key="logout"
					className="text-danger"
					color="danger"
					startContent={icons("logout")}
				>
					Logout
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default FSUsernav;
