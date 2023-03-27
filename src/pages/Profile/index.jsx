import {useEffect, useState} from 'react'

import { Header } from "../../components/UI/Header"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Link } from "react-router-dom"
import { ProfileForm } from "../../components/Forms/ProfileForm"
import { MainButton } from "../../components/UI/MainButton"
import { AlertModal } from '../../components/Modals/AlertModal'

import { useUsers } from "../../context/usersContext"
import { useAuth } from "../../hooks/auth";


export function ProfilePage() {

    const { currentUser, updateUser } = useUsers()
    const { signOut } = useAuth()

    const userName = currentUser.name
    const userEmail = currentUser.email

    const [isEditing, setIsEditing] = useState(false)
    const [newUserName, setNewUserName] = useState(userName)
    const [newUserEmail, setNewUserEmail] = useState(userEmail)
    const [isChangingPassword, setIsChangingPassword] = useState(false)
    const [newPassword, setNewPassword] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')

    const [showModal, setShowModal] = useState(false)
    const [modalmessage, setModalmessage] = useState('')
    const [modalType, setModalType] = useState('')

    useEffect(() => {
        setNewUserName(userName)
        setNewUserEmail(userEmail)
    }, [userName, userEmail])

    const handleInputChange = (field, value) => {
        if (field === 'userName') {
            setNewUserName(value)
        } else if (field === 'userEmail') {
            setNewUserEmail(value)
        } else if (field === 'newPassword') {
            setNewPassword(value)
        } else if (field === 'currentPassword') {
            setCurrentPassword(value)
        }
    }

    const handleSaveClick = async () => {
        const response = await updateUser(
            currentUser.id ,
            newUserName,
            newUserEmail,
            isChangingPassword ? currentPassword : undefined,
            isChangingPassword ? newPassword : undefined
        )

        if (response.error) {
            console.log(response)
            setShowModal(true)
            setModalmessage(response.error)
            setModalType('error')
            setTimeout(() => setShowModal(false), 1500)
        } else if (response.success) {
            setShowModal(true)
            setModalmessage(response.success)
            setModalType('success')
            setTimeout(() => {
                signOut()
            }, 2500)
        } else {
            setShowModal(true)
            setModalmessage('Update User!')
            setModalType('success')
            setTimeout(() => {
                setShowModal(false)
                setIsEditing(false)
            }, 1500)
        }
    }

    const handleCancelClick = () => {
        setIsEditing(false);
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Header name={userName} />
            <div className="flex justify-center items-center py-12">
                <div className="bg-white rounded-lg p-10 w-1/2">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-medium mb-4">My Profile</h2>
                        <Link to="/">
                            <AiOutlineArrowRight size="1.5em" />
                        </Link>
                    </div>
                    {isEditing ? (
                        <ProfileForm
                            userName={newUserName}
                            userEmail={newUserEmail}
                            isChangingPassword={isChangingPassword}
                            setIsChangingPassword={setIsChangingPassword}
                            newPassword={newPassword}
                            currentPassword={currentPassword}
                            onChange={handleInputChange}
                            onSave={handleSaveClick}
                            onCancel={handleCancelClick}
                        />
                    ) : (
                        //Should be another component here
                        <>
                            <div className="mb-4">Name: {userName}</div>
                            <div className="mb-4">Email: {userEmail}</div>
                            <div className="flex justify-end">
                                <MainButton title="Edit" onClick={() => setIsEditing(true)} />
                            </div>
                        </>
                    )}
                </div>
            </div>
            { showModal && <AlertModal message={modalmessage} type={modalType} />}
        </div>
    )
}
