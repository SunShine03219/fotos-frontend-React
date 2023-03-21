import React from 'react';

import { InputField } from "../InputFields"


export function EditModal({ title, onDelete, onCancel }) {
    return (
        <>
            <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-gray-800 bg-opacity-50">
                <div className="bg-white w-1/3 rounded-lg p-4">
                    <p className="text-xl font-medium mb-4">Editing info: {title}?</p>
                    <form action="">
                        <div className="space-y-4">
                            <div>
                                <InputField
                                    label="Name"
                                    type="name"
                                    name="name"
                                />
                            </div>
                            <div>
                                <InputField
                                    label="Email"
                                    type="email"
                                    name="email"
                                />
                            </div>
                            <div>
                                <InputField
                                    label="Password"
                                    type="password"
                                    name="password"
                                />
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-center mt-4">
                        <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded-md mr-2">Confirm</button>
                        <button onClick={onCancel} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
}