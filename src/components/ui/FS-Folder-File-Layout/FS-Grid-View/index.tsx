import React from "react";
import FSGridCard from "./FS-Grid-Card";
import {
	FileFolder,
	FSFileFolderProps
} from "@/interface/interface";

const FSGridView = ({ data }: FSFileFolderProps) => {
	return (
		<div
			className={`w-full h-auto gap-5 grid grid-cols-5 max-xl:grid-cols-4`}
		>
			{data.map((items: FileFolder, index: number) => {
				return <FSGridCard data={items} key={items.id} />;
			})}
		</div>
	);
};

export default FSGridView;
