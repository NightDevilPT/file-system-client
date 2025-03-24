"use client";

import FSDashboard from "@/app/_components/FS-Dashboard";
import FSFolderFileLayout from "@/components/ui/FS-Folder-File-Layout";
import useInitializeAuth from "@/hooks/useInitialAuth";
import { Divider } from "@nextui-org/divider";

export default function Home() {
	const { loading } = useInitializeAuth();
	console.log(loading, "loading");
	if (loading) return null;
	return (
		<div className={`font-rubik flex-1 w-full h-[90vh] overflow-y-auto`}>
			<FSFolderFileLayout title="Folders & Files" />
		</div>
	);
}
