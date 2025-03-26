"use client";

import FSDashboard from "@/app/_components/FS-Dashboard";

export default function Home() {
  return (
    <div className={`font-rubik flex-1 w-full h-[90vh] overflow-x-hidden rounded-md overflow-y-auto`}>
      <FSDashboard />
    </div>
  );
}
