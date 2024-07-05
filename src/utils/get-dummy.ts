import { FileFolder, File, Folder, FileTypeEnum, PrivateEnum, Breadcrumb } from "@/interface/interface";

function generateDummyData(count: number): FileFolder[] {
    const privateEnumValues: PrivateEnum[] = ["PUBLIC", "PRIVATE"];
    const fileTypeEnumValues: FileTypeEnum[] = [
        FileTypeEnum.IMAGE, 
        FileTypeEnum.DOCUMENT, 
        FileTypeEnum.VIDEO, 
        FileTypeEnum.OTHER
    ];

    const getRandomEnumValue = <T>(enumValues: T[]): T =>
        enumValues[Math.floor(Math.random() * enumValues.length)];

    const generateFolders = (count: number): Folder[] =>
        Array.from({ length: count }, (_, i) => ({
            id: `folder-${i + 1}`,
            name: `Folder ${i + 1}`,
            type: "FOLDER",
            isTrash: Math.random() < 0.5,
            isAccessable: getRandomEnumValue(privateEnumValues),
            userIds: [`user${i + 1}`],
            shareToken: null,
            breadcrumb: [{ name: "Root Folder", id: "root" }] as Breadcrumb[],
            createdBy: `user${i + 1}`,
            resourceId: null,
            createdAt: new Date(),
            updatedAt: new Date(),
        }));

    const generateFiles = (count: number): File[] =>
        Array.from({ length: count }, (_, i) => ({
            id: `file-${i + 1}`,
            name: `File ${i + 1}`,
            size: Math.floor(Math.random() * 10000),
            data: `data for file${i + 1}`,
            fileType: getRandomEnumValue(fileTypeEnumValues),
            type: "FILE",
            isTrash: Math.random() < 0.5,
            isAccessable: getRandomEnumValue(privateEnumValues),
            shareToken: null,
            userIds: [`user${i + 1}`],
            resourceId: `resource${i + 1}`,
            breadcrumb: [{ name: "Root Folder", id: "root" }] as Breadcrumb[],
            createdBy: `user${i + 1}`,
            createdAt: new Date(),
            updatedAt: new Date(),
        }));

    const halfCount = Math.floor(count / 2);
    return [...generateFolders(halfCount), ...generateFiles(halfCount)];
}

export default generateDummyData;
