"use client";

import React from "react";
import { Divider } from "@nextui-org/react";

import icons from "@/utils/icons";
import FSUsernav from "../FS-Usernav";
import FSThemeButton from "../FS-ThemeButton";

export const sortBy = [
	{ key: "CreatedAt ASC", label: "createdAtAsc" },
	{ key: "CreatedAt DESC", label: "createdAtDesc" },
	{ key: "UpdatedAt ASC", label: "updatedAtAsc" },
	{ key: "UpdatedAt DESC", label: "updatedAtDesc" },
];

const FSSearchLayout = () => {
	return (
		<div
			className={`w-full h-auto rounded-xl bg-background shadow-lg dark:bg-default-50 flex justify-start items-center gap-3 px-2`}
		>
			<div
				className={`w-full h-full py-3 flex justify-between items-center gap-2 pl-5`}
			>
				<div
					className={`w-auto h-full flex justify-start items-center gap-3`}
				>
					<div
						className={`w-auto h-full flex justify-center items-center gap-2 text-sm`}
					>
						<input
							className={`min-w-24 relative top-[2px] bg-transparent w-full h-auto outline-none pb-1 border-0 border-b-2 border-divider`}
							placeholder={`Type here to search`}
						/>
						<button
							className={`w-auto h-auto py-1 px-3 rounded-md bg-primary text-sm text-primary-100 flex justify-center items-center gap-2`}
						>
							Search
							{icons("search")}
						</button>
					</div>
				</div>
				<FSThemeButton />
			</div>
			<div className="py-3 h-full flex justify-center items-center">
				<Divider className="my-3 bg-divider" orientation="vertical" />
			</div>
			<div className={` min-w-52 h-auto`}>
				<FSUsernav />
			</div>
		</div>
	);
};

export default FSSearchLayout;
