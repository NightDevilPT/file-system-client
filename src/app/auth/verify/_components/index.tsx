'use client'

import FSLogoFrame from "@/components/ui/FS-Logo";
import { AppDispatch, RootState } from "@/redux/store";
import { verifyUser } from "@/redux/verify/thunk";
import icons, { IconType } from "@/utils/icons";
import { Divider } from "@nextui-org/divider";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const VerifyPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const params = useSearchParams();

  const { status, message, error } = useSelector(
    (state: RootState) => state.verify
  );

  useEffect(() => {
    const token = params.get("token");
    if (token) {
      dispatch(verifyUser(token as string));
    }
  }, [params, dispatch]);

  useEffect(() => {
    if (status === "succeeded") {
      router.push('/auth/login');
    }
  }, [status, router]);

  return (
    <React.Fragment>
      <div className={`w-full h-auto flex justify-center items-center`}>
        <FSLogoFrame />
      </div>
      <Divider className={`mt-1`} />
      <div className="w-full h-auto my-5 flex justify-center items-center flex-col gap-2">
        {status === "loading" && (
          <div className="bg-background flex justify-center items-center gap-3">
            <span className=" min-w-5 min-h-5 rounded-full animate-spin border-4 border-primary-200 border-t-primary"></span>
            <span>Verifying...</span>
          </div>
        )}
        {status === "succeeded" && (
          <div className="bg-background flex justify-center items-center gap-3">
            <div className="text-success">
              {icons(IconType.SUCCESS)}
            </div>
            <span>Verified</span>
          </div>
        )}
        {status === "failed" && (
          <div className="bg-background flex justify-center items-center gap-3">
            <div className="text-warning">
              {icons(IconType.WARNING)}
            </div>
            <span>Invalid Token</span>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default VerifyPage;
