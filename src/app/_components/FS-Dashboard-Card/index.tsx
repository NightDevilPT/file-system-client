import icons from "@/utils/icons";
import React from "react";

export interface FSDashboardCardProps {
	icon: string;
	title: string;
	subTitle?: string;
	totalSpace: number;
	currentSpace: number;
}

const FSDashboardCard = ({
	icon,
	title,
	subTitle,
	totalSpace,
	currentSpace,
}: FSDashboardCardProps) => {
	const percentage = (currentSpace / totalSpace) * 100;
	const getCardColor = () => {
		return icon === "image"
			? "bg-green-500/90"
			: icon === "document"
			? "bg-orange-500/90"
			: icon === "audio"
			? "bg-pink-500/90"
			: "bg-blue-500/90";
	};
	const getBarColor = () => {
		return icon === "image"
			? "bg-green-300/90"
			: icon === "document"
			? "bg-orange-300/90"
			: icon === "audio"
			? "bg-pink-300/90"
			: "bg-blue-300/90";
	};
	return (
		<div
			className={`w-full h-auto flex justify-start items-center flex-wrap gap-3 ${getCardColor()} rounded-lg px-5 py-3 shadow-xl`}
		>
			<div className={`w-16 h-16 text-slate-50`}>{icons(icon)}</div>
			<div className={`flex-1 grid grid-cols-1`}>
				<h1 className={`text-2xl text-slate-50`}>{title}</h1>
				<span className={`text-sm text-slate-50`}>{subTitle}</span>
			</div>
			<div
				className={`w-full h-2 flex justify-start items-center rounded-full ${getBarColor()}`}
			>
				<span
					style={{ width: `${percentage}%` }}
					className={`h-full bg-slate-50 rounded-full`}
				></span>
			</div>
		</div>
	);
};

export default FSDashboardCard;
