"use client";

import React, { useCallback, useMemo } from "react";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

import FSLogoFrame from "../FS-Logo";
import FSCreateFolderModal from "./FS-CreateFolder-Modal";
import FSCreateFileModal from "./FS-CreateFile-Modal";
import FSStorageInformation from "../FS-Storage";
import icons, { IconType } from "@/utils/icons";

export enum ActiveButtonEnum {
	createFolder = "Create Folder",
	createFile = "Create File",
	dashboard = "Dashboard",
	files = "Files",
	trash = "Trash",
	favorite = "Favorite",
	recentActivity = "Recent Activity",
}

/**
 * Sidebar Navigation Component
 */
const FSSidebar: React.FC = () => {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();

	const parentFolderId = params?.folderId as string || null;

	// Memoized route check to prevent unnecessary re-renders
	const isFolderFilesRoute = useMemo(() => /^\/folder-files(\/.*)?$/.test(pathname), [pathname]);

	// Optimized navigation function using useCallback
	const handlerNavigateFunction = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		router.push(`/${event.currentTarget.name}`);
	}, [router]);

	// Navigation buttons configuration (avoids repetition)
	const NAV_LINKS = useMemo(() => [
		{ name: "", label: "Dashboard", icon: IconType.DASHBOARD, isActive: pathname === "/" },
		{ name: "folder-files", label: "My Folder / File", icon: IconType.FOLDER, isActive: isFolderFilesRoute },
		{ name: "recent-activity", label: "Recent Activity", icon: IconType.HISTORY, isActive: pathname === "/recent-activity" },
		{ name: "favourites", label: "Favorite", icon: IconType.FAVORITE, isActive: pathname === "/favourites" },
		{ name: "trash", label: "Trash", icon: IconType.TRASH, isActive: pathname === "/trash", color: "danger" },
	], [pathname, isFolderFilesRoute]);

	return (
		<div className="w-64 h-full bg-background shadow-xl dark:bg-default-50 px-5 relative flex justify-start items-start flex-col">
			{/* Logo Section */}
			<div className="w-full h-auto pt-5 pb-2 flex justify-start items-center">
				<FSLogoFrame />
			</div>

			<Divider className="mb-5" />

			{/* Create Folder & File Buttons */}
			<div className="w-full h-auto grid grid-cols-1 gap-3">
				<FSCreateFolderModal parentFolderId={parentFolderId} />
				<FSCreateFileModal />
			</div>

			{/* Navigation Buttons */}
			<div className="w-full h-auto grid grid-cols-1 gap-3 mt-8">
				{NAV_LINKS.map(({ name, label, icon, isActive, color }) => (
					<Button
						key={name}
						aria-label={label}
						variant="light"
						color={isActive ? "primary" : color as any || "default"}
						fullWidth
						name={name}
						onClick={handlerNavigateFunction}
						startContent={icons(icon)}
						className="flex justify-start items-center"
					>
						{label}
					</Button>
				))}
			</div>

			{/* Storage Information */}
			<div className="w-full absolute bottom-5 left-0 px-5">
				<FSStorageInformation />
			</div>
		</div>
	);
};

export default FSSidebar;
