import React from "react";

const FileFolderLoader = () => {
	return (
		<div className={`w-full py-5 flex justify-center items-center flex-col gap-1`}>
			<span className="loader"></span>
			<span className={`text-sm font-rubik text-foreground-700`}>Loading...</span>
		</div>
	);
};

export default FileFolderLoader;
