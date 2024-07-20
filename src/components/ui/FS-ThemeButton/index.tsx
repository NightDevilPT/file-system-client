import { ThemeType, useTheme } from "@/Providers/ThemeProvider";
import icons, { IconType } from "@/utils/icons";
import React, { useState } from "react";

export interface FSThemeProps {
	width?: string;
	height?: string;
}

const FSThemeButton = ({ width = "w-8", height = "w-8" }: FSThemeProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			className={`${width} ${height} text-foreground-400 p-1 flex justify-center items-center border-2 rounded-full border-foreground-400`}
			onClick={toggleTheme}
		>
			{icons(theme===ThemeType.dark?IconType.LIGHT:IconType.DARK)}
		</button>
	);
};

export default FSThemeButton;
