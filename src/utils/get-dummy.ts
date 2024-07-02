function generateDummyData(count: number) {
	const folderEnumValues = ["FOLDER", "FILE"];
	const privateEnumValues = ["PUBLIC", "PRIVATE"];
	const fileTypeEnumValues = ["IMAGE", "DOCUMENT", "VIDEO", "OTHER"];

	const getRandomEnumValue = (enumValues: any) =>
		enumValues[Math.floor(Math.random() * enumValues.length)];

	const generateFolders = (count: number) =>
		Array.from({ length: count }, (_, i) => ({
			id: `folder-${i + 1}`,
			name: `Folder ${i + 1}`,
			type: folderEnumValues[1],
			isTrash: Math.random() < 0.5,
			isAccessable: getRandomEnumValue(privateEnumValues),
			userIds: [`user${i + 1}`],
			shareToken: null,
			breadcrumb: [{ name: "Root Folder", id: "root" }],
			createdBy: `user${i + 1}`,
			resourceId: null,
			createdAt: new Date(),
			updatedAt: new Date(),
		}));

	const generateFiles = (count: number) =>
		Array.from({ length: count }, (_, i) => ({
			id: `file-${i + 1}`,
			name: `File ${i + 1}`,
			size: Math.floor(Math.random() * 10000),
			data: `data for file${i + 1}`,
			fileType: folderEnumValues[1],
			type: "FILE",
			isTrash: Math.random() < 0.5,
			isAccessable: getRandomEnumValue(privateEnumValues),
			shareToken: null,
			userIds: [`user${i + 1}`],
			resourceId: `resource${i + 1}`,
			breadcrumb: [{ name: "Root Folder", id: "root" }],
			createdBy: `user${i + 1}`,
			createdAt: new Date(),
			updatedAt: new Date(),
		}));

	return [...generateFolders(count), ...generateFiles(count)];
}

export default generateDummyData;
