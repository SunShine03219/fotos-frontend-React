import React, { useState} from 'react'

import { Header } from "../../components/UI/Header"

import { MainButton } from "../../components/UI/MainButton"
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineArrowRight, AiOutlineCloudUpload, AiOutlineClose } from "react-icons/ai"
import { useFiles } from "../../context/filesContext"
import { useUsers } from "../../context/usersContext"
import { Spinner } from "../../components/UI/Spinner"
import { AlertModal } from "../../components/Modals/AlertModal"
import { useAlertModal } from "../../hooks/useAlertModal";

export function UploadFilesPage(){
    const [selectedFiles, setSelectedFiles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { folderPath, setFolderPath, uploadFiles } = useFiles()
    const { currentUser } = useUsers()
    const {
        showModal,
        setShowModal,
        setMessage,
        setType,
        message,
        type,
    } = useAlertModal()

    const navigateTo = useNavigate()

    let url = ""

    folderPath.forEach((folder) => {
        url += `/${folder.title}`
    })

    if (url === "") {
        url = "/fotos-originais"
    }

    function handleFileChange(event) {
        const newImages = [...selectedFiles, ...event.target.files]
        setSelectedFiles(newImages)
    }

    function handleRemoveFile(index) {
        const newFiles = [...selectedFiles]
        newFiles.splice(index, 1)
        setSelectedFiles(newFiles)
    }

    function handleClick(){
        setFolderPath([])
    }

    async function handleUploadClick() {
        setIsLoading(true)
        const response = await uploadFiles(url, selectedFiles)
        setIsLoading(false)
        if(response.error){
            setShowModal(true)
            setMessage(response.error)
            setType("error")
            setTimeout(() => setShowModal(false), 1500)
        } else {
            setShowModal(true)
            setMessage(response.success)
            setType("success")
            setTimeout(() => {
                setShowModal(false)
                setFolderPath([])
                setSelectedFiles([])
                navigateTo('/')
            }, 1500)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Header name={currentUser.name}/>
            <div className="flex justify-center items-center py-12">
                <div className="bg-white rounded-lg p-10 w-1/2">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-medium mb-4">Upload Files</h2>
                        <Link to="/" onClick={handleClick}>
                            <AiOutlineArrowRight size="1.5em"/>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="flex justify-center items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
                            <AiOutlineCloudUpload size="2em"/>
                            <span className="ml-2 text-base leading-normal">Select files</span>
                            <input
                                type='file'
                                className="hidden"
                                multiple
                                onChange={handleFileChange}
                                accept=".jpg, .jpeg, .png, .gif, .zip" />
                        </label>
                        <div className="mt-6">
                            {isLoading ? (
                                <Spinner />
                            ) : (
                                selectedFiles.map((file, index) => (
                                    <div key={index} className="flex items-center justify-between mt-2">
                                        <p className="text-gray-800 font-medium truncate max-w-xs">{file.name}</p>
                                        <AiOutlineClose onClick={() => handleRemoveFile(index)} className="cursor-pointer" />
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="flex justify-end mt-20">
                            <MainButton title={isLoading ? 'Uploading...' : 'Upload'} onClick={handleUploadClick} />
                        </div>
                        <div className="mt-4 text-xs">
                            The upload will be done on the folder: <br/> {url}
                        </div>
                    </div>
                </div>
            </div>
            { showModal && <AlertModal message={message} type={type} />}
        </div>
    )
}