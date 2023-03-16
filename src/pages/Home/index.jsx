import React from 'react'

import { Header } from '../../components/Header'
import { Tabs } from '../../components/Tabs'

export function HomePage(){
    return (
        <>
            <Header name='Givaldo Neto'/>
            <Tabs isAdmin={true}/>
        </>
    )
}