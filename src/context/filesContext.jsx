import { createContext, useState, useEffect, useContext } from "react"
import { getFileData } from '../services/filesServices'

export const FilesContext = createContext({})

function FilesProvider({ children }) {
    const [files, setFiles] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const filesData = await getFileData('')
            setFiles(filesData)
        }
        fetchData()
    }, [])

    return (
        <FilesContext.Provider  value={{
            files
        }}>
            {children}
        </FilesContext.Provider>
    )
}

function useFiles(){
    return useContext(FilesContext)
}

export { FilesProvider, useFiles }