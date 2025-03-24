"use client";

import { Divider } from "@nextui-org/divider";
import React, { useState, useEffect } from "react";

import { FileFolder, FSViewEnum } from "@/interface/interface";
import { FSFolderFileLayoutProps } from "../FS-Folder-File-Layout";
import FSGridCard from "../FS-Folder-File-Layout/FS-Grid-View/FS-Grid-Card";
import Link from "next/link";


const FSFavouriteLayout: React.FC<FSFolderFileLayoutProps> = ({
	title,
	showLayoutChange = true,
	defaultView = FSViewEnum.GRID,
}) => {
	const [view, setView] = useState<FSViewEnum>(defaultView);
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<FileFolder[]>([]);
	const [folderFile, setFolderFile] = useState<{ folders: JSX.Element[]; files: JSX.Element[] }>({
		folders: [],
		files: [],
	});

	useEffect(() => {
		setLoading(true);
		// const fetchedData = generateDummyData(8);
		// setData(fetchedData);
		let folders: JSX.Element[] = [];
		let files: JSX.Element[] = [];

		// fetchedData.forEach((item: FileFolder) => {
		// 	const element = (
		// 		<div className="w-[250px] min-w-[250px]" key={item.id}>
		// 			<FSGridCard data={{ ...item, isFavourite: true }} />
		// 		</div>
		// 	);

		// 	if (item.type === "FOLDER") {
		// 		folders.push(element);
		// 	} else {
		// 		files.push(element);
		// 	}
		// });

		setFolderFile({ folders, files });
		setLoading(false);
	}, []);

	const toggleView = (selectedView: FSViewEnum) => {
		setView(selectedView);
	};

	return (
		<div className="w-full h-auto flex flex-col gap-2 bg-background border-1 border-divider dark:bg-default-50 rounded-md px-4 py-2 pb-5">
			<div className="w-full h-8 flex justify-between items-center">
				<h1 className="text-lg font-sans text-foreground">{title}</h1>
				<Link href="/folder-files" className={`text-primary-400 text-sm hover:text-primary-600 transition-all duration-300`}>View All</Link>
			</div>
			<Divider className="mb-3" />
			<div
				className={`w-full h-auto overflow-y-auto flex justify-start items-start gap-5 pb-3`}
			>
				{folderFile.folders}
			</div>
			<div
				className={`w-full h-auto overflow-y-auto flex justify-start items-start gap-5 pb-3 pt-3`}
			>
				{folderFile.files}
			</div>
		</div>
	);
};

export default FSFavouriteLayout;
