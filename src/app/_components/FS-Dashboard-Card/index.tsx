import icons, { IconType } from "@/utils/icons";
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
					: icon === 'others'
						? 'bg-red-500/90'
						: "bg-blue-500/90";
	};
	const getBarColor = () => {
		return icon === "image"
			? "bg-green-300/90"
			: icon === "document"
				? "bg-orange-300/90"
				: icon === "audio"
					? "bg-pink-300/90"
					: icon === 'others'
						? 'bg-red-300/90'
						: "bg-blue-300/90";
	};
	return (
		<div
			className={`w-full h-auto flex justify-start items-center flex-wrap gap-3 ${getCardColor()} rounded-lg px-5 py-3 shadow-xl`}
		>
			<div className={`w-12 h-12 text-slate-50`}>{icons(icon as IconType)}</div>
			<div className={`flex-1 grid grid-cols-1`}>
				<h1 className={`text-xl text-slate-50`}>{title}</h1>
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
			<div className={`w-full h-auto flex justify-start items-center gap-3 font-sans text-xs text-slate-100`}>
				<div className={`flex justify-start items-center gap-1`}>
					<span className={`w-3 h-3 rounded bg-slate-50`} />
					<span>Used {currentSpace}MB</span>
				</div>
				<div className={`flex justify-start items-center gap-1`}>
					<span className={`w-3 h-3 rounded ${getBarColor()}`} />
					<span>Available {totalSpace-currentSpace}MB</span>
				</div>
			</div>
		</div>
	);
};

export default FSDashboardCard;
