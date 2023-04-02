import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/Home";
import { UploadFilesPage } from "../pages/UploadFiles";
import { NewFolderPage } from "../pages/NewFolder";
import { ProfilePage } from "../pages/Profile";
import { AddUserPage } from "../pages/AddUser";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new-folder" element={<NewFolderPage />} />
      <Route path="/upload" element={<UploadFilesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/add-user" element={<AddUserPage />} />
    </Routes>
  );
}
