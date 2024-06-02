import { Divider } from "@nextui-org/divider";
import React from "react";
import { LuImage, LuVideo } from "react-icons/lu";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiErrorWarningLine } from "react-icons/ri";

type StorageKey = "image" | "document" | "videos" | "other";

interface StorageType {
	icon: JSX.Element;
	text: string;
	size: number;
	bg: string;
	color: string;
	totalFile: number;
}

const ProgressOfBucket: React.FC = () => {
	const totalStorageLimit = 20;

	const storageType: Record<StorageKey, StorageType> = {
		image: {
			icon: <LuImage className={`min-w-5 min-h-5`} />,
			text: "Images",
			size: 3,
			bg: "bg-blue-400",
			color: "text-blue-800",
			totalFile: 5,
		},
		document: {
			icon: <HiOutlineDocumentText className={`min-w-5 min-h-5`} />,
			text: "Documents",
			size: 4,
			bg: "bg-green-400",
			color: "text-green-800",
			totalFile: 5,
		},
		videos: {
			icon: <LuVideo className={`min-w-5 min-h-5`} />,
			text: "Videos",
			size: 3,
			bg: "bg-purple-400",
			color: "text-purple-800",
			totalFile: 5,
		},
		other: {
			icon: <RiErrorWarningLine className={`min-w-5 min-h-5`} />,
			text: "Other",
			size: 2,
			bg: "bg-red-400",
			color: "text-red-800",
			totalFile: 5,
		},
	};

	const totalUsedStorage = Object.values(storageType).reduce(
		(acc, type) => acc + type.size,
		0
	);

	return (
		<div className={`w-full h-auto p-4`}>
			<h2 className="text-lg font-bold mb-1">Storage Usage</h2>
			<div className="w-full mb-4 bg-foreground-600 rounded-full overflow-hidden h-3 relative">
				{Object.keys(storageType).map((key) => {
					const storageKey = key as StorageKey;
					const { size, bg } = storageType[storageKey];
					const percentage = (size / totalStorageLimit) * 100;

					return (
						<div
							key={storageKey}
							className={`absolute h-full ${bg}`}
							style={{
								width: `${percentage}%`,
								left: `${Object.values(storageType)
									.slice(
										0,
										Object.keys(storageType).indexOf(
											storageKey
										)
									)
									.reduce(
										(acc, type) =>
											acc +
											(type.size / totalStorageLimit) *
												100,
										0
									)}%`,
							}}
						></div>
					);
				})}
			</div>

			<div className="flex flex-col space-y-3">
				{Object.keys(storageType).map((key, index) => {
					const storageKey = key as StorageKey;
					const { icon, text, size, bg, color, totalFile } =
						storageType[storageKey];
					return (
						<React.Fragment key={storageKey}>
							<div className="flex justify-between items-center gap-3">
								<div className={`flex items-center gap-3`}>
									<div
										className={`p-2 rounded text-foreground-200 ${bg} ${color}`}
									>
										{icon}
									</div>
									<div className={`font-sans`}>
										<p
											className={`text-base font-[500] text-foreground-700`}
										>
											{text}
										</p>
										<p
											className={`relative bottom-1 text-sm font-[500] text-foreground-500`}
										>
											{totalFile} {text}
										</p>
									</div>
								</div>
								<p className="text-sm font-thin text-foreground-700">
									{size} MB
								</p>
							</div>
							<Divider className={`w-full h-[2px] my-1`} />
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default ProgressOfBucket;
