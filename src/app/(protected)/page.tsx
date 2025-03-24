"use client";

import FSDashboard from "@/app/_components/FS-Dashboard";
import useInitializeAuth from "@/hooks/useInitialAuth";

export default function Home() {
  useInitializeAuth();
  return (
    <div className={`font-rubik flex-1 w-full h-[90vh] overflow-x-hidden rounded-md overflow-y-auto`}>
      <FSDashboard />
    </div>
  );
}
