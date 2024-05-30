import React from "react";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";

import folder from "../../../../../assets/folder.png";
import { formatDate } from "@/utils/formatDate";

export interface GridCardIProps {
	name: string;
	type: string;
	createdAt: string;
}

const TableCard = ({ name, type, createdAt }: GridCardIProps) => {
	return (
		<div
			className={`w-full border-2 border-foreground-200 h-auto flex justify-between items-center gap-5 rounded-md cursor-pointer space-y-2 hover:shadow-lg transition-all duration-300 px-4`}
		>
			<div
				className={`w-auto h-auto flex justify-start items-center gap-2`}
			>
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
				className={` text-xs text-foreground-500 flex justify-end items-center`}
			>
				{formatDate(createdAt)}
			</span>
		</div>
	);
};

export default TableCard;
