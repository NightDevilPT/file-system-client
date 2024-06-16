import { Avatar, Button } from "@nextui-org/react";
import React from "react";

import avtar from "../../../assets/avtar.jpeg";
import icons from "@/utils/icons";

const FSUsernav = () => {
	return (
		<div
			className={`w-full h-auto rounded-md bg-foreground-10 flex justify-between items-center`}
		>
			<Button className="flex-1 flex justify-start items-center gap-2 bg-transparent h-auto p-2">
				<Avatar src={avtar.src} size="sm" />
				<div className="grid grid-cols-1 gap-0 flex-1">
					<span className={`truncate flex-1 text-start`}>
						Pawan Kumar jg
					</span>
					<span className={`truncate flex-1 text-start text-xs text-foreground-400`}>
						pawankumartada@gmail.com
					</span>
				</div>
			</Button>
			<Button
				variant="light"
				color="danger"
				className={`w-auto min-w-12`}
			>
				{icons("logout")}
			</Button>
		</div>
	);
};

export default FSUsernav;
