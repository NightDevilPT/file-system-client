import { History } from "@/types/history";
import { DateFormatEnum } from "@/utils/date";
import { formatDate } from "@/utils/formatDate";
import React from "react";

export interface FSRecentCardProps {
	id: string;
	description: JSX.Element;
	createdAt: string;
}

const FSRecetCards = ({ id, description, createdAt }: FSRecentCardProps) => {
	return (
		<div className="w-full h-auto p-2 border border-divider rounded-md hover:shadow-lg grid grid-cols-1 gap-2 bg-primary-200/10">
			{description}
			<div className={`w-full flex justify-end items-center`}>
				<span className="text-xs">{formatDate(createdAt,DateFormatEnum.DD_MMM_YYYY_HH_MM)}</span>
			</div>
		</div>
	);
};

export default FSRecetCards;
