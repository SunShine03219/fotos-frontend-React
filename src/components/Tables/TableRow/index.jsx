import React, {useCallback, useState} from 'react'

import { AiOutlineUser, AiOutlineFile, AiOutlineFolder } from "react-icons/ai";


import { useUsers } from "../../../context/usersContext";
import { TableModals } from "../../Modals/TableModals"
import {TableActionButtons} from "../TableActionButtons";

export function PictureRow({ id, item, rowTitle, onFolderClick, tableName, onUserUpdate}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditUserModal, setShowEditUserModal] = useState(false);
    const [titleToDelete, setTitleToDelete] = useState('');

    const { deleteU } = useUsers()

    const handleDeleteClick = useCallback(
        (title) => {
            setTitleToDelete(title);
            setShowDeleteModal(true);
        },
        [setTitleToDelete, setShowDeleteModal]
    );

    const handleConfirmDelete = useCallback(
        (id) => {
            deleteU(id);
            onUserUpdate();
            setShowDeleteModal(false);
        },
        [deleteU, onUserUpdate, setShowDeleteModal]
    );

    const handleCancelDelete = () => {
        setShowDeleteModal(false);
    }



    const handleEditClick = useCallback(
        (title) => {
            setTitleToDelete(title);
            setShowEditUserModal(true);
        },
        [setTitleToDelete, setShowEditUserModal]
    );
    const handleConfirmEdit = () => {
        //TODO
        setShowEditUserModal(false)
    }
    const handleCancelEdit = () => {
        setShowEditUserModal(false)
    }

    const handleRowClick = useCallback(
        (item) => {
            if (item.type === "folder") {
                onFolderClick(item);
            }
        },
        [onFolderClick]
    );


    return (
        <tr key={id} className=" border border-border_gray">
            <td className="flex cursor-pointer items-center gap-2 py-4 px-2" onClick={() => handleRowClick(item)}>
                {tableName === 'Users' ? <AiOutlineUser /> : item.type !== "folder" ? <AiOutlineFile/> : <AiOutlineFolder/>}
                {item.title ? item.title : item.name}
            </td>
            <TableActionButtons
                rowTitle={rowTitle}
                item={item}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
            />
            <TableModals
                showDeleteModal={showDeleteModal}
                showEditUserModal={showEditUserModal}
                titleToDelete={titleToDelete}
                userData={item}
                onConfirmDelete={() => handleConfirmDelete(item.id)}
                onCancelDelete={handleCancelDelete}
                onConfirmEdit={handleConfirmEdit}
                onCancelEdit={handleCancelEdit}
            />
        </tr>
    );
}
