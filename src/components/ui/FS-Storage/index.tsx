import React from "react";

const FSStorageInformation = () => {
	const totalStorage = 45;
	const usedStorage = 15;
	const usedStoragePercentage = (usedStorage / totalStorage) * 100;
	const progressColor = 'bg-primary-400'
	return (
		<div
			className={`w-full h-auto border-t-1 border-divider pt-3 flex justify-start items-start flex-col gap-2`}
		>
			<div
				className={`w-full flex justify-between items-center font-sans text-sm`}
			>
				<span>Cloudify Storage</span>
				<span>{totalStorage}MB</span>
			</div>
			<div className={`w-full h-1 rounded-full relative bg-divider`}>
				<div
					className={`rounded-full h-full absolute left-0 top-0 ${progressColor}`}
					style={{ width: `${usedStoragePercentage}%` }} // Set the width based on the used storage percentage
				></div>
			</div>
			<div className={`w-full h-auto flex justify-start items-center gap-1 font-sans`}>
				<div className={`flex justify-start items-center gap-1`}>
					<span className={`w-3 h-3 rounded ${progressColor}`} />
					<span className="text-xs">Used {usedStorage}MB</span>
				</div>
				<div className={`flex justify-start items-center gap-1`}>
					<span className={`w-3 h-3 rounded bg-divider`} />
					<span className="text-xs">Available {totalStorage-usedStorage}MB</span>
				</div>
			</div>
		</div>
	);
};

export default FSStorageInformation;
