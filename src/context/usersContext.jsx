import {createContext, useState, useEffect, useContext} from "react"
import { deleteUser, getAllUsers, getUserData, addUserToDatabase, editUserInfoProfile} from "../services/api"
import { errorMessages } from "../utils/errorMessages"
import { useAuth } from "../hooks/auth";


export const UsersContext = createContext({})

function UserProvider({ children }) {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const { signOut } = useAuth()

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

    const updateUser = async (id, name, email, oldPassword, newPassword) => {
        try {
            await editUserInfoProfile(id, name, email, oldPassword, newPassword)
            if (email !== currentUser.email || (oldPassword && newPassword)) {
                return {success: errorMessages['SIGN_OUT']}
            } else {
                const userData = await getUserData(getToken)
                const allUsers = await getAllUsers(getToken)
                setCurrentUser(userData)
                setUsers(allUsers)
                return {updated: errorMessages['UPDATE']}
            }
        } catch (error) {
            if (error.response) {
                return {error: errorMessages[error.response.data.error]}
            }
        }
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