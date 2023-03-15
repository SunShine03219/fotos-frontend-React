import React from "react";

export function InputField({ label, type, name, value, onChange }) {
    return (
        <div>
            <label htmlFor={name} className="block font-medium text-gray-700">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                autoComplete={type === 'password' ? 'current-password' : 'email'}
                required
                className="appearance-none rounded-md block w-full py-2 px-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}