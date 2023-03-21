import React from 'react';

export function DeleteModal({ title, onDelete, onCancel }) {
    return (
        <>
            <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-gray-800 bg-opacity-50">
                <div className="bg-white w-1/3 rounded-lg p-4">
                    <p className="text-xl font-medium mb-4 text-center">Are you sure you want to delete {title}?</p>
                    <div className="flex justify-center mt-10">
                        <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded-md mr-2">Confirm</button>
                        <button onClick={onCancel} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
}