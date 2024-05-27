import * as React from "react";

import { Children } from "@/types/children.type";
import LeftSideBar from "../ui/LeftSidebar";
import RightSideBar from "../ui/RightSideBar";

export const ContainerProvider = ({ children }: Children) => {
	return (
		<section
			className={`w-full h-[100vh] overflow-y-auto flex justify-start items-start gap-5`}
		>
			<LeftSideBar />
			{children}
			<RightSideBar />
		</section>
	);
};
