import axios from 'axios'

const BASE_LOCAL_URL = 'http://0.0.0.0:8000/'

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
    const token = localStorage.getItem("@doubleu:token")

    const { data } = await axios.get(`${BASE_LOCAL_URL}users/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data.name
}


export { login, getUserData }