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
    <div className='bg-white p-12'>
      <div className="grid grid-cols-2 bg-yellow-500 rounded-lg">
        <div className="mt-8 ml-8 col-start-auto">
          <h1 className="text-white text-3xl  w-9/12 mb-6">
            Lorem ipsum dolor sit amet, consectetur
          </h1>
          <p className="w-9/12 text-white text-xs">
            ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim
          </p>
        </div>
        <div className="flex justify-end items-center mr-6">
          <img className="h-3/4 " src="random.png"></img>
        </div>
      </div>

      <div className="grid grid-cols-2">
      <div className="flex items-center m-4 text-xl"><p>{dataFromFirstChild}</p>&nbsp;results found for {dataFromChild}</div>
      <SearchBarComponent sendDataToParent={filteredData}/>
      </div>

      <div className="flex border">
        <Sidebar />
        <JobList dataFromParent={dataFromChild} sendNumberToParent={receiveDataFromFirstChild} className="flex-1 p-4" />
      </div>
    </div>
  );
};

export default JobListing;
