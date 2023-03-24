import {createContext, useContext, useEffect, useState} from "react";

import {api, login} from '../services/api';
import { errorMessages } from '../utils/errorMessages'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function signIn({ email, password }) {
        try {
            const response = await login(email, password )
            const { access_token } = response;

            localStorage.setItem("@doubleu:token", access_token);

            api.defaults.headers.common['Authorization'] = '' + access_token;
            setData({ access_token });

        } catch (error) {
             if (error.response) {
                 return errorMessages[error.response.data.error]
             }
        }
    }

    function signOut(){
        localStorage.removeItem("@doubleu:token");
        setData({});
    }

    useEffect(() => {
        const access_token = localStorage.getItem("@doubleu:token");

        if (access_token){
            api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
            setData({
                access_token,
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            user: data.access_token,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    return useContext(AuthContext)
}

export { AuthProvider, useAuth }