import React, {useState} from 'react'
import { PictureRow } from '../TableRow'
import { useAlertModal } from "../../../hooks/useAlertModal"
import { AlertModal } from "../../Modals/AlertModal"


    export function Table({ data, action, onFolderClickTable, tableName, currentPage }) {

        const {
            showModal,
            setShowModal,
            setMessage,
            setType,
            message,
            type,
        } = useAlertModal()


        const handleAlert = (message, type) => {
            setMessage(message)
            setType(type)
            setShowModal(true)
            setTimeout(() => setShowModal(false), 1500)
        }

    const handleFolderClick = async (item) => {
        onFolderClickTable(item)
    }

    return (
        <>
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
                        onAlert={handleAlert}
                    />
                ))}
                </tbody>
            </table>
            {showModal && (
                <AlertModal
                    message={message}
                    type={type}
                />
            )}
        </>

    )
}