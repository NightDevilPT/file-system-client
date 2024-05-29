import React from "react";
import {Input} from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
  return (
    <div className="w-full h-auto rounded-xl overflow-hidden flex justify-center items-center shadow-lg">
      <Input
        isClearable
        radius="lg"
        className={`flex-1 h-full bg-slate-100`}
        placeholder="Type to search..."
        startContent={
          <FiSearch className="text-black/50 mb-0.5 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
  );
}
