import React from 'react'

import { AiOutlineLogout, AiOutlineUser }from "react-icons/ai"

export function Header({ name }){
    return (
        <header className="flex justify-between items-center py-4 px-6 bg-gray-200">
            <div className="text-gray-700 font-medium text-right">{name ? `Hello, ${name}!` : 'Hello!'}</div>
            <div className="flex items-center">
                <AiOutlineUser size='1.6em' style={{ marginRight: '25px' }}/>
                <AiOutlineLogout size='1.5em' />
            </div>
        </header>
    );
}