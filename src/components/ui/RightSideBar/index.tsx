import React from "react";
import UserNav from "../UserNav";
import { Divider } from "@nextui-org/divider";
import ProgressOfBucket from "./ProgressOfBucket";

const RightSideBar = () => {
	return (
		<div
			className={`sticky top-0 w-96 h-full bg-slate-100 dark:bg-gray-900 px-5 shadow-xl shadow-slate-900/10 py-5`}
		>
			<UserNav
				src={`https://i.pravatar.cc/150?u=a042581f4e29026024d`}
				title={`Pawan Kumar`}
				subtitle={`12345`}
			/>
			<Divider className={`w-full h-[2px] my-1`} />
			<ProgressOfBucket />
		</div>
	);
};

export default RightSideBar;
