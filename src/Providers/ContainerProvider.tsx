import * as React from "react";

import { Children } from "@/types/children.type";
import FSSidebar from "@/components/ui/FS-Sidebar";
import FSSearchLayout from "@/components/ui/FS-SearchLayout";

export const ContainerProvider = ({ children }: Children) => {
	return (
		<section
			className={`w-full h-[100vh] overflow-y-auto flex justify-between items-start`}
		>
			<FSSidebar />
			<div className="flex-1 flex justify-start items-start flex-col gap-5 h-full p-4">
				<FSSearchLayout /> {children}
			</div>
		</section>
	);
};
