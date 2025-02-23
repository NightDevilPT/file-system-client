"use client";

import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";

export enum ThemeType {
	dark = "dark",
	light = "light",
}

interface ThemeContextProps {
	theme: ThemeType;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState<ThemeType>(ThemeType.light);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as ThemeType;
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.setAttribute("class", savedTheme);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme =
			theme === ThemeType.light ? ThemeType.dark : ThemeType.light;
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.setAttribute("class", newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
