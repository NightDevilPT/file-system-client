import "./globals.css";
import type { Metadata } from "next";
import { CombineProvider } from "@/Providers/CombineProviders";

export const metadata: Metadata = {
	title: "Cloudify",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={`bg-sky-100 dark:bg-gray-950`}>
				<CombineProvider>{children}</CombineProvider>
			</body>
		</html>
	);
}
