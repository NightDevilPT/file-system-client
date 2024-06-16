import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { TbPasswordUser } from "react-icons/tb";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

const icons = (type: string) => {
	const icon:any = {
		mail: <IoMailOutline />,
		password: <TbPasswordUser className={`min-w-5 min-h-5`} />,
		eyeOpen: <VscEye className={`min-w-5 min-h-5`} />,
		eyeClose: <VscEyeClosed className={`min-w-5 min-h-5`} />,
		userName: <HiOutlineUserCircle className={`min-w-5 min-h-5`} />,
		github: <FaGithub className={`min-w-5 min-h-5`} />
	};
	return icon[type];
};

export default icons;
