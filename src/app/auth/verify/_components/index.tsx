"use client";

import { Divider } from "@nextui-org/divider";
import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";

import icons, { IconType } from "@/utils/icons";
import { verifyUser } from "@/redux/verify/thunk";
import FSLogoFrame from "@/components/ui/FS-Logo";
import { ApiStatusEnum } from "@/interface/interface";
import { resetVerifyState } from "@/redux/verify/slice";
import { AppDispatch, RootState } from "@/redux/store";

const VerifyContent = () => {
	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();
	const params = useSearchParams();

	// Get the state from Redux
	const { status, responseMessage, error } = useSelector(
		(state: RootState) => state.verify
	);

	useEffect(() => {
		const token = params.get("token");

		if (token) {
			dispatch(verifyUser({ token }));
		}

		// Cleanup when component unmounts
		return () => {
			dispatch(resetVerifyState());
		};
	}, [params, dispatch]);

	useEffect(() => {
		if (status === ApiStatusEnum.SUCCEEDED) {
			router.push("/auth/login");
		}
	}, [status, responseMessage, error]);

	return (
		<React.Fragment>
			<div className="w-full h-auto flex justify-center items-center">
				<FSLogoFrame />
			</div>
			<Divider className="mt-1" />
			<div className="w-full h-auto my-5 flex justify-center items-center flex-col gap-2">
				{status === ApiStatusEnum.LOADING && (
					<div className="bg-background flex justify-center items-center gap-3">
						<span className="min-w-5 min-h-5 rounded-full animate-spin border-4 border-primary-200 border-t-primary"></span>
						<span>Verifying...</span>
					</div>
				)}
				{status === ApiStatusEnum.SUCCEEDED && (
					<div className="bg-background flex justify-center items-center gap-3">
						<div className="text-success">
							{icons(IconType.SUCCESS)}
						</div>
						<span>
							{responseMessage || "Verified successfully!"}
						</span>
					</div>
				)}
				{status === ApiStatusEnum.FAILED && (
					<div className="bg-background flex justify-center items-center gap-3">
						<div className="text-warning">
							{icons(IconType.WARNING)}
						</div>
						<span>{error || "Invalid Token"}</span>
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

const VerifyPage = () => {
	return (
		<Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
			<VerifyContent />
		</Suspense>
	);
};

export default VerifyPage;
