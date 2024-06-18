import FSDashboard from "@/app/_components/FS-Dashboard";

export default function Home() {
  return (
    <div className={`font-rubik flex-1 w-full h-auto py-5`}>
      <h1 className={`w-full h-auto text-left text-2xl font-sans`}>Dashboard</h1>
      <FSDashboard />
    </div>
  );
}
