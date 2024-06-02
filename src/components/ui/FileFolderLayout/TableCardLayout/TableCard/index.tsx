import React from "react";
import { Image } from "@nextui-org/image";

import file from "../../../../../assets/file.png";
import folder from "../../../../../assets/folder.png";

import { formatDate } from "@/utils/formatDate";
import FileFolderDropDownMenu from "../../FileFolderDropDown";

export interface GridCardIProps {
	name: string;
	type: string;
	createdAt: string;
}

const TableCard = ({ name, type, createdAt }: GridCardIProps) => {
	return (
		<div className={`w-full h-auto grid grid-cols-8 transition-all duration-300 cursor-pointer hover:bg-foreground-200/50 hover:dark:bg-slate-800 px-4`}>
			<div className={`flex justify-start items-center gap-3 col-span-3`}>
				<div
					className={`w-auto min-h-8 h-12 flex justify-center items-center`}
				>
					<Image
						src={type==="Folder"?folder.src:file.src}
						className={`w-auto h-8`}
						alt="Table Image"
					/>
				</div>

				<p
					className={`w-auto h-auto text-sm font-rubik text-foreground-700`}
				>
					{name}
				</p>
			</div>
			<span
				className={` text-xs text-foreground-500 flex justify-start items-center col-span-2`}
			>
				{type}
			</span>
			<span
				className={` text-xs text-foreground-500 flex justify-start items-center col-span-2`}
			>
				{formatDate(createdAt)}
			</span>
			<span
				className={` text-xs text-foreground-500 flex justify-end items-center`}
			>
				<FileFolderDropDownMenu />
			</span>
		</div>
	);
};

export default TableCard;
