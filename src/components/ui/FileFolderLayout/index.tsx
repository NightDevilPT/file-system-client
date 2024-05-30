"use client";

import React, { useState } from "react";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";

import { FaList } from "react-icons/fa6";
import { BsGridFill } from "react-icons/bs";

import emptyFolder from "../../../assets/empty-folder.png";
import { GridLayoutFrame } from "./GridCardLayout";
import { TableLayoutFrame } from "./TableCardLayout";
import PaginationFrame from "@/common/Pagination";

export interface FileFolderLayoutIprops {
	title: string;
	showLayout: boolean;
	data?: any;
}

export enum LayoutEnum {
	TABLE = "TABLE",
	GRID = "GRID",
}

const FileFolderLayout = ({
	title,
	data,
	showLayout,
}: FileFolderLayoutIprops) => {
	const [isTableView, setTableView] = useState<LayoutEnum>(LayoutEnum.TABLE);
	const [initialPage, setInitialPage] = useState<number>(1);

	const changeTableView = () => {
		setTableView(LayoutEnum.TABLE);
	};

	const changeGridView = () => {
		setTableView(LayoutEnum.GRID);
	};

	return (
		<div
			className={`w-full h-auto space-y-2 bg-slate-100 px-5 py-3 shadow-lg rounded-lg`}
		>
			<div className={`w-full h-auto flex justify-between items-center`}>
				<h1 className={`font-rubik text-lg font-[500]`}>{title}</h1>
				{showLayout && (
					<div
						className={`w-auto h-8 p-2 rounded-md bg-primary-100/50 relative flex justify-between items-center gap-3`}
					>
						<button
							className={`h-full relative z-10 ${
								isTableView === LayoutEnum.TABLE
									? "text-foreground-100"
									: "text-primary-500"
							}`}
							onClick={changeTableView}
						>
							<FaList className={`h-full w-auto`} />
						</button>
						<button
							className={`h-full w-auto z-10 ${
								isTableView === LayoutEnum.GRID
									? "text-foreground-100"
									: "text-primary-500"
							}`}
							onClick={changeGridView}
						>
							<BsGridFill className={`h-full w-auto`} />
						</button>
						<div
							className={`w-6 h-6 rounded-sm transition-all duration-300 bg-primary-500 absolute ${
								isTableView === LayoutEnum.TABLE
									? "left-1"
									: "left-8"
							}`}
						></div>
					</div>
				)}
			</div>
			<Divider className={`w-full h-[2px]`} />
			<React.Fragment>
				{!data && <NoDataLayout title={title} />}
				{data && isTableView === LayoutEnum.GRID && (
					<GridLayoutFrame data={data} />
				)}
				{data && isTableView === LayoutEnum.TABLE && (
					<TableLayoutFrame data={data} />
				)}
				{data && (
					<div
						className={`w-full h-auto flex justify-end items-center !mt-8`}
					>
						<PaginationFrame totalPage={20} initialPage={1} setInitialPage={setInitialPage} />
					</div>
				)}
			</React.Fragment>
		</div>
	);
};

export const NoDataLayout = ({ title }: { title: string }) => {
	return (
		<div
			className={`w-full h-auto py-10 grid grid-cols-1 gap-1 place-items-center flex-col text-base font-rubik`}
		>
			<Image width={150} alt="NextUI hero Image" src={emptyFolder.src} />
			There is No {title} available
		</div>
	);
};

export default FileFolderLayout;
