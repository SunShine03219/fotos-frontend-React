import {useEffect, useState} from 'react';

import { Header } from "../../components/UI/Header";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProfileForm } from "../../components/Forms/ProfileForm";
import { MainButton } from "../../components/UI/MainButton";

import { useUsers } from "../../context/usersContext";


export function ProfilePage() {

    const { currentUser, updateUser } = useUsers()

    const userName = currentUser.name
    const userEmail = currentUser.email

    const [isEditing, setIsEditing] = useState(false)
    const [newUserName, setNewUserName] = useState(userName)
    const [newUserEmail, setNewUserEmail] = useState(userEmail)

    // Update the state variables when currentUser changes
    useEffect(() => {
        setNewUserName(userName)
        setNewUserEmail(userEmail)
    }, [userName, userEmail])

    // Update the state variables when input changes
    const handleInputChange = (field, value) => {
        if (field === 'userName') {
            setNewUserName(value)
        } else if (field === 'userEmail') {
            setNewUserEmail(value)
        }
    }

    const handleSaveClick = () => {
        updateUser(newUserName, newUserEmail)
        setIsEditing(false);
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
        </div>
    )
}
