import React, { useState} from "react";
import { Table } from "../Table";

export function PaginationTable({ data, action, itemsPerPage, onDataUpdate, tableName }) {
    const [currentPage, setCurrentPage] = useState(1);

    const maxPages = Math.ceil(data.length / itemsPerPage);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentItems = data.slice(startIdx, endIdx);

    let buttonsToShow = [];
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (i > 0 && i <= maxPages) {
            buttonsToShow.push(i);
        }
    }

    const handleFolderClick = async (item) => {
        onDataUpdate(item);
        setCurrentPage(1);
    };


    return (
        <div className="flex flex-1 flex-col h-full">
            <Table
                data={currentItems}
                action={action}
                onFolderClickTable={handleFolderClick}
                tableName={tableName}
            />
            <div className="flex justify-center items-center mt-auto">
                {currentPage > 1 && (
                    <button
                        className="mx-2 bg-gray-200 hover:bg-primary_dark hover:text-white py-1 px-3 rounded-full"
                        onClick={() => handleClick(currentPage - 1)}
                    >
                        Prev
                    </button>
                )}
                {buttonsToShow.map((i) => (
                    <button
                        key={i}
                        className={`mx-2 ${
                            currentPage === i ? 'text-white bg-primary' : 'bg-gray-200'
                        } hover:bg-primary_dark hover:text-white py-1 px-3 rounded-full`}
                        onClick={() => handleClick(i)}
                    >
                        {i}
                    </button>
                ))}
                {currentPage < maxPages && (
                    <button
                        className="mx-2 bg-gray-200 hover:bg-primary_dark hover:text-white py-1 px-3 rounded-full"
                        onClick={() => handleClick(currentPage + 1)}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}