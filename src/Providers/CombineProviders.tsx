"use client"

import * as React from "react";

import { Children } from "@/types/children.type";
import { NextUiProvider } from "./NextUiProvider";
import { ContainerProvider } from "./ContainerProvider";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./ThemeProvider";
import { ReduxProvider } from "./ReduxProvider";

export const CombineProvider = ({ children }: Children) => {
	return (
		<React.Fragment>
			<NextUiProvider>
				<ReduxProvider>
					<ThemeProvider>
						<ContainerProvider>{children}</ContainerProvider>
					</ThemeProvider>
				</ReduxProvider>
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
