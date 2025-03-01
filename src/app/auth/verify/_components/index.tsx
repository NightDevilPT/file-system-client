"use client";

import React, { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { ApiStatusEnum } from "@/interface/interface";
import FSLogoFrame from "@/components/ui/FS-Logo";
import icons, { IconType } from "@/utils/icons";
import { Divider } from "@nextui-org/divider";
import { verifyUser } from "@/redux/verify/thunk";
import { resetVerifyState } from "@/redux/verify/slice";

const VerifyPage = () => {
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
	}, [status, responseMessage, error, router]);

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
						<div className="text-success">{icons(IconType.SUCCESS)}</div>
						<span>{responseMessage || "Verified successfully!"}</span>
					</div>
				)}
				{status === ApiStatusEnum.FAILED && (
					<div className="bg-background flex justify-center items-center gap-3">
						<div className="text-warning">{icons(IconType.WARNING)}</div>
						<span>{error || "Invalid Token"}</span>
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

// ✅ Wrap VerifyPage with Suspense
const VerifyPageWithSuspense = () => (
	<Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
		<VerifyPage />
	</Suspense>
);

export default VerifyPageWithSuspense;
