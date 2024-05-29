'use client'
import React, { useState } from "react";
import { Image } from "@nextui-org/image";
import emptyFolder from '../../../assets/empty-folder.png';

export interface FileFolderLayoutIprops {
	title: string;
	showLayout: boolean;
	data?: any;
}

const FileFolderLayout = ({
	title,
	data,
	showLayout,
}: FileFolderLayoutIprops) => {
	const [isTableView, setTableView] = useState<boolean>(false);
	return (
		<div
			className={`w-full h-auto grid grid-cols-1 gap-2 bg-slate-100 px-5 py-3 shadow-lg rounded-lg`}
		>
			<div className={`w-full h-auto flex justify-between items-center`}>
				<h1 className={`font-rubik text-lg font-[500]`}>{title}</h1>
			</div>
			<div>
				{!data && (
					<div className={`w-full h-auto py-10 grid grid-cols-1 gap-1 place-items-center flex-col text-base font-rubik`}>
						<Image width={150} alt="NextUI hero Image" src={emptyFolder.src} />
						There is No {title} available
					</div>
				)}
			</div>
		</div>
	);
};

export default FileFolderLayout;
