import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import icons, { IconType } from "@/utils/icons";
import { DateFormatEnum, formatDate } from "@/utils/date";
import FSFileFolderDropdown from "../../FS-File-Folder-Dropdown";
import { FileTypeEnum, File, FSGridTableProps } from "@/interface/interface";

import document from "../../../../../assets/file.png";
import image from "../../../../../assets/photo.png";
import other from "../../../../../assets/other.png";
import video from "../../../../../assets/video.png";
import folder from "../../../../../assets/folder.png";

const FSGridCard= ({data}:FSGridTableProps) => {
	const [isSaved, setIsSaved] = useState<boolean>(data.isFavourite || false);
	const router = useRouter();

	console.log(data, "Data");

	const toggleSave = () => {
		setIsSaved(!isSaved);
	};

	const renderImage = () => {
		const style = "w-12 h-12 object-contain";
		let src: string;

		if (data.type === "FILE") {
			const fileData = data as File;

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
		<div className="w-full h-auto p-2 border border-divider rounded-md hover:shadow-lg transition-all duration-300 space-y-3">
			<div className="w-full h-auto relative" >
				<div className="w-full h-auto py-5 flex justify-center items-center bg-foreground-100 rounded">
					{renderImage()}
				</div>
				<button
					className={`w-5 h-auto absolute right-1 top-2 text-foreground ${
						isSaved && "text-pink-500"
					}`}
					onClick={toggleSave}
				>
					{isSaved
						? icons(IconType.SAVED_BOOKMARK)
						: icons(IconType.BOOKMARK)}
				</button>
			</div>
			<div className="w-full h-auto flex justify-start items-center gap-3">
				<div className="flex-1 grid grid-cols-1">
					<Link href={`/folder-files/${data.id}`} className="text-sm font-sans font-medium text-foreground">
						{data.name}
					</Link>
					<span className="text-xs text-foreground-500">
						{formatDate(new Date(data.createdAt), DateFormatEnum.DD_MM_YYYY)}
					</span>
				</div>
				<FSFileFolderDropdown />
			</div>
		</div>
	);
};

export default FSGridCard;
