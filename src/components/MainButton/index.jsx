import React from "react";

export function MainButton({ onSubmit, title }) {
    return (
        <button
            type="submit"
            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary_dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary_dark items-center"
            onClick={onSubmit}
        >
            {title}
        </button>
    );
}