import { useState } from "react";

import { InputField } from '../../components/InputFields'
import { MainButton } from '../../components/MainButton'
import { AlertModal } from '../../components/AlertModal'

import { useAuth } from "../../hooks/auth";

export function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [showModal, setShowModal] = useState(false)
    const [modalmessage, setModalmessage] = useState('')
    const [modalType, setModalType] = useState('')

    const { signIn } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await signIn({ email, password })

        //if login runs ok will return undefined
        if (response){
            setShowModal(true)
            setModalmessage(response)
            setModalType('error')
            setTimeout(() => setShowModal(false), 1500)
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full rounded-md shadow-lg overflow-hidden">
                <div className="bg-gray-200 py-4 px-6 flex justify-between items-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Login</h2>
                </div>
                <form className="px-6 pt-8 pb-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <InputField
                                label="Email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <InputField
                                label="Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <MainButton onSubmit={handleSubmit} title='Login'/>
                    </div>
                </form>
            </div>
            { showModal && <AlertModal message={modalmessage} type={modalType} />}
        </div>
    );
}
