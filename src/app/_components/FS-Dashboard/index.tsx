import React from "react";
import FSDashboardCard from "../FS-Dashboard-Card";
import { Divider } from "@nextui-org/divider";
// import FSRecent from "../FS-Recent";

const FSDashboard = () => {
	return (
		<div className={`w-full h-auto py-5 pr-5`}>
			<div className={`w-full h-auto grid grid-cols-4 gap-5`}>
				<FSDashboardCard
					title="Images"
					subTitle="Total Image : 5"
					icon="image"
					totalSpace={20}
					currentSpace={5}
				/>
				<FSDashboardCard
					title="Videos"
					subTitle="Total Video : 10"
					icon="video"
					totalSpace={20}
					currentSpace={10}
				/>
				<FSDashboardCard
					title="Audios"
					subTitle="Total Audio Count : 20"
					icon="audio"
					totalSpace={20}
					currentSpace={20}
				/>
				<FSDashboardCard
					title="Documents"
					subTitle="Total Document : 15"
					icon="document"
					totalSpace={20}
					currentSpace={15}
				/>
			</div>
			<Divider className={`my-5 h-[2px]`} />
			{/* <div className={`w-full h-auto flex justify-start items-center gap-5`}>
				<div className={`flex-1`}></div>
				<div className={`min-w-80 overflow-y-auto`}>
					<FSRecent />
				</div>
			</div> */}
		</div>
	);
};

export default FSDashboard;
