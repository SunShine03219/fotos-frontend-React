import {createContext, useState, useEffect, useContext} from "react";
import { deleteUser, getAllUsers, getUserData, addUserToDatabase} from "../services/api";
import {errorMessages} from "../utils/errorMessages";


export const UsersContext = createContext({})

function UserProvider({ children }) {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState([])

    const getToken = localStorage.getItem("@doubleu:token")

    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await getAllUsers(getToken)
            const userData = await getUserData(getToken)
            setUsers(allUsers)
            setCurrentUser(userData)
        }
        fetchData()
    }, [])

    const updateUser = async (name, email) => {
        console.log(name, email)
    };

    const addUser = async (name, email, password, isAdmin) => {
        try {
            await addUserToDatabase(name, email, password, isAdmin, getToken)
            const allUsers = await getAllUsers(getToken)
            const userData = await getUserData(getToken)
            setUsers(allUsers)
            setCurrentUser(userData)
        } catch (error) {
            if (error.response) {
                return errorMessages[error.response.data.error]
            }
        }
    };

    const deleteU = async (id, callback) => {
        try {
            await deleteUser(id, getToken)
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
            if (callback) {
                callback();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }


    return (
        <UsersContext.Provider value={{ users, currentUser, deleteU, addUser, updateUser }}>
            {children}
        </UsersContext.Provider>
    )
}

function useUsers(){
    return useContext(UsersContext)
}

export { UserProvider, useUsers }