import React, {useCallback, useState} from "react";

import { Table } from "../../Tables/Table";
import { PrevNextButtons } from "../PrevNextButtons";
import { PaginationButtons } from "../PaginationButtons";

export function PaginationTable({ data, action, itemsPerPage, onDataUpdate, tableName, onUserUpdate }) {
    const [currentPage, setCurrentPage] = useState(1);

    const maxPages = Math.ceil(data.length / itemsPerPage);

    const handleClick = useCallback(
        (page) => {
            setCurrentPage(page);
        },
        [setCurrentPage]
    );

    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentItems = data.slice(startIdx, endIdx);

    const handleFolderClick = useCallback(
        async (item) => {
            onDataUpdate(item);
            setCurrentPage(1);
        },
        [onDataUpdate]
    )

    return (
        <div className="flex flex-1 flex-col h-full">
            <Table
                data={currentItems}
                action={action}
                onFolderClickTable={handleFolderClick}
                tableName={tableName}
                onUserUpdate={onUserUpdate}
            />
            <div className="flex justify-center items-center mt-auto">
                <PrevNextButtons currentPage={currentPage} maxPages={maxPages} onPageChange={handleClick} />
                <PaginationButtons currentPage={currentPage} maxPages={maxPages} onPageChange={handleClick} />
            </div>
        </div>
    );
}