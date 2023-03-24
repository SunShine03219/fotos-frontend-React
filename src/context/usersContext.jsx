import {createContext, useState, useEffect, useContext} from "react";
import { getAllUsers } from "../services/api";


export const UsersContext = createContext({})

function UserProvider({ children }) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchData(){
            const data = await getAllUsers()
            setUsers(data)
        }
        fetchData()
    }, [])

    return (
        <UsersContext.Provider value={{ users }}>
            {children}
        </UsersContext.Provider>
    )
}

function useUsers(){
    return useContext(UsersContext)
}

export { UserProvider, useUsers }