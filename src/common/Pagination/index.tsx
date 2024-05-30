import React from "react";
import { Pagination } from "@nextui-org/react";

export interface PaginationIprops {
	totalPage: number;
	initialPage: number;
	setInitialPage: React.Dispatch<React.SetStateAction<number>>
}

export default function PaginationFrame({
	totalPage,
	initialPage,
	setInitialPage
}: PaginationIprops) {
	return (
			<Pagination
				isCompact
				showControls
				total={totalPage}
				initialPage={initialPage}
				onChange={setInitialPage}
			/>
	);
}
