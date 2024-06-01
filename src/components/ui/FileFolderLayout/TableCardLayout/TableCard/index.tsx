import React from "react";
import { Image } from "@nextui-org/image";
import { BsThreeDotsVertical } from "react-icons/bs";

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
		<div className={`w-full h-auto grid grid-cols-4`}>
			<div className={`flex justify-start items-center gap-2`}>
				{type === "Folder" && (
					<div
						className={`w-auto min-h-8 h-12 flex justify-center items-center`}
					>
						{" "}
						<Image
							src={folder.src}
							className={`w-auto h-8`}
							alt="Table Image"
						/>
					</div>
				)}
				<p
					className={`w-auto h-auto text-sm font-rubik text-foreground-700`}
				>
					{name}
				</p>
			</div>
			<span
				className={` text-xs text-foreground-500 flex justify-start items-center`}
			>
				{formatDate(createdAt)}
			</span>
			<span
				className={` text-xs text-foreground-500 flex justify-start items-center`}
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
