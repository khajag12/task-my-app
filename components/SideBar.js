import React from "react";

import Checkbox from "../components/Checkbox";

const Sidebar = () => {
  return (
    <div className="bg-white border w-64 min-h-screen p-4">
      <p className="text-base sm:text-sm font-bold mb-4">Popular Services</p>
      <ul>
        <Checkbox checkboxContent="Lorem ipsum dolo" />
        <Checkbox checkboxContent="laboris nisi ut aliquip" />
        <Checkbox checkboxContent="Lorem ipsum dolo" />
        <Checkbox checkboxContent="laboris nisi ut aliquip" />
        <Checkbox checkboxContent="Lorem ipsum dolo" />
        <Checkbox checkboxContent="laboris nisi ut aliquip" />
        <Checkbox checkboxContent="Lorem ipsum dolo" />
        <Checkbox checkboxContent="laboris nisi ut aliquip" />
      </ul>
      <div>
        <div className="flex items-center mt-6">
          <div className="text-base sm:text-sm">Sort</div>
          <div className="ml-1">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="4" y1="7" x2="20" y2="7"></line>
            <line x1="4" y1="12" x2="15" y2="12"></line>
            <line x1="4" y1="17" x2="10" y2="17"></line>
          </svg>
          </div>
        </div>
        <button className="mt-4 text-sm sm:text-xs">Date Posted</button>
      </div>
    </div>
  );
};

export default Sidebar;