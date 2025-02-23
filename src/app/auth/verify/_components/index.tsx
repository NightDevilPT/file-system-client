"use client";

import { Divider } from "@nextui-org/divider";
import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";

import icons, { IconType } from "@/utils/icons";
import FSLogoFrame from "@/components/ui/FS-Logo";
import { ApiStatusEnum } from "@/interface/interface";
import { AppDispatch, RootState } from "@/redux/store";

const VerifyPage = () => {
	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();
	const params = useSearchParams();

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
						<span>{"Verified Successfully"}</span>{" "}
						{/* ✅ Show API success message */}
					</div>
				)}
				{status === ApiStatusEnum.FAILED && (
					<div className="bg-background flex justify-center items-center gap-3">
						<div className="text-warning">
							{icons(IconType.WARNING)}
						</div>
						<span>
							{"Verification failed. Please try again."}
						</span>{" "}
						{/* ✅ Show API error */}
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

const VerifyPageWithSuspense = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<VerifyPage />
	</Suspense>
);

export default VerifyPageWithSuspense;
