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
    <div className="flex items-center justify-end m-2 sm:m-4">
      <button className="text-gray-400 text-xs sm:text-[16px] font-semibold leading-[24px]" onClick={sendData}>{<SearchIcon />}</button>
      <input
        type="text"
        placeholder="Search"
        className="border p-0.5 sm:p-1 rounded-3xl text-xs sm:text-sm w-1/2"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBarComponent;