import icons from "@/utils/icons";
import React, { useState } from "react";

const FSThemeButton = () => {
	const [theme, setTheme] = useState<string>("light");

	const changeTheme = () => {
		const themeName = theme === "dark" ? "light" : "dark";
		setTheme(themeName);
		document.documentElement.setAttribute("class", themeName);
	};

	return (
		<button
			className={`w-8 h-8 text-foreground-400 p-1 flex justify-center items-center border-2 rounded-full border-foreground-400`}
			onClick={changeTheme}
		>
			{icons(theme==='dark'?'light':'dark')}
		</button>
	);
};

export default FSThemeButton;
