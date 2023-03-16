import { useState } from "react";

import { SearchBar } from '../SearchBar'
import {PaginationTable} from "../Pagination";

const data = [
    {
        id: 1,
        name: "User 1",
    },
    {
        id: 2,
        name: "User 2",
    },
    {
        id: 3,
        name: "User 3",
    }, {
        id: 4,
        name: "User 4",
    },
    {
        id: 5,
        name: "User 5",
    },
    {
        id: 6,
        name: "User 6",
    },

];
const usersListRowAction = 'Edit'

export function UsersList ({ tableName })  {
    const [searchTerm, setSearchTerm] = useState("");


    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full">
            <h2 className="text-lg font-medium mb-4">{tableName}</h2>
            <SearchBar onValueChange={setSearchTerm} />
            <PaginationTable data={filteredData} action={usersListRowAction} itemsPerPage={3} />
        </div>
    )
}

