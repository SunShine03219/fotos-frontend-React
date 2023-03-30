import { createContext, useContext, useEffect, useState } from "react"

import { login } from '../services/userService'
import { apiClient } from '../services/apiClient'
import { setSignOutHandler } from '../services/apiClient'
import { errorMessages } from '../utils/errorMessages'

export const AuthContext = createContext({})

function AuthProvider({ children, onSignOut }) {
    const [data, setData] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)


    async function signIn({ email, password }) {
        try {
            const response = await login(email, password )
            const { access_token } = response

            localStorage.setItem("@doubleu:token", access_token)

            apiClient.defaults.headers.common['Authorization'] = '' + access_token
            setData({ access_token })
            setIsAuthenticated(true)
        } catch (error) {
             if (error.response) {
                 return errorMessages[error.response.data.error]
             }
        }
    }


    function signOut() {
        localStorage.removeItem("@doubleu:token")
        setData({})
        setIsAuthenticated(false)
        window.location.href = "/"
    }


    useEffect(() => {
        const access_token = localStorage.getItem("@doubleu:token");

        if (access_token){
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
            setData({
                access_token,
            });
            setIsAuthenticated(true);
        }
        setSignOutHandler(signOut)
    }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            user: data.access_token,
            signOut,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    return useContext(AuthContext)
}

export { AuthProvider, useAuth }