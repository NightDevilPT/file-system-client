import { env } from "@/config/env";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const ProtectedLayout = async ({ children }: { children: ReactNode }) => {
	const cookieStore = await cookies();
	const accessToken = cookieStore.get("accessToken")?.value;
	const refreshToken = cookieStore.get("refreshToken")?.value;

	if (!accessToken ) {
		redirect("/auth/login");
	}

	const tokenValue = jwt.verify(accessToken, env.JWT_SECRET as string) as {
		id: string;
	};

	console.log("Token Value:", tokenValue);

	if (!tokenValue?.id) {
		redirect("/auth/login");
	}
	return <>{children}</>;
};

export default ProtectedLayout;
