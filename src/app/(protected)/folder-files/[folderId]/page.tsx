"use client";

import FSFolderFileLayout from "@/components/ui/FS-Folder-File-Layout";
import useInitializeAuth from "@/hooks/useInitialAuth";

interface HomeProps {
	params: { folderId: string };
}

export default function Home({ params }: HomeProps) {
	return (
		<div className="font-rubik flex-1 w-full h-[90vh] overflow-y-auto">
			<FSFolderFileLayout
				title="Folders & Files"
				parentFolderId={params.folderId}
			/>
		</div>
	);
}
