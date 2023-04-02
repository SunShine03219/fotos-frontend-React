import React, { useState } from "react";

import { Header } from "../../components/UI/Header";

import { MainButton } from "../../components/UI/MainButton";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useFiles } from "../../context/filesContext";
import { useUsers } from "../../context/usersContext";
import { AlertModal } from "../../components/Modals/AlertModal";
import { useAlertModal } from "../../hooks/useAlertModal";

export function NewFolderPage() {
  const [folderName, setFolderName] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { folderPath, setFolderPath, createFolder } = useFiles();
  const { currentUser } = useUsers();
  const { showModal, setShowModal, setMessage, setType, message, type } = useAlertModal();
  const navigateTo = useNavigate();

  const url = React.useMemo(() => {
    let url = "";

    folderPath.forEach((folder) => {
      url += `/${folder.title}`;
    });

    return url;
  }, [folderPath]);

  function handleOnChange(event) {
    setFolderName(event.target.value);
  }

  async function handleCreateClick() {
    setIsLoading(true);

    try {
      const folderPath = url + "/" + folderName;
      const response = await createFolder(folderPath);
      if (response.error) return onError();

      setShowModal(true);
      setMessage(response.success);
      setType("success");

      setTimeout(() => {
        setShowModal(false);
        setFolderPath([]);
        navigateTo("/");
      }, 1500);
    } catch {
      onError();
    } finally {
      setIsLoading(false);
    }
  }

  function onError() {
    setShowModal(true);
    setMessage(response.error);
    setType("error");
    setTimeout(() => setShowModal(false), 1500);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header name={currentUser.name} />
      <div className="flex justify-center items-center py-12">
        <div className="bg-white rounded-lg p-10 w-1/2">
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium mb-4">Create new folder</h2>
            <Link to="/">
              <AiOutlineArrowRight size="1.5em" />
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              onChange={handleOnChange}
              placeholder="Enter your folder name"
              className="border-2 rounded p-2 border-solid border-primary"
            />
            <div className="flex justify-end">
              <MainButton title={isLoading ? "Creating..." : "Create"} onClick={handleCreateClick} />
            </div>
            <div className="mt-4 text-xs">
              The new folder will be created at: <br /> {url}
            </div>
          </div>
        </div>
      </div>
      {showModal && <AlertModal message={message} type={type} />}
    </div>
  );
}
