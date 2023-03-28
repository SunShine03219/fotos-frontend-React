import React, {useEffect, useState} from 'react'

import { MainButton } from "../../UI/MainButton"
import { ProfileForm } from "../../Forms/ProfileForm"

import { useUsers } from "../../../context/usersContext";
import { AlertModal } from "../AlertModal";

export function EditModal({ userData , onCancel }) {

    const { adminUpdateUser } = useUsers()

    const [name, setName] = useState(userData.name)
    const [email, setEmail] = useState(userData.email)

    const [isEditing, setIsEditing] = useState(false)
    const [newUserName, setNewUserName] = useState(name)
    const [newUserEmail, setNewUserEmail] = useState(email)
    const [isChangingPassword, setIsChangingPassword] = useState(false)
    const [newPassword, setNewPassword] = useState('')

    const [showModal, setShowModal] = useState(false)
    const [modalmessage, setModalmessage] = useState('')
    const [modalType, setModalType] = useState('')


    useEffect(() => {
        setName(userData.name)
        setEmail(userData.email)
    }, [name, email])

    useEffect(() => {
        setName(userData.name)
        setEmail(userData.email)
    }, [userData])

    const handleInputChange = (field, value) => {
        if (field === 'userName') {
            setNewUserName(value)
        } else if (field === 'userEmail') {
            setNewUserEmail(value)
        } else if (field === 'newPassword') {
            setNewPassword(value)
        }
    }

    const handleSaveClick = async () => {
        const response = await adminUpdateUser(
            userData.id ,
            newUserName,
            newUserEmail,
            isChangingPassword ? newPassword : undefined
        )
        if (response.error) {
            setShowModal(true)
            setModalmessage(response.error)
            setModalType('error')
            setTimeout(() => setShowModal(false), 1500)
        } else {
            setShowModal(true)
            setModalmessage('User Updated!')
            setModalType('success')
            setTimeout(() => {
                setShowModal(false)
                setIsEditing(false)
            }, 2500)
        }
    }

    const handleCancelClick = () => {
        setIsEditing(false);
    }

    return (
        <>
            <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-gray-800 bg-opacity-50">
                <div className="bg-white w-2/3 rounded-lg p-4">
                    <p className="text-xl font-medium mb-4">Editing User Info</p>
                    <form action="src/components/Modals/EditModal/index">
                        {isEditing ? (
                            <ProfileForm
                                userName={newUserName}
                                userEmail={newUserEmail}
                                isChangingPassword={isChangingPassword}
                                setIsChangingPassword={setIsChangingPassword}
                                newPassword={newPassword}
                                onChange={handleInputChange}
                                onSave={handleSaveClick}
                                onCancel={handleCancelClick}
                                isAdminEditing
                            />
                        ) : (
                            <>
                                <div className="mb-4">Name: {name}</div>
                                <div className="mb-4">Email: {email}</div>
                                <div className="flex justify-end gap-2">
                                    <MainButton title="Edit" onClick={() => setIsEditing(true)} />
                                    <MainButton title="Cancel" cancel onClick={onCancel} />
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
            { showModal && <AlertModal message={modalmessage} type={modalType} />}
        </>
    )
}