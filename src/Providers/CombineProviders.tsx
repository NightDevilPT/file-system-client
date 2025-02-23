"use client";

import * as React from "react";
import { ToastContainer } from "react-toastify";

import { ReduxProvider } from "./ReduxProvider";
import { Children } from "@/types/children.type";
import { ThemeProvider } from "./ThemeProvider";
import { NextUiProvider } from "./NextUiProvider";
import { ContainerProvider } from "./ContainerProvider";

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
