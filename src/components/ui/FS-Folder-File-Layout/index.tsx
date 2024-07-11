"use client";

import { Divider } from "@nextui-org/divider";
import { Pagination } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

import icons from "@/utils/icons";
import FSGridView from "./FS-Grid-View";
import FSTableView from "./FS-Table-View";
import generateDummyData from "@/utils/get-dummy";
import FileFolderLoader from "@/common/FileFolderLoader";
import { FileFolder, FSViewEnum } from "@/interface/interface";

export interface FSFolderFileLayoutProps {
	title: string;
	showLayoutChange?: boolean;
}

const FSFolderFileLayout: React.FC<FSFolderFileLayoutProps> = ({
	title,
	showLayoutChange = true,
}) => {
	const [view, setView] = useState<FSViewEnum>(FSViewEnum.TABLE);
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<FileFolder[]>([]);

	useEffect(() => {
		setLoading(true);
		const fetchedData = generateDummyData(20);
		setData(fetchedData);
		setLoading(false);
	}, []);

	const toggleView = (selectedView: FSViewEnum) => {
		setView(selectedView);
	};

	return (
		<div className="w-full h-auto flex flex-col gap-2 bg-background dark:bg-default-50 shadow-xl rounded-md px-4 py-2 pb-5">
			<div className="w-full h-8 flex justify-between items-center">
				<h1 className="text-lg font-sans text-foreground">{title}</h1>
				{showLayoutChange && (
					<div className="relative h-full px-2 py-1 rounded bg-primary-100 dark:bg-primary-100 min-w-10 flex justify-center items-center gap-2">
						<button
							className={`w-6 h-6 bg-transparent z-10 ${
								view === FSViewEnum.GRID ? "text-white" : ""
							}`}
							onClick={() => toggleView(FSViewEnum.GRID)}
						>
							{icons("grid")}
						</button>
						<button
							className={`w-6 h-6 bg-transparent z-10 ${
								view === FSViewEnum.TABLE ? "text-white" : ""
							}`}
							onClick={() => toggleView(FSViewEnum.TABLE)}
						>
							{icons("table")}
						</button>
						<div
							className={`absolute z-0 transition-all duration-300 ${
								view === FSViewEnum.GRID ? "left-1" : "left-9"
							} top-1 w-8 h-6 rounded bg-primary`}
						></div>
					</div>
				)}
			</div>
			<Divider className="mb-3" />
			{loading ? (
				<FileFolderLoader />
			) : view === FSViewEnum.GRID ? (
				<FSGridView data={data} />
			) : (
				<FSTableView data={data} />
			)}
			<div className="w-full h-auto flex justify-end items-center mt-3">
				<Pagination isCompact showControls total={10} initialPage={1} />
			</div>
		</div>
	);
};

export default FSFolderFileLayout;
