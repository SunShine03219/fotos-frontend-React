import { AlertModal } from '../../components/Modals/AlertModal'
import { useLoginForm } from '../../hooks/useLoginForm'
import { LoginForm } from "../../components/Forms/LoginForm"

export function LoginPage() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        showModal,
        message,
        type
    } = useLoginForm()

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full rounded-md shadow-lg overflow-hidden">
                <div className="bg-gray-200 py-4 px-6 flex justify-between items-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Login</h2>
                </div>
                <LoginForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                />
            </div>
            { showModal && <AlertModal message={message} type={type} />}
        </div>
    )
}
