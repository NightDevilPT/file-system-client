import React from "react";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";

import file from "../../../../../assets/file.png";
import folder from "../../../../../assets/folder.png";
import FileFolderDropDownMenu from "../../FileFolderDropDown";

export interface GridCardIProps {
	name: string;
	type: string;
	createdAt: string;
}

const GridCard = ({ name, type, createdAt }: GridCardIProps) => {
	return (
		<div
			className={`relative w-full border-[1px] border-foreground-200 h-auto p-3 py-2 pt-3 rounded-md cursor-pointer space-y-2 hover:shadow-lg transition-all duration-300 hover:dark:bg-slate-800`}
		>
			<div
				className={`absolute top-1 right-2 w-full h-auto mt-1 text-xs text-foreground-500 flex justify-end items-center`}
			>
				<FileFolderDropDownMenu />
			</div>
			<div className={`w-full min-h-14 flex justify-center items-center`}>
				<Image
					src={type === "Folder" ? folder.src : file.src}
					className={`w-20 h-20`}
					alt="Grid Image"
				/>
			</div>
			<Divider className={`w-full h-[2px]`} />
			<p
				className={`w-full h-auto text-sm font-rubik text-foreground-700`}
			>
				{name}
			</p>
		</div>
	);
};

export default GridCard;
