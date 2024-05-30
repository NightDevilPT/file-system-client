import React from "react";
import SearchInput from "./SearchInput";
import FileFolderLayout from "../FileFolderLayout";


export const FormData = [
    {
        name: 'New Folder 1',
        type: 'Folder',
        createdAt: '2023-01-15T12:34:56Z',
    },
    {
        name: 'New Folder 2',
        type: 'Folder',
        createdAt: '2023-02-20T09:23:45Z',
    },
    {
        name: 'New Folder 3',
        type: 'Folder',
        createdAt: '2023-03-12T15:45:30Z',
    },
    {
        name: 'New Folder 4',
        type: 'Folder',
        createdAt: '2023-04-08T11:11:11Z',
    },
    {
        name: 'New Folder 5',
        type: 'Folder',
        createdAt: '2023-05-25T14:30:00Z',
    },
    {
        name: 'New Folder 6',
        type: 'Folder',
        createdAt: '2023-06-10T10:20:30Z',
    },
];



const HomeFrame = () => {
	return (
		<div className={`w-full h-auto p-5 space-y-5`}>
			<SearchInput />
			<FileFolderLayout title={`Folders`} showLayout data={FormData} />
			<FileFolderLayout title={`Files`} showLayout />
		</div>
	);
};

export default HomeFrame;
