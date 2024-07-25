import FSFolderFileLayout from "@/components/ui/FS-Folder-File-Layout";
import FSRecentActivity from "@/components/ui/FS-RecentActivity";
import { sampleHistoryData } from "@/utils/history-dummy.data";

export default function Home() {
  return (
    <div className={`font-rubik flex-1 w-full h-[90vh] overflow-y-auto`}>
      <FSRecentActivity data={sampleHistoryData} />
    </div>
  );
}
