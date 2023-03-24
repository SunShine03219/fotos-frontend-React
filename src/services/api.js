import axios from 'axios'

const BASE_LOCAL_URL = 'http://0.0.0.0:8000/'
const GET_TOKEN = localStorage.getItem("@doubleu:token")

export const api = axios.create({
    baseURL: BASE_LOCAL_URL
})

const login = (email, password) => {
    return axios.post(`${BASE_LOCAL_URL}login`, {
        email,
        password
    })
        .then(response => response.data);
}

const getUserData = async () => {

    const { data } = await axios.get(`${BASE_LOCAL_URL}users/me`, {
        headers: {
            Authorization: `Bearer ${GET_TOKEN}`
        }
    })
    return data
}

const getAllUsers = async () => {

    const { data } = await axios.get(`${BASE_LOCAL_URL}users`, {
        headers: {
            Authorization: `Bearer ${GET_TOKEN}`
        }
    })
    return data
}

const deleteUser = async (id) => {
    const { data } = await axios.delete(`${BASE_LOCAL_URL}users/${id}`, {
        headers: {
            Authorization: `Bearer ${GET_TOKEN}`
        }
    })
    return data
}

const addUser = async (name, email, password, isAdmin) => {
    const { data } = await axios.post(`${BASE_LOCAL_URL}users/`, {
        name,
        email,
        password,
        role: isAdmin
    }, {
        headers: {
            Authorization: `Bearer ${GET_TOKEN}`
        }
    })
    return data
}


export { login, getUserData, getAllUsers, deleteUser, addUser }