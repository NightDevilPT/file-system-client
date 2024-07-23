import { History } from "@/types/history";
import { generateDescription } from "@/utils/history-description";
import { sampleHistoryData } from "@/utils/history-dummy.data";
import { Divider } from "@nextui-org/divider";
import React from "react";
import FSRecetCards from "./FS-RecentCard";

const FSRecent = () => {
	return (
		<div className="w-full h-[570px] overflow-y-auto flex flex-col gap-2 bg-background border-1 border-divider dark:bg-default-50 rounded-md px-4 py-2 pb-5 relative">
			<div className="w-full h-8 flex justify-between items-center">
				<h1 className="text-lg font-sans text-foreground">
					Recent Activities
				</h1>
				{/* <Link href="/folder-files" className={`text-primary-400 text-sm hover:text-primary-600 transition-all duration-300`}>View All</Link> */}
			</div>
			<Divider className="mb-3" />
			<div className={`w-full h-auto max-h-96 overflow-y-auto grid grid-cols-1 gap-3`}>
				{sampleHistoryData.map((items:History,index:number)=>{
					const description:JSX.Element = generateDescription(items);
					return <FSRecetCards key={items.id} description={description} id={items.id} createdAt={items.createdAt} />
				})}
			</div>
		</div>
	);
};

export default FSRecent;
