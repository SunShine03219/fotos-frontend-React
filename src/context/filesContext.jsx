import { createContext, useState, useEffect, useContext } from "react"
import { getFileData, uploadAPI, deleteAPI } from '../services/filesServices'

export const FilesContext = createContext({})

function FilesProvider({ children }) {
    const [files, setFiles] = useState([])
    const [folderPath, setFolderPath] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const filesData = await getFileData()
            setFiles(filesData)
        }
        fetchData()
    }, [])

    const uploadFiles = async (url, selectedFiles) => {
        try {
            await uploadAPI(url, selectedFiles)
            const filesData = await getFileData()
            setFiles(filesData)
        } catch (error) {
            console.log('error on update files')
        }
    }

    const deleteFile = async (url) => {
        try {
            await deleteAPI(url)
            const filesData = await getFileData()
            setFiles(filesData)
        } catch (error) {
            console.log('error on update files')
        }
    }

    return (
        <FilesContext.Provider  value={{
            files,
            folderPath,
            setFolderPath,
            uploadFiles,
            deleteFile
        }}>
            {children}
        </FilesContext.Provider>
    )
}

function useFiles(){
    return useContext(FilesContext)
}

export { FilesProvider, useFiles }