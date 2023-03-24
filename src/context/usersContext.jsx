import {createContext, useState, useEffect, useContext} from "react";
import {deleteUser, getAllUsers, getUserData} from "../services/api";


export const UsersContext = createContext({})

function UserProvider({ children }) {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
        async function fetchData2(){
            const data = await getAllUsers()
            setUsers(data)
        }
        fetchData2()
    }, [])

    useEffect(() => {
        async function fetchData(){
            const userData = await getUserData()
            setCurrentUser(userData)
        }
        fetchData()
    }, [])

    const deleteU = async (id, callback) => {
        try {
            await deleteUser(id)
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
            if (callback) {
                callback();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }


    return (
        <UsersContext.Provider value={{ users, currentUser, deleteU }}>
            {children}
        </UsersContext.Provider>
    )
}

function useUsers(){
    return useContext(UsersContext)
}

export { UserProvider, useUsers }