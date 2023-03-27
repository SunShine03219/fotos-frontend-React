import React, {useEffect, useState} from 'react'

import { AiOutlineLogout, AiOutlineUser }from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"

import { useAuth } from "../../../hooks/auth"

export function Header({ name }){

    const { signOut } = useAuth()
    const navigateTo = useNavigate()


    const handleSignOut = () => {
        signOut()
        navigateTo('/')
    }


    return (
        <header className="flex justify-between items-center py-4 px-6 bg-gray-200">
            <div className="text-gray-700 font-medium text-right">{name ? `Hello, ${name}!` : 'Hello!'}</div>
            <div className="flex items-center">
                <Link to="/profile">
                    <AiOutlineUser size='1.6em' style={{ marginRight: '25px' }}/>
                </Link>
                <button onClick={handleSignOut} className="cursor-pointer">
                    <AiOutlineLogout size='1.5em'/>
                </button>
            </div>
        </header>
    )
}