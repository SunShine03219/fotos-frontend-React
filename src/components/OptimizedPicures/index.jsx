import { useState } from "react";

import { SearchBar } from '../SearchBar'
import {PaginationTable} from "../Pagination";

const data = [
    {
        id: 1,
        title: "optimized_filename_a.jpg",
        type: "file",
        size: "2.1 MB",
        date: "2022-03-16",
    },
    {
        id: 2,
        title: "optimized_filename_b.jpg",
        type: "file",
        size: "1.8 MB",
        date: "2022-03-15",
    },
    {
        id: 3,
        title: "optimized_filename_b.jpg",
        type: "file",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 4,
        title: "optimized_filename_b.jpg",
        type: "file",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 5,
        title: "optimized_filename_b.jpg",
        type: "file",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 6,
        title: "optimized_filename_b.jpg",
        type: "file",
        size: "3.2 MB",
        date: "2022-03-14",
    }
];
const originalPicturesRowAction = 'Download'


export function OptimizedPictures ({ tableName })  {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full">
            <h2 className="text-lg font-medium mb-4">{tableName}</h2>
            <SearchBar onValueChange={setSearchTerm} />
            <PaginationTable data={filteredData} action={originalPicturesRowAction} itemsPerPage={3} />
        </div>
    )
}

