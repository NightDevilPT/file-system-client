"use client";

import React from "react";
import { Divider } from "@nextui-org/divider";

import FSRecent from "../FS-Recent";
import { FSViewEnum } from "@/interface/interface";
import FSEChart from "@/components/ui/FS-Charts";
import FSDashboardCard, { FSDashboardCardProps } from "../FS-Dashboard-Card";
import FSFavouriteLayout from "@/components/ui/FS-Favorite-Layout";

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
];

const dummyDataForFile = [
	{ fileSize: 5, createdAt: "2023-07-01" },
	{ fileSize: 3, createdAt: "2023-07-02" },
	{ fileSize: 10, createdAt: "2023-07-03" },
	{ fileSize: 20, createdAt: "2023-07-04" },
	{ fileSize: 15, createdAt: "2023-07-05" },
	{ fileSize: 7, createdAt: "2023-07-06" },
	{ fileSize: 25, createdAt: "2023-07-07" },
	{ fileSize: 8, createdAt: "2023-07-08" },
	{ fileSize: 12, createdAt: "2023-07-09" },
	{ fileSize: 30, createdAt: "2023-07-10" },
	{ fileSize: 18, createdAt: "2023-07-11" },
	{ fileSize: 22, createdAt: "2023-07-12" },
	{ fileSize: 9, createdAt: "2023-07-13" },
	{ fileSize: 14, createdAt: "2023-07-14" },
	{ fileSize: 6, createdAt: "2023-07-15" },
	{ fileSize: 27, createdAt: "2023-07-16" },
	{ fileSize: 11, createdAt: "2023-07-17" },
	{ fileSize: 4, createdAt: "2023-07-18" },
	{ fileSize: 16, createdAt: "2023-07-19" },
	{ fileSize: 21, createdAt: "2023-07-20" },
];

const FSDashboard = () => {
	return (
		<div className="w-full relative h-auto flex flex-col gap-2 bg-background dark:bg-default-50 shadow-xl rounded-md px-4 py-2 pb-5">
			<div className="w-full h-auto flex justify-between items-center">
				<h1 className="text-lg font-sans text-foreground">Dashboard</h1>
			</div>
			<Divider />
			<div
				className={`flex-1 col-span-full h-auto grid grid-cols-4 max-[1560px]:grid-cols-2 max-lg:grid-cols-1 gap-5 mt-5`}
			>
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
			<div className={`w-full h-auto grid grid-cols-5 mt-2`}>
				<div
					className={`col-span-2 max-2xl:col-span-full h-auto mb-5 rounded-md flex justify-center items-center`}
				>
					<FSEChart
						data={dummyData}
						type="bar"
						style={{ width: "100%", height: "500px" }}
					/>
				</div>
				<div
					className={`col-span-3 max-2xl:col-span-full rounded-md flex justify-center items-center`}
				>
					<FSEChart
						data={dummyDataForFile}
						type="line"
						style={{ width: "100%", height: "500px" }}
					/>
				</div>
			</div>
			<div className={`w-full h-auto grid grid-cols-5 gap-5`}>
				<div className=" col-span-3 max-[1400px]:col-span-full">
					<FSFavouriteLayout
						title="Favourites"
						defaultView={FSViewEnum.GRID}
						showLayoutChange={false}
					/>
				</div>
				<div className=" col-span-2 max-[1400px]:col-span-full">
					<FSRecent />
				</div>
			</div>
		</div>
	);
};

export default FSDashboard;
