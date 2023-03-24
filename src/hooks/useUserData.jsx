import {useEffect, useRef, useState} from "react"
import { getUserData } from "../services/api"

export function useUserData() {
    const [userName, setUserName] = useState(null)
    const [userEmail, setUserEmail] = useState('')
    const initialUserName = useRef(null)
    const initialUserEmail = useRef(null)

    useEffect(() => {
        async function fetchData() {
            const data = await getUserData()
            setUserName(data.name)
            setUserEmail(data.email)
            initialUserName.current = data.name
            initialUserEmail.current = data.email
        }
        fetchData();
    }, []);

    const updateUser = (field, value) => {
        if (field === 'userName') {
            setUserName(value)
        } else if (field === 'userEmail') {
            setUserEmail(value)
        }
    }

    return {
        userName,
        userEmail,
        initialUserName: initialUserName.current,
        initialUserEmail: initialUserEmail.current,
        updateUser,
    }
}