import React from "react";
import Navbar from "./Navbar";
import LogoFrame from "./LogoFrame";
import { Divider } from "@nextui-org/divider";

const LeftSideBar = () => {
	return (
		<div
			className={`w-60 h-full bg-slate-100 dark:bg-gray-900 p-5 shadow-xl shadow-slate-900/10`}
		>
			<LogoFrame />
			<Divider className={`w-full h-[2px] my-1`} />
			<Navbar />
		</div>
	);
};

export default LeftSideBar;
