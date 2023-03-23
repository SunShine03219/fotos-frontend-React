import React, {useEffect, useState} from 'react'

import { Header } from '../../components/Header'
import { Tabs } from '../../components/Tabs'
import { getUserData } from "../../services/api";


export function HomePage(){
    const [userName, setUsername] = useState(null)

    useEffect( () => {
        async function fetchName(){
            const name = await getUserData()
            setUsername(name)
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