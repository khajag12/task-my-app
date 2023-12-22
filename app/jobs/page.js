"use client"

import { useState } from "react";
import JobList from "@/components/JobList";
import Sidebar from "@/components/SideBar";
import SearchBarComponent from "./SearchBarComponent";

const JobListing = () => {
  const [dataFromChild, setDataFromChild] = useState("");
  const [dataFromFirstChild, setDataFromFirstChild] = useState("");

  const filteredData = (data) => {
    setDataFromChild(data);
  };


  const receiveDataFromFirstChild = (data) => {
    setDataFromFirstChild(data);
  };
  
  return (
    <div className='bg-white'>
      <div className="grid grid-cols-2 bg-[#FBBC05] rounded-lg py-[40px]  m-8">
        <div className=" ml-[65px]">
          <h1 className="text-white text-[12px] sm:text-[55px] font-semibold leading-[58px] w-full mb-6">
            Lorem ipsum dolor sit amet, consectetur
          </h1>
          <p className="w-full text-white text-[5px] sm:text-[18px] font-semibold leading-[27px]">
            ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim
          </p>
        </div>
        <div className="flex justify-end items-center mr-6">
          <img className="w-[223px]" src="random.png"></img>
        </div>
      </div>

      <div className="grid grid-cols-2">
      <div className="flex items-center ml-4 mt-10 mb-8 text-xs sm:text-2xl font-medium leading-[58px]"><p>{dataFromFirstChild}</p>&nbsp;results found for {dataFromChild}</div>
      <SearchBarComponent sendDataToParent={filteredData}/>
      </div>

      <div className="flex border-t-2 w-fit">
        <Sidebar />
        <JobList dataFromParent={dataFromChild} sendNumberToParent={receiveDataFromFirstChild} className="flex-1 p-4" />
      </div>
    </div>
  );
};

export default JobListing;