'use client'

import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { BsFolder2Open } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathName = usePathname();

	return (
		<div className={`w-full h-auto mt-5 space-y-8`}>
			<div className={`w-full h-auto space-y-3`}>
				<button
					className={`w-full h-auto p-3 py-2 text-foreground-50 font-rubik text-base bg-primary-500 hover:bg-primary-400 transition-all duration-300 rounded-md flex justify-center items-center gap-2`}
				>
					Add New File
					<IoMdAddCircleOutline
						className={`w-5 h-5 text-foreground-50`}
					/>
				</button>

				<button
					className={`w-full h-auto p-3 py-2 text-foreground-50 font-rubik text-base bg-primary-500 hover:bg-primary-400 transition-all duration-300 rounded-md flex justify-center items-center gap-2`}
				>
					Create Folder
					<IoMdAddCircleOutline
						className={`w-5 h-5 text-foreground-50`}
					/>
				</button>
			</div>

			<div className={`w-full h-auto space-y-2`}>
				<button
					className={`w-full h-auto p-3 py-2 font-rubik text-base text-foreground-700 ${pathName==='/'?'bg-secondary-500 text-secondary-50':'hover:bg-secondary-100/50'} transition-all duration-300 rounded-md flex justify-start items-center gap-2`}
				>
					<GoHome className={`w-5 h-5`} />
					Home
				</button>
				<button
					className={`w-full h-auto p-3 py-2 font-rubik text-base text-foreground-700 hover:bg-secondary-100/50 transition-all duration-300 rounded-md flex justify-start items-center gap-2`}
				>
					<BsFolder2Open className={`w-5 h-5`} />
					My Files
				</button>
				<button
					className={`w-full h-auto p-3 py-2 font-rubik text-base text-foreground-700 hover:bg-secondary-100/50 transition-all duration-300 rounded-md flex justify-start items-center gap-2`}
				>
					<FaRegStar className={`w-5 h-5`} />
					Favorites
				</button>

				<button
					className={`w-full h-auto p-3 py-2 font-rubik text-base text-foreground-700 hover:bg-secondary-100/50 transition-all duration-300 rounded-md flex justify-start items-center gap-2`}
				>
					<GoHome className={`w-5 h-5`} />
					Trash
				</button>
			</div>
		</div>
	);
};

export default Navbar;
