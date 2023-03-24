import React, {useEffect, useState} from 'react'

import { Header } from '../../components/UI/Header'
import { Tabs } from '../../components/Tabs'
import { getUserData } from "../../services/api";

import { useUsers } from "../../context/usersContext";

export function HomePage(){
    const [userName, setUsername] = useState(null)

    useEffect( () => {
        async function fetchName(){
            const data = await getUserData()
            setUsername(data.name)
        }
        fetchName()
    }, [])
    return (
        <>
            <Header name={userName}/>
            <Tabs isAdmin={true}/>
        </>
    )
}