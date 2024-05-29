import React from "react";
import SearchInput from "./SearchInput";
import FileFolderLayout from "../FileFolderLayout";

const HomeFrame = () => {
	return (
		<div className={`w-full h-auto p-5 space-y-5`}>
			<SearchInput />
			<FileFolderLayout title={`Folders`} showLayout />
			<FileFolderLayout title={`Files`} showLayout />
		</div>
	);
};

export default HomeFrame;
