import { useState} from "react";

import { PaginationTable } from '../Pagination'
import { SearchBar } from '../SearchBar'
import { MainButton } from '../MainButton'
import { Breadcrumb } from "../BreadCrumb";

import { Link } from "react-router-dom";

const mockedData = [
    {
        id: 1,
        title: "filename_a.jpg",
        type: "file",
        size: "2.1 MB",
        date: "2022-03-16",
    },
    {
        id: 2,
        title: "folder_lvl1",
        type: "folder",
        size: "1.8 MB",
        date: "2022-03-15",
        content: [
            {
                id: 10,
                title: "filename_on_folder_a.jpg",
                type: "file",
                size: "2.1 MB",
                date: "2022-03-16",
            },
            {
                id: 11,
                title: "filename_on_folder_b.jpg",
                type: "file",
                size: "2.1 MB",
                date: "2022-03-16",
            },
            {
                id: 14,
                title: "folder_level2.jpg",
                type: "folder",
                size: "2.1 MB",
                date: "2022-03-16",
                content: [
                    {
                        id: 14,
                        title: "filename_on_folder_ccc.jpg",
                        type: "file",
                        size: "2.1 MB",
                        date: "2022-03-16",
                    },
                    {
                        id: 15,
                        title: "filename_on_folder_ccc.jpg",
                        type: "file",
                        size: "2.1 MB",
                        date: "2022-03-16",
                    },
                    {
                        id: 16,
                        title: "filename_on_folder_ccc.jpg",
                        type: "file",
                        size: "2.1 MB",
                        date: "2022-03-16",
                    },
                    {
                        id: 17,
                        title: "filename_on_folder_ccc.jpg",
                        type: "file",
                        size: "2.1 MB",
                        date: "2022-03-16",
                    },
                    {
                        id: 18,
                        title: "folder_lvl3.jpg",
                        type: "folder",
                        size: "2.1 MB",
                        date: "2022-03-16",
                        content: [{
                            id: 20,
                            title: "file_lvl3.jpg",
                            type: "file",
                            size: "2.1 MB",
                            date: "2022-03-16",
                        },
                            {
                                id: 23,
                                title: "file_lvl3.jpg",
                                type: "file",
                                size: "2.1 MB",
                                date: "2022-03-16"
                            }
                        ]
                    },
                ]
            },
        ]
    },
    {
        id: 3,
        title: "filename_c.jpg",
        type: "file",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 4,
        title: "filename_d.jpg",
        type: "file",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 5,
        title: "filename_e.jpg",
        type: "file",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 6,
        title: "filename_f.jpg",
        type: "file",
        size: "3.2 MB",
        date: "2022-03-14",
    }
];
const originalPicturesRowAction = 'Download'

export function OriginalPictures ({ tableName })  {
    const [searchTerm, setSearchTerm] = useState("")
    const [data, setData] = useState(mockedData)
    const [folderPath, setFolderPath] = useState([])

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDataUpdate = (updatedData) => {
        setData(updatedData.content);
        const alreadyInPath = folderPath.some((folder) => folder.id === updatedData.id);
        if (!alreadyInPath) {
            const newFolderPath = [...folderPath, updatedData];
            setFolderPath(newFolderPath);
        }
    };

    const handleDataUpdateBreadCrumb = (updatedData) => {
        setData(updatedData.content);
        const clickedIndex = folderPath.findIndex((folder) => folder.id === updatedData.id);
        if (clickedIndex === -1) {
            return;
        }
        const newFolderPath = folderPath.slice(0, clickedIndex + 1);
        setFolderPath(newFolderPath);
    }

    const onReset = () => {
        setFolderPath([])
        setData(mockedData)
    }


    return (
        <div className="w-full">
            <div className="flex justify-between">
                <h2 className="text-lg font-medium mb-4">{tableName}</h2>
                <Link to='/upload'>
                    <MainButton title="Upload Files"/>
                </Link>
            </div>
            <SearchBar onValueChange={setSearchTerm} />
            <Breadcrumb folder={folderPath} onFolderSelect={handleDataUpdateBreadCrumb} onReset={onReset}/>
            <PaginationTable
                data={filteredData}
                action={originalPicturesRowAction}
                itemsPerPage={3}
                onDataUpdate={handleDataUpdate}
                tableName={tableName}
            />
        </div>
    )
}

