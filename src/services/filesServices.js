import { apiClient } from './apiClient'


const getFileData = async (path) => {
    const { data } = await apiClient.get("pictures")
    return data
}

export { getFileData }