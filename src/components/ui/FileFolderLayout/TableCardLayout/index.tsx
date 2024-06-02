import TableCard from "./TableCard";

export const TableLayoutFrame = ({ data }: { data: any }) => {
	return (
		<div
			className={`w-full h-auto grid grid-cols-1 border-2 border-foreground-200 rounded-md overflow-hidden`}
		>
			<div
				className={`w-full h-auto grid grid-cols-8 place-items-start border-b-2 border-foreground-200 px-2`}
			>
				<div className="px-3 h-10 flex justify-center items-center text-sm col-span-3">
					Name
				</div>
				<div className="px-3 h-10 flex justify-center items-center text-sm col-span-2">
					Type
				</div>
				<div className="px-3 h-10 flex justify-center items-center text-sm col-span-2">
					Created At
				</div>
			</div>
			<div className={`w-full h-auto`}>
				{data?.map((items: any, index: number) => {
					return (
						<TableCard
							key={items.name + "-" + index}
							name={items.name}
							type={items.type}
							createdAt={items.createdAt}
						/>
					);
				})}
			</div>
		</div>
	);
};
