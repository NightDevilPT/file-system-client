import React from "react";
import VerifyPage from "./_components";

const page = () => {
	return (
		<div
			className={`w-96 h-auto p-5 rounded-md shadow-2xl bg-background grid-cols-1 gap-3 dark:border-2 dark:border-foreground-50`}
		>
			<VerifyPage />
		</div>
	);
};

export default page;