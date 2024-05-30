import React from "react";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";

import folder from "../../../../../assets/folder.png";
import { formatDate } from "@/utils/formatDate";


export interface GridCardIProps {
	name:string;
	type:string;
	createdAt:string
}

const GridCard = ({name,type,createdAt}:GridCardIProps) => {
	return (
		<div
			className={`w-full border-2 border-foreground-200 h-auto p-3 py-2 rounded-md cursor-pointer space-y-2 hover:shadow-lg transition-all duration-300`}
		>
			<span
				className={`w-full h-auto text-xs text-foreground-500 flex justify-end items-center`}
			>
				{formatDate(createdAt)}
			</span>
			{type === "Folder" && (
				<div
					className={`w-full min-h-14 flex justify-center items-center`}
				>
					{" "}
					<Image src={folder.src} className={`w-20 h-20`} alt="Grid Image" />
				</div>
			)}
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
