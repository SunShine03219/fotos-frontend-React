import { useState } from "react";

import { PaginationTable } from '../Pagination'
import { SearchBar } from '../SearchBar'
import { MainButton } from '../MainButton'

import { Link } from "react-router-dom";

const data = [
    {
        id: 1,
        title: "filename_a.jpg",
        size: "2.1 MB",
        date: "2022-03-16",
    },
    {
        id: 2,
        title: "filename_b.jpg",
        size: "1.8 MB",
        date: "2022-03-15",
    },
    {
        id: 3,
        title: "filename_c.jpg",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 4,
        title: "filename_d.jpg",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 5,
        title: "filename_e.jpg",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 6,
        title: "filename_f.jpg",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 7,
        title: "filename_g.jpg",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 8,
        title: "filename_h.jpg",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 9,
        title: "filename_i.jpg",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 10,
        title: "filename_j.jpg",
        size: "3.2 MB",
        date: "2022-03-14",
    }
];
const originalPicturesRowAction = 'Download'

export function OriginalPictures ({ tableName })  {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full">
            <div className="flex justify-between">
                <h2 className="text-lg font-medium mb-4">{tableName}</h2>
                <Link to='/upload'>
                    <MainButton title="Upload Files"/>
                </Link>
            </div>
            <SearchBar onValueChange={setSearchTerm} />
            <PaginationTable data={filteredData} action={originalPicturesRowAction} itemsPerPage={3} />
        </div>
    )
}

