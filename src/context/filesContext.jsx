import { createContext, useState, useEffect, useContext } from "react"
import { getFileData, uploadAPI } from '../services/filesServices'

export const FilesContext = createContext({})

function FilesProvider({ children }) {
    const [files, setFiles] = useState([])
    const [folderPath, setFolderPath] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const filesData = await getFileData('')
            setFiles(filesData)
        }
        fetchData()
    }, [])

    const uploadFiles = async (url, selectedFiles) => {
        try {
            await uploadAPI(url, selectedFiles)
        } catch (error) {
            console.log('error on update files')
        }
    }

    return (
        <FilesContext.Provider  value={{
            files,
            folderPath,
            setFolderPath,
            uploadFiles
        }}>
            {children}
        </FilesContext.Provider>
    )
}

function useFiles(){
    return useContext(FilesContext)
}

export { FilesProvider, useFiles }