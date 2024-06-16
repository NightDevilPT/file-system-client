import * as React from "react";

import { Children } from "@/types/children.type";
import FSSidebar from "@/components/ui/FS-Sidebar";


export const ContainerProvider = ({ children }: Children) => {
	return (
		<section
			className={`w-full h-[100vh] overflow-y-auto flex justify-between items-start gap-5`}
		>
			<FSSidebar />
			{children}
		</section>
	);
};
