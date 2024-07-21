"use client";

import React, { useState } from "react";
import FSLogoFrame from "../FS-Logo";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import icons, { IconType } from "@/utils/icons";
import FSUsernav from "../FS-Usernav";
import FSCreateFolderModal from "./FS-CreateFolder-Modal";
import FSCreateFileModal from "./FS-CreateFile-Modal";
import FSStorageInformation from "../FS-Storage";
import { usePathname, useRouter } from "next/navigation";

export enum ActiveButtonEnum {
	createFolder = "Create Folder",
	createFile = "Create File",
	dashboard = "Dashboard",
	files = "Files",
	trash = "Trash",
	favorite = "Favroite",
}

const FSSidebar = () => {
	const router = useRouter();
	const pathname = usePathname()

    const handlerNavigateFunction = (event:any) => {
		event.preventDefault();
        router.push(`/${event.target.name}`);
    };
	return (
		<div
			className={`w-64 h-full bg-background shadow-xl dark:bg-default-50 px-5 relative flex justify-start items-start flex-col`}
		>
			<div
				className={`w-full h-auto pt-5 pb-2 flex justify-start items-center`}
			>
				<FSLogoFrame />
			</div>
			<Divider className="mb-5" />
			<div className={`w-full h-auto grid grid-cols-1 gap-3`}>
				<FSCreateFolderModal />
				<FSCreateFileModal />
			</div>

			<div className={`w-full h-auto grid grid-cols-1 gap-3 mt-8`}>
				<Button
					variant="light"
					color={pathname==='/'?'primary':'default'}
					fullWidth
					name=""
					onClick={handlerNavigateFunction}
					startContent={icons(IconType.DASHBOARD)}
					className={`flex justify-start items-center`}
				>
					Dashboard
				</Button>
				<Button
					variant="light"
					color={pathname==='/folder-files'?'primary':'default'}
					fullWidth
					name="folder-files"
					onClick={handlerNavigateFunction}
					startContent={icons(IconType.FOLDER)}
					className={`flex justify-start items-center`}
				>
					My Folder / File
				</Button>
				<Button
					variant="light"
					color="default"
					fullWidth
					startContent={icons(IconType.HISTORY)}
					className={`flex justify-start items-center`}
				>
					Recent Activity
				</Button>
				<Button
					variant="light"
					color="default"
					name="favourites"
					onClick={handlerNavigateFunction}
					fullWidth
					startContent={icons(IconType.FAVORITE)}
					className={`flex justify-start items-center`}
				>
					Favorite
				</Button>
				<Button
					variant="light"
					color="danger"
					name="trash"
					onClick={handlerNavigateFunction}
					fullWidth
					startContent={icons(IconType.TRASH)}
					className={`flex justify-start items-center`}
				>
					Trash
				</Button>
			</div>
			<div className={`w-full absolute bottom-5 left-0 px-5`}>
				<FSStorageInformation />
			</div>
		</div>
	);
};

export default FSSidebar;
