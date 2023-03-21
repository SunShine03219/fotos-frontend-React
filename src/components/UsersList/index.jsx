import { useState } from "react";

import { SearchBar } from '../SearchBar'
import {PaginationTable} from "../Pagination";
import {MainButton} from "../MainButton";

import { Link } from "react-router-dom";

const mockedData = [
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
    const [data, setData] = useState(mockedData);


    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDataUpdate = (updatedData) => {
        setData(updatedData);
    };

    return (
        <div className="w-full flex flex-col flex-1 h-full">
            <div className="flex justify-between">
                <SearchBar onValueChange={setSearchTerm} />
                <Link to='/add-user'>
                    <MainButton title="Add User"/>
                </Link>
            </div>
            <PaginationTable
                data={filteredData}
                action={usersListRowAction}
                itemsPerPage={3}
                onDataUpdate={handleDataUpdate}
                tableName={tableName}
            />
        </div>
    )
}

