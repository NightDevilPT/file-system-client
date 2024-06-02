import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export interface FileFolderDropDownIprops {
  type?:string
}

export default function FileFolderDropDownMenu({type}:FileFolderDropDownIprops) {
  return (
    <Dropdown className=" dark:bg-slate-900 dark:border-[1px] dark:border-slate-800">
      <DropdownTrigger>
        <button
		  className="p-1 rounded border-none outline-none hover:text-primary-500"
        >
          <BsThreeDotsVertical className={`w-4 h-4`} />
        </button>
      </DropdownTrigger>
      <DropdownMenu 
	  className=" dark:bg-slate-900 rounded-md"
        aria-label="Action event example" 
        onAction={(key) => alert(key)}
      >
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
