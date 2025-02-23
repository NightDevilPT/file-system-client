"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

import { Children } from "@/types/children.type";

export const NextUiProvider = ({ children }: Children) => {
	return <NextUIProvider>{children}</NextUIProvider>;
};
