import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { TbPasswordUser } from "react-icons/tb";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoFolderOpenOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { TiStarOutline } from "react-icons/ti";
import { GoTrash } from "react-icons/go";
import { TbLogout } from "react-icons/tb";
import { PiFolderSimplePlus } from "react-icons/pi";
import { MdOutlineNoteAdd } from "react-icons/md";
import { CgRename } from "react-icons/cg";
import { CiFileOn } from "react-icons/ci";

import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineAudiotrack } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";

const icons = (type: string) => {
	const icon:any = {
		mail: <IoMailOutline />,
		password: <TbPasswordUser className={`min-w-5 min-h-5`} />,
		eyeOpen: <VscEye className={`min-w-5 min-h-5`} />,
		eyeClose: <VscEyeClosed className={`min-w-5 min-h-5`} />,
		userName: <HiOutlineUserCircle className={`min-w-5 min-h-5`} />,
		github: <FaGithub className={`min-w-5 min-h-5`} />,
		add: <IoIosAddCircleOutline className={`min-w-5 min-h-5`} />,
		folder: <IoFolderOpenOutline className={`min-w-5 min-h-5`} />,
		dashboard: <LuLayoutDashboard className={`min-w-5 min-h-5`} />,
		favorite: <TiStarOutline className={`min-w-5 min-h-5`} />,
		trash: <GoTrash className={`min-w-5 min-h-5`} />,
		logout: <TbLogout className={`min-w-5 min-h-5`} />,
		addFolder: <PiFolderSimplePlus className={`min-w-5 min-h-5`} />,
		addFile: <MdOutlineNoteAdd className={`min-w-5 min-h-5`} />,
		name:<CgRename className={`min-w-5 min-h-5`} />,
		file:<CiFileOn className={`min-w-5 min-h-5`} />,
		video:<IoVideocamOutline className={`min-w-5 w-full h-full min-h-5`} />,
		audio:<MdOutlineAudiotrack className={`min-w-5 w-full h-full min-h-5`} />,
		document:<IoDocumentTextOutline className={`min-w-5 w-full h-full min-h-5`} />,
		image:<IoImageOutline className={`min-w-5 w-full h-full min-h-5`} />
	};
	return icon[type];
};

export default icons;
