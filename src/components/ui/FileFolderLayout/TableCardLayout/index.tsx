import TableCard from "./TableCard";

export const TableLayoutFrame = ({ data }: { data: any }) => {
	return (
		<div className={`w-full h-auto grid grid-cols-1`}>
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
	);
};
