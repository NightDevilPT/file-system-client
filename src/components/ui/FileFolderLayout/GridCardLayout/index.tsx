import GridCard from "./GridCard";

export const GridLayoutFrame = ({ data }: { data: any }) => {
	return (
		<div className={`w-full h-auto grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3 py-1`}>
			{data?.map((items: any, index: number) => {
				return (
					<GridCard
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
