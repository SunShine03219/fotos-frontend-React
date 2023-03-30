import { useState } from "react"

export const useAlertModal = () => {
    const [ showModal, setShowModal ] = useState(false)
    const [ message, setMessage ] = useState("")
    const [ type, setType ] = useState("")

    return {
        showModal,
        setShowModal,
        setMessage,
        setType,
        message,
        type
    }
}