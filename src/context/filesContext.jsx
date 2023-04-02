import { createContext, useState, useEffect, useContext } from "react";
import { getFileData, uploadAPI, deleteAPI, downloadFiles, createFolderAPI } from "../services/filesServices";

export const FilesContext = createContext({});

function FilesProvider({ children }) {
  const [files, setFiles] = useState([]);
  const [originalFiles, setOriginalFiles] = useState([]);
  const [optimizedFiles, setOptimizedFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [folderPath, setFolderPath] = useState([]);

  const updateFilesData = async () => {
    const filesData = await getFileData();
    const originalFilesObject = filesData.find((file) => file.title === "fotos-originais");
    const optimizedFilesObject = filesData.find((file) => file.title === "fotos-otimizadas");
    const videoFilesObject = filesData.find((file) => file.title === "videos");
    const originalFilesArray = [originalFilesObject];
    const optimizedFilesArray = [optimizedFilesObject];
    const videoFilesArray = [videoFilesObject];

    setFiles(filesData);
    setOriginalFiles(originalFilesArray);
    setOptimizedFiles(optimizedFilesArray);
    setVideoFiles(videoFilesArray);
  };

  useEffect(() => {
    const fetchData = async () => {
      await updateFilesData();
    };

    fetchData();
  }, []);

  const uploadFiles = async (url, selectedFiles) => {
    try {
      await uploadAPI(url, selectedFiles);
      await updateFilesData();
      return { success: "Success Upload" };
    } catch (error) {
      return { error: "Error on Upload" };
    }
  };

  const download = async (url) => {
    try {
      await downloadFiles(url);
      return { success: "Success download" };
    } catch (error) {
      return { error: "Failed download" };
    }
  };

  const deleteFile = async (url) => {
    try {
      await deleteAPI(url);
      await updateFilesData();
    } catch (error) {
      console.log("error on update files");
    }
  };

  const createFolder = async (folderPath) => {
    try {
      await createFolderAPI(folderPath);
      await updateFilesData();
      return { success: "Success Upload" };
    } catch (error) {
      return { error: "Error on Upload" };
    }
  };

  return (
    <FilesContext.Provider
      value={{
        files,
        folderPath,
        setFolderPath,
        uploadFiles,
        deleteFile,
        download,
        originalFiles,
        optimizedFiles,
        videoFiles,
        createFolder,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
}

function useFiles() {
  return useContext(FilesContext);
}

export { FilesProvider, useFiles };
