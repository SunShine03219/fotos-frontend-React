import {createContext, useContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"


import {api, login, setSignOutHandler } from '../services/api'
import { errorMessages } from '../utils/errorMessages'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)// Add this line


    async function signIn({ email, password }) {
        try {
            const response = await login(email, password )
            const { access_token } = response

            localStorage.setItem("@doubleu:token", access_token)

            api.defaults.headers.common['Authorization'] = '' + access_token
            setData({ access_token })
            setIsAuthenticated(true); // Update isAuthenticated state
        } catch (error) {
             if (error.response) {
                 return errorMessages[error.response.data.error]
             }
        }
    }


    function signOut() {
        localStorage.removeItem("@doubleu:token");
        setData({});
        setIsAuthenticated(false); // Update isAuthenticated state
    }


    useEffect(() => {
        const access_token = localStorage.getItem("@doubleu:token");

        if (access_token){
            api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
            setData({
                access_token,
            });
            setIsAuthenticated(true); // Update isAuthenticated state
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