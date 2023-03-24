import React from "react";

export function TabButton({
      active,
      label,
      onClick
    }) {
    return (
        <button
            className={`px-20 py-2 ${active ? "border-primary bg-primary text-white" : "border-gray-300"} border focus:outline-none rounded-tl-lg rounded-tr-lg`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
