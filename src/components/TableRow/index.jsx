import React, { useState } from 'react'

import { AiOutlineCloudDownload, AiOutlineEdit, AiOutlineDelete, AiOutlineUser, AiOutlineFile, AiOutlineFolder } from "react-icons/ai";

import { DeleteModal } from '../DeleteModal'
import { EditModal } from '../EditModal'


export function PictureRow({ id, item, rowTitle, onFolderClick, tableName}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditUserModal, setShowEditUserModal] = useState(false);
    const [titleToDelete, setTitleToDelete] = useState('');

    const handleDeleteClick = (title) => {
        setTitleToDelete(title);
        setShowDeleteModal(true);
    }
    const handleConfirmDelete = () => {
        // TODO
        setShowDeleteModal(false);
    }
    const handleCancelDelete = () => {
        setShowDeleteModal(false);
    }



    const handleEditClick = (title) => {
        setTitleToDelete(title)
        setShowEditUserModal(true)
    }
    const handleConfirmEdit = () => {
        //TODO
        setShowEditUserModal(false)
    }
    const handleCancelEdit = () => {
        setShowEditUserModal(false)
    }

    const handleRowClick = (item) => {
        if( item.type === "folder"){
           onFolderClick(item)
        }
    }


    return (
        <tr key={id} className=" border border-border_gray">
            <td className="flex cursor-pointer items-center gap-2 py-4 px-2" onClick={() => handleRowClick(item)}>
                {tableName === 'Users' ? <AiOutlineUser /> : item.type !== "folder" ? <AiOutlineFile/> : <AiOutlineFolder/>}
                {item.title ? item.title : item.name}
            </td>
            <td className="py-2 px-2">
                {rowTitle === 'Download' ?
                    <AiOutlineCloudDownload size="1.5em" className="mx-auto"/>
                    :
                    <AiOutlineEdit
                        size="1.5em"
                        className="mx-auto cursor-pointer"
                        onClick={() => handleEditClick(item.name)}
                    />
                }
            </td>
            <td className="py-2 px-2">
                <AiOutlineDelete size="1.5em" className="mx-auto cursor-pointer hover:text-red-500" onClick={() => handleDeleteClick(item.title ? item.title : item.name)}/>
            </td>
            {showDeleteModal &&
                <td>
                    <DeleteModal title={titleToDelete} onDelete={handleConfirmDelete} onCancel={handleCancelDelete}/>
                </td>
            }
            {showEditUserModal &&
                <td>
                    <EditModal title={titleToDelete} onDelete={handleConfirmEdit} onCancel={handleCancelEdit}/>
                </td>
            }
        </tr>
    );
}
