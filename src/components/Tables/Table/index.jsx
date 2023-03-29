    import React from 'react'
    import { PictureRow } from '../TableRow'

    export function Table({ data, action, onFolderClickTable, tableName, currentPage }) {


    const handleFolderClick = async (item) => {
        onFolderClickTable(item)
    }

    return (
        <table className="table-fixed w-full">
            <thead>
            <tr>
                <th className="w-[90%] py-2"></th>
                <th className="w-[5%] py-2"></th>
                <th className="w-[5%] py-2"></th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
               <PictureRow
                   key={item.title ? item.title : item.id}
                   item={item}
                   index={index}
                   currentPage={currentPage}
                   rowTitle={action}
                   onFolderClick={handleFolderClick}
                   tableName={tableName}
               />
            ))}
            </tbody>
        </table>

    );
}