import axios from 'axios'

const BASE_LOCAL_URL = 'http://0.0.0.0:8000/'
const TOKEN_STORAGE_KEY = '@doubleu:token'

export const apiClient = axios.create({
    baseURL: BASE_LOCAL_URL,
})

//Request interceptor to add auth token to the authorization header
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

let signOutHandler

export function setSignOutHandler(handler) {
    signOutHandler = handler
}

//Response interceptor to check if the token is valid
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.data.message === "Token expired") {
            if (signOutHandler) {
                signOutHandler()
            }
        }
        return Promise.reject(error)
    }
)