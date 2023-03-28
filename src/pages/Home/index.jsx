import React, {useEffect, useState} from 'react'

import { Header } from '../../components/UI/Header'
import { Tabs } from '../../components/Tabs'

import { useUsers } from "../../context/usersContext";

export function HomePage(){
    const [isAdmin, setIsAdmin] = useState(false)

    const { currentUser } = useUsers()

    useEffect(() => {
        if(currentUser.role === 'admin'){
            setIsAdmin(true)
        }
    }, [currentUser])


    return (
        <>
            <Header name={currentUser.name}/>
            <Tabs isAdmin={isAdmin}/>
        </>
    )
}