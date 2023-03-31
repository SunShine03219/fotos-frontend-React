import { Routes, Route } from 'react-router-dom'

import { LoginPage } from '../pages/Login'

export function AuthRoutes(){
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
        </Routes>
    )
}