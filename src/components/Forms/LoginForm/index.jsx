import { InputField } from "../../UI/InputFields"
import { MainButton } from "../../UI/MainButton"

export const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit }) => {
    return (
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
                <MainButton title="Login" type="submit" />
            </div>
        </form>
    )
}
