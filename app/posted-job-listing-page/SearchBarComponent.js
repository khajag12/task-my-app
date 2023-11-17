"use client";
import SearchIcon from "@/components/SearchIcon";
import { useState } from "react";

const SearchBarComponent = ({ sendDataToParent }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(event.target.value);
  };

  const sendData = () => {
    sendDataToParent(searchTerm);
  };
  

  return (
    <div className="flex items-center justify-end m-4">
      <button className="text-gray-400" onClick={sendData}>{<SearchIcon />}</button>
      <input
        type="text"
        placeholder="Search"
        className="border p-2 mr-2 rounded-3xl"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBarComponent;
