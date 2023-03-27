import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { Header } from "../../components/UI/Header";
import { InputField } from "../../components/UI/InputFields"
import { useUsers } from "../../context/usersContext";

import { AiOutlineArrowRight } from "react-icons/ai";
import { MainButton } from "../../components/UI/MainButton";
import { AlertModal } from '../../components/Modals/AlertModal'

import { Link } from "react-router-dom";

export function AddUserPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const [showModal, setShowModal] = useState(false)
    const [modalmessage, setModalmessage] = useState('')
    const [modalType, setModalType] = useState('')

    const navigateTo = useNavigate();
    const { addUser } = useUsers()

    const handleSaveClick = async (e) => {
        e.preventDefault();

        const response = await addUser(name, email, password, isAdmin ? "admin" : "default")

        //if login runs ok will return undefined
        if (response) {
            setShowModal(true)
            setModalmessage(response)
            setModalType('error')
            setTimeout(() => setShowModal(false), 1500)
        } else {
            setShowModal(true)
            setModalmessage('User created!')
            setModalType('success')
            setTimeout(() => {
                setShowModal(false)
                navigateTo('/')
            }, 1500)
        }
    }


    return (
        <div className="min-h-screen bg-gray-100">
            <Header name="Givaldo Neto"/>
            <div className="flex justify-center items-center py-12">
                <div className="bg-white rounded-lg p-10 w-1/2">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-medium mb-4">Add User</h2>
                        <Link to="/">
                            <AiOutlineArrowRight size="1.5em"/>
                        </Link>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <div className="relative">
                            <InputField
                                label="Name"
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="currentPassword" className="sr-only">
                            Password
                        </label>
                        <div className="relative">
                            <InputField
                                label="Password"
                                type="password"
                                name="currentPassword"
                                id="currentPassword"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="isAdmin" className="sr-only">
                            Admin
                        </label>
                        <div className="relative">
                            <input
                                type="checkbox"
                                name="isAdmin"
                                id="isAdmin"
                                checked={isAdmin}
                                onChange={() => setIsAdmin(!isAdmin)}
                            />
                            <label htmlFor="isAdmin" className="ml-2">
                                Is admin
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <MainButton title="Save" onClick={handleSaveClick}/>
                    </div>
                </div>
            </div>
            { showModal && <AlertModal message={modalmessage} type={modalType} />}
        </div>
    )
}
