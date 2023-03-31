import { Routes, Route } from 'react-router-dom'

import { HomePage } from "../pages/Home"
import { UploadFilesPage } from "../pages/UploadFiles"
import { ProfilePage } from "../pages/Profile"
import { AddUserPage } from "../pages/AddUser"

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<UploadFilesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/add-user" element={<AddUserPage />} />
        </Routes>
    )
}