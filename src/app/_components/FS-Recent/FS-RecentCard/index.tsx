import { History, SharedEvents } from "@/types/history";
import { DateFormatEnum } from "@/utils/date";
import { formatDate } from "@/utils/formatDate";
import icons from "@/utils/icons";
import React from "react";

export interface FSRecentCardProps {
	id: string;
	description: JSX.Element;
	createdAt: string;
	eventName:SharedEvents
}

const FSRecetCards = ({ id, description, createdAt,eventName }: FSRecentCardProps) => {
	return (
		<div className="w-full h-auto p-2 border border-divider rounded-md hover:shadow-lg grid grid-cols-1 gap-2 bg-primary-100/10">
			<div
				className={`w-full h-auto flex justify-start items-start gap-5`}
			>
				<span className={`min-w-8 w-8 h-auto text-default-400 flex justify-start items-center`}>
					{icons(eventName)}
				</span>
				<div className="flex-1">{description}</div>
			</div>
			<div className={`w-full flex justify-end items-center`}>
				<span className="text-xs">
					{formatDate(createdAt, DateFormatEnum.DD_MMM_YYYY_HH_MM)}
				</span>
			</div>
		</div>
	);
};

export default FSRecetCards;
