import {createContext, useState, useEffect, useContext} from "react"
import {
    deleteUser,
    getAllUsers,
    getUserData,
    addUserToDatabase,
    editUserInfo,
} from "../services/userService"
import { errorMessages } from "../utils/errorMessages"


export const UsersContext = createContext({})

function UserProvider({ children }) {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState([])

    const updateUserList = async (userData) => {
        if (userData.role === "admin") {
            const allUsers = await getAllUsers(userData.id)
            setUsers(allUsers)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const userData = await getUserData()
            setCurrentUser(userData)
            await updateUserList(userData)
        }
        fetchData()
    }, [])

    const updateUser = async (id, name, email, oldPassword, newPassword) => {
        try {
            await editUserInfo({
                id,
                name,
                email,
                oldPassword,
                newPassword
            })
            if (email !== currentUser.email || (newPassword)) {
                return {success: errorMessages['SIGN_OUT']}
            } else {
                const userData = await getUserData()
                setCurrentUser(userData)
                await updateUserList(userData)
                return {updated: errorMessages['UPDATE']}
            }
        } catch (error) {
            if (error.response) {
                return {error: errorMessages[error.response.data.error]}
            }
        }
    }

    const adminUpdateUser = async (id, name, email, password) => {
        try {
            await editUserInfo({
                id,
                name,
                email,
                newPassword: password
            })
            const userData = await getUserData()
            setCurrentUser(userData)
            await updateUserList(userData)
            return {updated: errorMessages['UPDATE']}
        } catch (error) {
            if (error.response) {
                return {error: errorMessages[error.response.data.error]}
            }
        }
    }

    const addUser = async (name, email, password, isAdmin) => {
        try {
            await addUserToDatabase(name, email, password, isAdmin)
            const userData = await getUserData()
            setCurrentUser(userData)
            await updateUserList(userData)
        } catch (error) {
            if (error.response) {
                return errorMessages[error.response.data.error]
            }
        }
    }

    const deleteU = async (id, callback) => {
        try {
            await deleteUser(id)
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
            if (callback) {
                callback()
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }


    return (
        <UsersContext.Provider value={{
            users,
            currentUser,
            deleteU,
            addUser,
            updateUser,
            adminUpdateUser
        }}>
            {children}
        </UsersContext.Provider>
    )
}

function useUsers(){
    return useContext(UsersContext)
}

export { UserProvider, useUsers }