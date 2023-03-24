import { InputField } from "../../UI/InputFields";
import {useState} from "react";
import {MainButton} from "../../UI/MainButton";

export function AddUserForm({ onSubmit }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, email, password, isAdmin });
    };

    const handleAdminToggle = (event) => {
        setIsAdmin(event.target.checked);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-4">
                <InputField
                    label="Name"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <InputField
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <InputField
                    label="Password"
                    type="password"
                    name="currentPassword"
                    id="currentPassword"
                    value={name}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="role" className="sr-only">
                    Role
                </label>
                <div className="relative flex items-center">
                    <input
                        type="checkbox"
                        name="role"
                        id="role"
                        checked={isAdmin}
                        onChange={handleAdminToggle}
                        className="appearance-none w-4 h-4 mr-2 border border-gray-300 rounded checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <label htmlFor="role" className="text-sm font-medium text-gray-700">
                        Admin
                    </label>
                </div>
            </div>
            <div className="flex justify-end">
                <MainButton title="Save" />
            </div>
        </form>
    );
}
