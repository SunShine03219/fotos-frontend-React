import { useState, useEffect } from 'react';

import {Header} from "../../components/Header";
import { InputField } from "../../components/InputFields"

import { AiOutlineArrowRight } from "react-icons/ai";
import { MainButton } from "../../components/MainButton";
import { Link } from "react-router-dom";

export function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    return (
        <div className="min-h-screen bg-gray-100">
            <Header name="Givaldo Neto"/>
            <div className="flex justify-center items-center py-12">
                <div className="bg-white rounded-lg p-10 w-1/2">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-medium mb-4">My Profile</h2>
                        <Link to="/">
                            <AiOutlineArrowRight size="1.5em"/>
                        </Link>
                    </div>
                    <div className="mb-4">
                            <InputField
                                label="Name"
                                type="text"
                                name="name"
                                id="name"
                            />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <div className="relative">
                            <InputField
                                label="Email"
                                type="email"
                                name="email"
                                id="email"
                            />
                        </div>
                    </div>
                    <div className="mb-4 mt-20">
                        <label htmlFor="currentPassword" className="sr-only">
                            Current Password
                        </label>
                        <div className="relative">
                            <InputField
                                label="Current Password"
                                type="password"
                                name="currentPassword"
                                id="currentPassword"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="newPassword" className="sr-only">
                            New Password
                        </label>
                        <div className="relative">
                            <InputField
                                label="New Password"
                                type="password"
                                name="newPassword"
                                id="newPassword"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <MainButton title="Save"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
