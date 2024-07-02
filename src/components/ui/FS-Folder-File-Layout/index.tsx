"use client";

import generateDummyData from "@/utils/get-dummy";
import icons from "@/utils/icons";
import { Divider } from "@nextui-org/divider";
import React, { useState } from "react";

export interface FSFolderFileLayoutProps {
	title: string;
	showLayoutChange?: boolean;
}

export enum FSViewEnum {
	GRID = "GRID",
	TABLE = "TABLE",
}

const FSFolderFileLayout = ({
	title,
	showLayoutChange,
}: FSFolderFileLayoutProps) => {
	const [view, setView] = useState<FSViewEnum>(FSViewEnum.GRID);
	const setGridView = () => {
		setView(FSViewEnum.GRID);
	};
	const setTableView = () => {
		setView(FSViewEnum.TABLE);
	};
	const entity = generateDummyData(10);
	return (
		<div
			className={`w-full h-auto flex justify-start items-start flex-col gap-2 bg-background dark:bg-default-50 shadow-xl rounded-md px-4 py-2`}
		>
			<div className={`w-full h-8 flex justify-between items-center`}>
				<h1 className={`text-lg font-sans text-foreground`}>{title}</h1>
				<div
					className={`w-auto relative h-full px-2 py-1 rounded bg-primary-100 dark:bg-primary-100 min-w-10 flex justify-center items-center gap-2 ${
						showLayoutChange && "hidden"
					}`}
				>
					<button
						className={`w-6 relative z-10 h-6 bg-transparent ${
							view === FSViewEnum.GRID && "text-white"
						}`}
						onClick={setGridView}
					>
						{icons("grid")}
					</button>
					<button
						className={`w-6 relative z-10 h-6	 bg-transparent ${
							view === FSViewEnum.TABLE && "text-white"
						}`}
						onClick={setTableView}
					>
						{icons("table")}
					</button>
					<div
						className={`absolute z-0 transition-all duration-300 ${
							view === FSViewEnum.GRID ? "left-1" : "left-9"
						} top-1 w-8 h-6 rounded bg-primary`}
					></div>
				</div>
			</div>
			<Divider />
			<div className={`w-full h-auto`}></div>
		</div>
	);
};

export default FSFolderFileLayout;
