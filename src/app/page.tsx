import FSDashboard from "@/app/_components/FS-Dashboard";
import FSFolderFileLayout from "@/components/ui/FS-Folder-File-Layout";

export default function Home() {
  return (
    <div className={`font-rubik flex-1 w-full h-auto`}>
      {/* <h1 className={`w-full h-auto text-left text-2xl font-sans`}>Dashboard</h1> */}
      <FSFolderFileLayout title={'Folders'} />
    </div>
  );
}
