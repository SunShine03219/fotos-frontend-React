import React, {useCallback, useState} from 'react'

import { AiOutlineUser, AiOutlineFile, AiOutlineFolder } from "react-icons/ai";


import { useUsers } from "../../../context/usersContext";
import { TableModals } from "../../Modals/TableModals"
import {TableActionButtons} from "../TableActionButtons";

export function PictureRow({ id, item, rowTitle, onFolderClick, tableName}) {
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
            setShowDeleteModal(false);
        },
        [deleteU, setShowDeleteModal]
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
            if (!hasFileExtension(item.title)) {
                onFolderClick(item)
            }
        },
        [onFolderClick]
    );

    function hasFileExtension(str) {
        // The regular expression pattern matches a string that contains a period (.) followed by one or more word characters at the end of the string
        const regex = /\.\w+$/;
        return regex.test(str);
    }

    return (
        <tr key={id} className=" border border-border_gray">
            <td className="flex cursor-pointer items-center gap-2 py-4 px-2" onClick={() => handleRowClick(item)}>
                {tableName === 'Users' ? <AiOutlineUser /> : hasFileExtension(item.title) ? <AiOutlineFile/> : <AiOutlineFolder/>}
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
