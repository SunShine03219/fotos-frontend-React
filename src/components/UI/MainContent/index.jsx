import {useEffect, useMemo, useState} from "react";

import { PaginationTable } from '../Pagination'
import { SearchBar } from '../SearchBar'
import { Breadcrumb } from "../BreadCrumb";
import { useTableData } from '../../../utils/useTableData'
import { MainActionButtons } from "../MainActionButtons";


export function MainContent({ tableName, onUserUpdate  }) {
    const [data, setData] = useState([])

    const { rowAction, mockedData, buttonTitle, buttonLink } = useTableData(tableName);

    useEffect(() => {
        setData(mockedData);
    }, [mockedData]);

    const [searchTerm, setSearchTerm] = useState("")
    const [folderPath, setFolderPath] = useState([])

    const filteredData = useMemo(
        () =>
            data.filter((item) =>
                (item.title?.toLowerCase() ?? item.name?.toLowerCase() ?? "").includes(searchTerm.toLowerCase())
            ),
        [data, searchTerm]
    )


    const handleDataUpdate = (updatedData) => {
        setData(updatedData.content)
        const alreadyInPath = folderPath.some((folder) => folder.id === updatedData.id)
        if (!alreadyInPath) {
            const newFolderPath = [...folderPath, updatedData]
            setFolderPath(newFolderPath)
        }
    };

    const handleDataUpdateBreadCrumb = (updatedData) => {
        setData(updatedData.content);
        const clickedIndex = folderPath.findIndex((folder) => folder.id === updatedData.id);
        if (clickedIndex === -1) {
            return;
        }
        const newFolderPath = folderPath.slice(0, clickedIndex + 1);
        setFolderPath(newFolderPath)
    }

    const onReset = () => {
        setFolderPath([])
        setData(mockedData)
    }

    return (
        <div className="w-full flex flex-col flex-1 h-full">
            <div className="flex justify-between">
                <h2 className="text-lg font-medium mb-4">{tableName}</h2>
                <MainActionButtons tableName={tableName} buttonLink={buttonLink} buttonTitle={buttonTitle} />
            </div>
            <SearchBar onValueChange={setSearchTerm} />
            {tableName !== 'Users' && <Breadcrumb
                folder={folderPath}
                onFolderSelect={handleDataUpdateBreadCrumb}
                onReset={onReset}
            />}
            <PaginationTable
                data={filteredData}
                action={rowAction}
                itemsPerPage={3}
                onDataUpdate={handleDataUpdate}
                tableName={tableName}
                onUserUpdate={onUserUpdate}
            />
        </div>
    )
}

