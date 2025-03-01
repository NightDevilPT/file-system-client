import FSFolderFileLayout from "@/components/ui/FS-Folder-File-Layout";

export default function Home() {
  return (
    <div className={`font-rubik flex-1 w-full h-[90vh] overflow-y-auto`}>
      <FSFolderFileLayout title="Folders & Files" />
    </div>
  );
}
