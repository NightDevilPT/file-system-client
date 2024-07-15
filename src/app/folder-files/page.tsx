import FSDashboard from "@/app/_components/FS-Dashboard";
import FSFolderFileLayout from "@/components/ui/FS-Folder-File-Layout";
import { Divider } from "@nextui-org/divider";

export default function Home() {
  return (
    <div className={`font-rubik flex-1 w-full h-[90vh] overflow-y-auto`}>
      <FSFolderFileLayout title="Folders & Files" />
    </div>
  );
}
