import React, { useState } from "react";

export function SearchBar({ onValueChange }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const newValue = e.target.value;
    setSearch(newValue);
    onValueChange(newValue);
  };

  return (
    <div className="relative text-gray-600 mb-4">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="text"
        name="search"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}
