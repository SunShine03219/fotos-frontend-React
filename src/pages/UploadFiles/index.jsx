import React, {useState} from 'react';

import { Header } from "../../components/UI/Header";

import { MainButton } from "../../components/UI/MainButton";
import { Link } from "react-router-dom";
import {AiOutlineArrowRight, AiOutlineCloudUpload, AiOutlineClose} from "react-icons/ai";

export function UploadFilesPage(){
    const [selectedFiles, setSelectedFiles] = useState([]);

    function handleFileChange(event) {
        const newImages = [...selectedFiles, ...event.target.files];
        setSelectedFiles(newImages);
    }

    function handleRemoveFile(index) {
        const newFiles = [...selectedFiles];
        newFiles.splice(index, 1);
        setSelectedFiles(newFiles);
    }


    const handleUploadClick = () => {
    };
    return (
        <div className="min-h-screen bg-gray-100">
            <Header name="Givaldo Neto"/>
            <div className="flex justify-center items-center py-12">
                <div className="bg-white rounded-lg p-10 w-1/2">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-medium mb-4">Upload Files</h2>
                        <Link to="/">
                            <AiOutlineArrowRight size="1.5em"/>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="flex justify-center items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
                            <AiOutlineCloudUpload size="2em"/>
                            <span className="ml-2 text-base leading-normal">Select files</span>
                            <input type='file' className="hidden" multiple onChange={handleFileChange} accept=".jpg, .jpeg, .png, .gif" />
                        </label>
                        <div className="mt-6">
                            {selectedFiles.map((file, index) => (
                                <div key={index} className="flex items-center justify-between mt-2">
                                    <p className="text-gray-800 font-medium truncate max-w-xs">{file.name}</p>
                                    <AiOutlineClose onClick={() => handleRemoveFile(index)} className="cursor-pointer"/>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end mt-20">
                            <MainButton title="Upload" onSubmit={handleUploadClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}