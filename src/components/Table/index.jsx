import React, {useEffect, useState} from 'react'
import { PictureRow } from '../TableRow'

export function Table({ data, action, onFolderClick2, tableName }) {


    const handleFolderClick = async (item) => {
        onFolderClick2(item)
    }

    return (
        <table className="table-fixed w-full">
            <thead>
            <tr>
                <th className="w-4/5 py-2"></th>
                <th className="w-2/10 py-2"></th>
                <th className="w-1/10 py-2"></th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
               <PictureRow
                   key={item.id}
                   item={item}
                   rowTitle={action}
                   onFolderClick={handleFolderClick}
                   tableName={tableName}
               />
            ))}
            </tbody>
        </table>

    );
}