import { apiClient } from './apiClient'


const getFileData = async (path) => {
    const { data } = await apiClient.get("pictures")
    return data
}

const uploadAPI = async (url, selectedFiles) => {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
        formData.append("file", file);
    });
    const { data } = await apiClient.post(`pictures/upload/${url}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
};

export { getFileData, uploadAPI }