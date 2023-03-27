import React, {useEffect, useState} from 'react'

import { Header } from '../../components/UI/Header'
import { Tabs } from '../../components/Tabs'

import { useUsers } from "../../context/usersContext";

export function HomePage(){

    const { currentUser } = useUsers()

    return (
        <>
            <Header name={currentUser.name}/>
            <Tabs isAdmin={true}/>
        </>
    )
}