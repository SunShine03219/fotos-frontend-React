import axios from 'axios'

const BASE_LOCAL_URL = 'http://0.0.0.0:8000/'

const api = axios.create({
    baseURL: BASE_LOCAL_URL,
});

// Add interceptors to handle authorization headers
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("@doubleu:token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

const login = (email, password) => {
    return api.post("login", { email, password }).then((response) => response.data)
}

const getUserData = async () => {
    const { data } = await api.get("users/me");
    return data
}


const getAllUsers = async () => {
    const { data } = await api.get("users");
    return data
};

const deleteUser = async (id) => {
    const { data } = await api.delete(`users/${id}`);
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


export { api, login, getUserData, getAllUsers, deleteUser, addUserToDatabase }
