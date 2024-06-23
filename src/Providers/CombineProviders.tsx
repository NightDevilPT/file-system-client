import * as React from "react";

import { Children } from "@/types/children.type";
import { NextUiProvider } from "./NextUiProvider";
import { ContainerProvider } from "./ContainerProvider";
import { ToastContainer } from "react-toastify";

export const CombineProvider = ({ children }: Children) => {
	return (
		<React.Fragment>
			<NextUiProvider>
				<ContainerProvider>{children}</ContainerProvider>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme={"light"}
				/>
			</NextUiProvider>
		</React.Fragment>
	);
};
