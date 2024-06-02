import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Avatar, AvatarIcon } from "@nextui-org/react";

import avtar from '../../../assets/avtar.jpeg';

export interface UsernavIProps {
	src: string;
	title: string;
	subtitle?: string;
}

const UserNav = ({ src, title, subtitle }: UsernavIProps) => {
	return (
		<div
			className={`w-full h-auto flex justify-between items-center gap-5 p-3 rounded-md`}
		>
			<div
				className={`w-auto h-auto flex justify-start items-center gap-3`}
			>
				<Avatar src={avtar.src} icon={<AvatarIcon />} />
				<div
					className={`w-auto flex justify-center items-start flex-col relative`}
				>
					<span
						className={` text-base text-foreground-700 font-sans font-[600] tracking-normal`}
					>
						{title}
					</span>
					{subtitle && (
						<span
							className={`relative bottom-1 text-sm text-foreground-400 font-sans font-[600] tracking-normal`}
						>
							{subtitle}
						</span>
					)}
				</div>
			</div>
			<button
				className={`w-auto h-auto p-2 rounded hover:bg-red-500 text-foreground-900 transition-all duration-300`}
			>
				<FiLogOut className={`w-5 h-5`} />
			</button>
		</div>
	);
};

export default UserNav;
