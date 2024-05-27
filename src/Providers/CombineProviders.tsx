import * as React from "react";

import { Children } from "@/types/children.type";
import { NextUiProvider } from "./NextUiProvider";
import { ContainerProvider } from "../components/layouts/ContainerProvider";

export const CombineProvider = ({ children }: Children) => {
	return (
		<React.Fragment>
			<NextUiProvider>
				<ContainerProvider>{children}</ContainerProvider>
			</NextUiProvider>
		</React.Fragment>
	);
};
