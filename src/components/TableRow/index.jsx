import React, { useState } from 'react'

import { AiOutlineCloudDownload, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { DeleteModal } from '../DeleteModal'


export function PictureRow({ id, item, rowTitle }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [titleToDelete, setTitleToDelete] = useState('');

    const handleDeleteClick = (title) => {
        setTitleToDelete(title);
        setShowDeleteModal(true);
    }

    const handleConfirmDelete = () => {
        // Call your delete function here
        setShowDeleteModal(false);
    }

    const handleCancelDelete = () => {
        setShowDeleteModal(false);
    }
    return (
        <tr key={id}>
            <td className="border border-border_gray border-r-0 border-l-0 py-4 px-2">{item.title ? item.title : item.name}</td>
            <td className="border border-border_gray border-l-0 border-r-0 py-2 px-2">
                {rowTitle === 'Download' ? <AiOutlineCloudDownload size="1.5em" className="mx-auto"/> : <AiOutlineEdit size="1.5em" className="mx-auto" /> }
            </td>
            <td className="border border-border_gray border-l-0 border-r-0 py-2 px-2">
                <AiOutlineDelete size="1.5em" className="mx-auto cursor-pointer hover:text-red-500" onClick={() => handleDeleteClick(item.title ? item.title : item.name)}/>
            </td>
            {showDeleteModal && <DeleteModal title={titleToDelete} onDelete={handleConfirmDelete} onCancel={handleCancelDelete} />}
        </tr>
    );
}
