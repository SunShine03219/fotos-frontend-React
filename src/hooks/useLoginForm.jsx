import { useState } from "react"
import { useAuth } from "./auth"
import { useAlertModal } from "./useAlertModal"

export const useLoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signIn } = useAuth();
    const {
        showModal,
        setShowModal,
        setMessage,
        setType,
        message,
        type,
    } = useAlertModal()

    const handleLoginError = (response) => {
        setShowModal(true)
        setMessage(response)
        setType("error")
        setTimeout(() => setShowModal(false), 1500)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await signIn({ email, password })

        if (response) {
            handleLoginError(response)
        }
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        showModal,
        setShowModal,
        setMessage,
        setType,
        message,
        type,
    }
}
