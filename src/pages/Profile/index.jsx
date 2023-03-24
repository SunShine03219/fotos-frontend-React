import { useState } from 'react';

import { Header } from "../../components/UI/Header";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData";
import { ProfileForm } from "../../components/Forms/ProfileForm";
import {MainButton} from "../../components/UI/MainButton";


export function ProfilePage() {

    const {
        userName,
        userEmail,
        initialUserName,
        initialUserEmail,
        updateUser,
    } = useUserData();
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (field, value) => {
        updateUser(field, value)
    };

    const handleSaveClick = () => {
        setIsEditing(false)
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        updateUser('userName', initialUserName)
        updateUser('userEmail', initialUserEmail)
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
                            userName={userName}
                            userEmail={userEmail}
                            onChange={handleInputChange}
                            onSave={handleSaveClick}
                            onCancel={handleCancelClick}
                        />
                    ) : (
                        //Should be another component here
                        <>
                            <div className="mb-4">{userName}</div>
                            <div className="mb-4">{userEmail}</div>
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
