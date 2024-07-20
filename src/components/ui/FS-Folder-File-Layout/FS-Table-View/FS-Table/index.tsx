import React, { useState } from "react";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	User,
	Chip,
	Tooltip,
	getKeyValue,
} from "@nextui-org/react";
import { File, FileTypeEnum, FSFileFolderProps } from "@/interface/interface";

import document from "../../../../../assets/file.png";
import image from "../../../../../assets/photo.png";
import other from "../../../../../assets/other.png";
import video from "../../../../../assets/video.png";
import folder from "../../../../../assets/folder.png";
import { DateFormatEnum, formatDate } from "@/utils/date";
import icons, { IconType } from "@/utils/icons";
import FSFileFolderDropdown from "../../FS-File-Folder-Dropdown";

const columns = [
	{ name: "FILE TYPE", uid: "file type" },
	{ name: "NAME", uid: "name" },
	{ name: "CREATED AT", uid: "created at" },
	{ name: "ACTIONS", uid: "actions" },
];

export default function FSTable({ data }: FSFileFolderProps) {
	const [isSaved, setIsSaved] = useState<boolean>(false);

	const toggleSave = () => {
		setIsSaved(!isSaved);
	};

	const renderCell = React.useCallback(
		(items: any, columnKey: string | number) => {
			switch (columnKey) {
				case "name":
					return (
						<div className={`w-auto h-auto text-sm font-rubik`}>
							{items.name}
						</div>
					);
				case "file type":
					return <div>{renderImage(items)}</div>;
				case "created at":
					return (
						<div className={`w-auto h-auto text-sm font-rubik`}>
							{formatDate(
								items.createdAt,
								DateFormatEnum.DD_MM_YYYY
							)}
						</div>
					);
				case "actions":
					return (
						<div className="relative flex justify-start items-center gap-5">
							<Tooltip content="Details">
								<button
									className={`w-5 h-auto text-foreground ${
										isSaved && "text-pink-500"
									}`}
									onClick={toggleSave}
								>
									{isSaved
										? icons(IconType.SAVED_BOOKMARK)
										: icons(IconType.BOOKMARK)}
								</button>
							</Tooltip>
							<Tooltip content="Edit">
								<FSFileFolderDropdown />
							</Tooltip>
						</div>
					);
				default:
					return;
			}
		},
		[]
	);

	const renderImage = (items: any) => {
		const style = "w-10 h-10 object-contain";
		let src: string;

		if (items.type === "FILE") {
			const fileData = items as File;

			switch (fileData.fileType) {
				case FileTypeEnum.DOCUMENT:
					src = document.src;
					break;
				case FileTypeEnum.IMAGE:
					src = image.src;
					break;
				case FileTypeEnum.VIDEO:
					src = video.src;
					break;
				default:
					src = other.src;
					break;
			}
		} else {
			src = folder.src;
		}

		return <img src={src} alt="File-Folder" className={style} />;
	};

	return (
		<Table
			color={"primary"}
			selectionMode="none"
			shadow="none"
			classNames={{ wrapper: ["p-0"] }}
		>
			<TableHeader columns={columns} className="p-0">
				{(column) => (
					<TableColumn
						key={column.uid}
						align={"center"}
						className={`${
							column.uid === "actions" ? "w-32" : "w-auto"
						}`}
					>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody
				items={data}
				// loadingContent={<Spinner />}
				// loadingState={loadingState}
			>
				{(item) => (
					<TableRow key={item.id} className=" cursor-pointer">
						{(columnKey) => (
							<TableCell>{renderCell(item, columnKey)}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
