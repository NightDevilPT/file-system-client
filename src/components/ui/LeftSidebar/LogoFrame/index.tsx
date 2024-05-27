import React from "react";
import { Image } from "@nextui-org/image";

import logo from "../../../../assets/logo.png";

const LogoFrame = () => {
	return (
		<div className="w-full h-auto mt-2 flex justify-start items-center gap-2">
			<Image width={70} alt="NextUI hero Image" src={logo.src} />
			<div className={`flex-1 grid grid-cols-1`}>
				<p
					className={`text-xl font-rubik font-bold text-foreground-700 tracking-wider`}
				>
					Cloudify
				</p>
				<p
					className={`text-xs font-rubik font-semibold text-foreground-500 tracking-wide`}
				>
					Storage Provider
				</p>
			</div>
		</div>
	);
};

export default LogoFrame;
