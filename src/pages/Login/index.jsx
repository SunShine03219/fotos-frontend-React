import { useState } from "react";

import { InputField } from '../../components/InputFields'
import { MainButton } from '../../components/MainButton'

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: handle login logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full rounded-md shadow-lg overflow-hidden">
                <div className="bg-gray-200 py-4 px-6 flex justify-between items-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Login</h2>
                </div>
                <form className="px-6 pt-8 pb-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
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
        </div>
    );
}
