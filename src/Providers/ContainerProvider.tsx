"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { Children } from "@/types/children.type";
import FSSidebar from "@/components/ui/FS-Sidebar";
import FSSearchLayout from "@/components/ui/FS-SearchLayout";

export const ContainerProvider = ({ children }: Children) => {
	const pathname = usePathname()

	const showSearchLayout = pathname !== "/" && pathname !== "/dashboard";

	return (
		<section className={`w-full h-[100vh] overflow-y-auto flex justify-between items-start`}>
			<FSSidebar />
			<div className="flex-1 flex justify-start items-start flex-col gap-5 h-full p-4 overflow-y-auto overflow-x-hidden">
				<FSSearchLayout />
				{children}
			</div>
		</section>
	);
};
