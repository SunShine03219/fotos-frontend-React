import { apiClient } from './apiClient'


const login = (email, password) => {
    return apiClient.post("login", { email, password }).then((response) => response.data)
}

const getUserData = async () => {
    const { data } = await apiClient.get("users/me")
    return data
}

const getAllUsers = async () => {
    const { data } = await apiClient.get("users")
    return data
};

const deleteUser = async (id) => {
    const { data } = await apiClient.delete(`users/${id}`)
    return data
}

const addUserToDatabase = async (name, email, password, isAdmin) => {
    const { data } = await apiClient.post("users/", {
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

    const { data } = await apiClient.patch(`users/${id}`, payload)

    return data
}



export { login, getUserData, getAllUsers, deleteUser, addUserToDatabase, editUserInfo }
