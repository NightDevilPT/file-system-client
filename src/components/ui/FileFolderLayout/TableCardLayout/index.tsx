import TableCard from "./TableCard";

export const TableLayoutFrame = ({ data }: { data: any }) => {
	return (
		<div
			className={`w-full h-auto grid grid-cols-1 border-2 border-foreground-200 rounded-md`}
		>
			<div
				className={`w-full h-auto grid grid-cols-4 place-items-start border-b-2 border-foreground-200`}
			>
				<div className="px-3 h-10 flex justify-center items-center text-sm">
					FileName
				</div>
				<div className="px-3 h-10 flex justify-center items-center text-sm">
					File Type
				</div>
				<div className="px-3 h-10 flex justify-center items-center text-sm">
					Created At
				</div>
			</div>
			<div className={`w-full h-auto px-3`}>
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
