import React, {useCallback, useState} from 'react'

import { AiOutlineUser, AiOutlineFile, AiOutlineFolder } from "react-icons/ai"

import { useUsers } from "../../../context/usersContext"
import { TableModals } from "../../Modals/TableModals"
import { TableActionButtons } from "../TableActionButtons"
import { useFiles } from "../../../context/filesContext"
import { formatText, hasFileExtension } from "../../../utils/helpers"

export function PictureRow({ id, item, index, rowTitle, onFolderClick, tableName, currentPage, onAlert}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showEditUserModal, setShowEditUserModal] = useState(false)
    const [titleToDelete, setTitleToDelete] = useState('')

    const { deleteU } = useUsers()
    const { deleteFile, folderPath, download } = useFiles()


    const handleDeleteClick = useCallback(
        (title) => {
            setTitleToDelete(title)
            setShowDeleteModal(true)
        },
        [setTitleToDelete, setShowDeleteModal]
    )

    const handleConfirmDelete = useCallback(
        (id) => {
            deleteU(id)
            setShowDeleteModal(false)
        },
        [deleteU, setShowDeleteModal]
    )

    const handleConfirmDeleteFile = useCallback(
        async () => {
            let url = folderPath.reduce((acc, folder) => acc + '/' + folder.title, '')

            const encodedTitle = titleToDelete.replace(/ /g, '%')

            url += '/' + encodedTitle

            const response = await deleteFile(url)
            setShowDeleteModal(false)
            //TODO: MODAL TÁ HARDCODED SUCESS
            onAlert(response, "success");
        },
        [deleteFile, setShowDeleteModal, folderPath, titleToDelete]
    )




    const handleEditClick = useCallback(
        (title) => {
            setTitleToDelete(title)
            setShowEditUserModal(true)
        },
        [setTitleToDelete, setShowEditUserModal]
    )
    const handleConfirmEdit = () => {
        //TODO
        setShowEditUserModal(false)
    }

    const handleRowClick = useCallback(
        (item) => {
            if (item?.title && !hasFileExtension(item.title)) {
                onFolderClick(item)
            }
        },
        [onFolderClick]
    )

    const handleDownloadClick = useCallback(
        async (item) => {

            let url = folderPath.reduce((acc, folder) => acc + '/' + folder.title, '')

            const encodedTitle = item.title.replace(/ /g, '%')
            url += '/' + encodedTitle

            const response = await download(url)

            if (response.error) {
                onAlert(response.error, "error")
            } else {
                onAlert(response.success, "success")
            }
        },
        [folderPath, download]
    );

    return (
        <tr key={id} className=" border border-border_gray">
            <td
                className="flex cursor-pointer items-center gap-2 py-4 px-2"
                onClick={() => handleRowClick(item)}
            >
                {tableName === 'Users' ?
                    <AiOutlineUser
                        style={{ color: index === 0 && currentPage === 1 ? 'blue' : 'inherit' }}
                    />
                    : hasFileExtension(item.title) ?
                        <AiOutlineFile/> : <AiOutlineFolder/>
                }
                {formatText(item.title ? item.title : item.name, 40)}
            </td>
            {
                !(tableName === "Users" && index === 0 && currentPage === 1) && (
                    <TableActionButtons
                        rowTitle={rowTitle}
                        item={item}
                        onEditClick={handleEditClick}
                        onDeleteClick={handleDeleteClick}
                        onDownloadClick={() => handleDownloadClick(item)}
                    />
                )
            }
            <TableModals
                showDeleteModal={showDeleteModal}
                showEditUserModal={showEditUserModal}
                titleToDelete={titleToDelete}
                userData={item}
                onConfirmDelete={() => tableName === 'Users' ? handleConfirmDelete(item.id) : handleConfirmDeleteFile()}
                onCancelDelete={() => setShowDeleteModal(false)}
                onConfirmEdit={handleConfirmEdit}
                onCancelEdit={() => setShowEditUserModal(false)}
            />
        </tr>
    )
}
