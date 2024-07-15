import React from "react";
import { Divider } from "@nextui-org/divider";
import FSDashboardCard, { FSDashboardCardProps } from "../FS-Dashboard-Card";
import FSRecent from "../FS-Recent";

const dummyData: FSDashboardCardProps[] = [
	{
		icon: "image",
		title: "Images",
		subTitle: "All your images",
		totalSpace: 400,
		currentSpace: 75,
	},
	{
		icon: "document",
		title: "Documents",
		subTitle: "All your documents",
		totalSpace: 400,
		currentSpace: 50,
	},
	{
		icon: "video",
		title: "Videos",
		subTitle: "All your videos",
		totalSpace: 400,
		currentSpace: 50,
	},
	{
		icon: "audio",
		title: "Audio Files",
		subTitle: "All your audio files",
		totalSpace: 400,
		currentSpace: 120,
	},
	// {
	// 	icon: "others",
	// 	title: "Others",
	// 	subTitle: "Miscellaneous files",
	// 	totalSpace: 100,
	// 	currentSpace: 10,
	// },
];

const FSDashboard = () => {
	return (
		<div className="w-full h-full flex flex-col gap-2 bg-background dark:bg-default-50 shadow-xl rounded-md px-4 py-2">
			<div className="w-full h-8 flex justify-between items-center">
				<h1 className="text-lg font-sans text-foreground">Dashboard</h1>
			</div>
			<Divider />
			<div className={`w-full grid grid-cols-1 gap-5 pt-2`}>
				<div className={`flex-1 h-auto grid grid-cols-4 gap-5`}>
					{dummyData.map((data, index) => (
						<FSDashboardCard
							key={index}
							icon={data.icon}
							title={data.title}
							subTitle={data.subTitle}
							totalSpace={data.totalSpace}
							currentSpace={data.currentSpace}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default FSDashboard;
