import React from "react";

export function MainButton({ onClick, title, type = 'button', cancel = false }) {
    const buttonClasses = cancel
        ? "group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 items-center"
        : "group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary_dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary_dark items-center";

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
