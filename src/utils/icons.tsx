import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { TbPasswordUser } from "react-icons/tb";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { IoAddCircleOutline, IoFolderOpenOutline, IoVideocamOutline, IoDocumentTextOutline, IoImageOutline, IoTrashOutline } from "react-icons/io5";
import { LuLayoutDashboard, LuSunMedium } from "react-icons/lu";
import { TiStarOutline } from "react-icons/ti";
import { GoTrash, GoBookmark, GoBookmarkFill } from "react-icons/go";
import { TbLogout } from "react-icons/tb";
import { PiFolderSimplePlus } from "react-icons/pi";
import { MdOutlineNoteAdd, MdOutlineEditNote, MdOutlineAudiotrack } from "react-icons/md";
import { CgRename } from "react-icons/cg";
import { CiFileOn, CiGrid41, CiViewTable } from "react-icons/ci";
import { RiErrorWarningLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { AiFillMoon } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

export enum IconType {
    MAIL = "mail",
    PASSWORD = "password",
    EYE_OPEN = "eyeOpen",
    EYE_CLOSE = "eyeClose",
    USER_NAME = "userName",
    GITHUB = "github",
    ADD = "add",
    FOLDER = "folder",
    DASHBOARD = "dashboard",
    FAVORITE = "favorite",
    TRASH = "trash",
    LOGOUT = "logout",
    ADD_FOLDER = "addFolder",
    ADD_FILE = "addFile",
    NAME = "name",
    FILE = "file",
    VIDEO = "video",
    AUDIO = "audio",
    DOCUMENT = "document",
    IMAGE = "image",
    OTHERS = "others",
    SEARCH = "search",
    LIGHT = "light",
    DARK = "dark",
    GRID = "grid",
    TABLE = "table",
    EDIT = "edit",
    BOOKMARK = "bookmark",
    SAVED_BOOKMARK = "savedBookmark",
    THREE_DOT = "threeDot",
    DELETE = "delete",
}

const icons = (type: IconType) => {
    const icon = {
        [IconType.MAIL]: <IoMailOutline />,
        [IconType.PASSWORD]: <TbPasswordUser className={`min-w-5 min-h-5`} />,
        [IconType.EYE_OPEN]: <VscEye className={`min-w-5 min-h-5`} />,
        [IconType.EYE_CLOSE]: <VscEyeClosed className={`min-w-5 min-h-5`} />,
        [IconType.USER_NAME]: <HiOutlineUserCircle className={`min-w-5 min-h-5`} />,
        [IconType.GITHUB]: <FaGithub className={`min-w-5 min-h-5`} />,
        [IconType.ADD]: <IoAddCircleOutline className={`min-w-5 min-h-5`} />,
        [IconType.FOLDER]: <IoFolderOpenOutline className={`min-w-5 min-h-5`} />,
        [IconType.DASHBOARD]: <LuLayoutDashboard className={`min-w-5 min-h-5`} />,
        [IconType.FAVORITE]: <TiStarOutline className={`min-w-5 min-h-5`} />,
        [IconType.TRASH]: <GoTrash className={`min-w-5 min-h-5`} />,
        [IconType.LOGOUT]: <TbLogout className={`min-w-5 min-h-5`} />,
        [IconType.ADD_FOLDER]: <PiFolderSimplePlus className={`min-w-5 min-h-5`} />,
        [IconType.ADD_FILE]: <MdOutlineNoteAdd className={`min-w-5 min-h-5`} />,
        [IconType.NAME]: <CgRename className={`min-w-5 min-h-5`} />,
        [IconType.FILE]: <CiFileOn className={`min-w-5 min-h-5`} />,
        [IconType.VIDEO]: <IoVideocamOutline className={`min-w-5 min-h-5 w-full h-full`} />,
        [IconType.AUDIO]: <MdOutlineAudiotrack className={`min-w-5 min-h-5 w-full h-full`} />,
        [IconType.DOCUMENT]: <IoDocumentTextOutline className={`min-w-5 min-h-5 w-full h-full`} />,
        [IconType.IMAGE]: <IoImageOutline className={`min-w-5 min-h-5 w-full h-full`} />,
        [IconType.OTHERS]: <RiErrorWarningLine className={`min-w-5 min-h-5 w-full h-full`} />,
        [IconType.SEARCH]: <FiSearch className={`min-w-5 min-h-5`} />,
        [IconType.LIGHT]: <LuSunMedium className={`min-w-5 min-h-5`} />,
        [IconType.DARK]: <AiFillMoon className={`min-w-5 min-h-5`} />,
        [IconType.GRID]: <CiGrid41 className={`min-w-5 min-h-5`} />,
        [IconType.TABLE]: <CiViewTable className={`min-w-5 min-h-5`} />,
        [IconType.EDIT]: <MdOutlineEditNote className={`min-w-5 min-h-5`} />,
        [IconType.BOOKMARK]: <GoBookmark className={`min-w-5 min-h-5`} />,
        [IconType.SAVED_BOOKMARK]: <GoBookmarkFill className={`min-w-5 min-h-5`} />,
        [IconType.THREE_DOT]: <BsThreeDotsVertical className={`min-w-4 min-h-4`} />,
        [IconType.DELETE]: <IoTrashOutline className={`min-w-5 min-h-5`} />,
    };
    return icon[type];
};

export default icons;
