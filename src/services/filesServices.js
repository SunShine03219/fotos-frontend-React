import { apiClient } from './apiClient'


const getFileData = async () => {
    const { data } = await apiClient.get("pictures")
    return data
}

const uploadAPI = async (url, selectedFiles) => {
    const formData = new FormData()
    selectedFiles.forEach((file) => {
        formData.append("file", file)
    })
    const { data } = await apiClient.post(`pictures/upload${url}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    })
    return data
}

const deleteAPI = async (url) => {
    const { data } = await apiClient.delete(`pictures/delete${url}`)
    return data
}

export { getFileData, uploadAPI, deleteAPI}