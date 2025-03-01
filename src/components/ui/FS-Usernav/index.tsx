import {
	Avatar,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";
import React from "react";

import avtar from "../../../assets/avtar.jpeg";
import icons, { IconType } from "@/utils/icons";
import FSThemeButton from "../FS-ThemeButton";
import { ThemeType, useTheme } from "@/Providers/ThemeProvider";
import { useRouter } from "next/navigation";

const FSUsernav = () => {
	const { theme, toggleTheme } = useTheme();
	const router = useRouter();
	const handleLogout = () => {
		router.push(`/auth/login`);
	};
	return (
		<Dropdown>
			<DropdownTrigger>
				<Button
					aria-label="User Profile"
					className="flex-1 flex justify-start items-center gap-2 bg-transparent h-auto p-2"
				>
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
					startContent={icons(IconType.USER_NAME)}
					color="primary"
				>
					Profile
				</DropdownItem>
				<DropdownItem
					key="profile"
					startContent={icons(IconType.EDIT)}
					color="primary"
				>
					Edit
				</DropdownItem>
				<DropdownItem
					key="logout"
					color="primary"
					startContent={icons(
						theme === ThemeType.dark
							? IconType.LIGHT
							: IconType.DARK
					)}
					onClick={toggleTheme}
				>
					Appearance
				</DropdownItem>
				<DropdownItem
					key="logout"
					className="text-danger"
					color="danger"
					onClick={handleLogout}
					startContent={icons(IconType.LOGOUT)}
				>
					Logout
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default FSUsernav;
