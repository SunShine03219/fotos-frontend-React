import React from 'react'

import { AiOutlineCloudDownload, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export function PictureRow({ id, item, rowTitle }) {
    return (
        <tr key={id}>
            <td className="border border-border_gray border-r-0 border-l-0 py-4 px-2">{item.title ? item.title : item.name}</td>
            <td className="border border-border_gray border-l-0 border-r-0 py-2 px-2">
                {rowTitle === 'Download' ? <AiOutlineCloudDownload size="1.5em" className="mx-auto"/> : <AiOutlineEdit size="1.5em" className="mx-auto"/> }
            </td>
            <td className="border border-border_gray border-l-0 border-r-0 py-2 px-2">
                <AiOutlineDelete size="1.5em" className="mx-auto"/>
            </td>
        </tr>
    );
}
