import axios from 'axios'

const BASE_LOCAL_URL = 'http://0.0.0.0:8000/'

const api = axios.create({
    baseURL: BASE_LOCAL_URL,
})

// Add interceptors to handle authorization headers
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("@doubleu:token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

let signOutHandler

function setSignOutHandler(handler) {
    signOutHandler = handler
}

// Set user to logout if the token is invalid
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.data.message === "Unauthorized") {
            if (signOutHandler) {
                signOutHandler()
            }
        }
        return Promise.reject(error)
    }
);

const login = (email, password) => {
    return api.post("login", { email, password }).then((response) => response.data)
}

const getUserData = async () => {
    const { data } = await api.get("users/me")
    return data
}

const getAllUsers = async () => {
    const { data } = await api.get("users")
    return data
};

const deleteUser = async (id) => {
    const { data } = await api.delete(`users/${id}`)
    return data
}

const addUserToDatabase = async (name, email, password, isAdmin) => {
    const { data } = await api.post("users/", {
        name,
        email,
        password,
        role: isAdmin,
    })
}

const editUserInfo = async ({ id, name, email, oldPassword, newPassword }) => {
    const payload = {
        name,
        email,
    }

    if ( newPassword !== undefined) {
        payload.new_password = newPassword
    }

    if (oldPassword !== undefined){
        payload.old_password = oldPassword
    }

    const { data } = await api.patch(`users/${id}`, payload)

    return data
}



export { api, login, getUserData, getAllUsers, deleteUser, addUserToDatabase, setSignOutHandler, editUserInfo }
