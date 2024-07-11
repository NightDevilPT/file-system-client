import { FSFileFolderProps } from "@/interface/interface";
import React from "react";
import FSTable from "./FS-Table";

const FSTableView = ({ data }: FSFileFolderProps) => {
	return <FSTable data={data} />;
};

export default FSTableView;
