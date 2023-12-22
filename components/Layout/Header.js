"use client"

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../AuthContext";
import Logo from "../UI/Logo";

const Header = () => {
  const [loggedIn, setLoggedIn]=useState();
  const { isLoggedIn } = useAuth();
  
  useEffect(()=>{
    setLoggedIn(isLoggedIn);
  },[isLoggedIn])
  

  return (
    <nav className=" bg-[#937dc2] pl-4 py-2 sm:pl-6 sm:py-4 flex relative">
      <Logo style=" text-5xl"/>

      {loggedIn && (
        <div className="flex items-center justify-end w-full">
          <img src="vector12.png" className="w-[25px] h-[27.5px] mr-[53px]" />
          <img src="group.png" className="w-[27px] h-[31px] mr-[56px]" />
          <div className="flex items-center">
            <img src="ellipse.png" className="w-[54px] h-[53px] mr-[7px]" />
            <h1 className="text-[16px] font-semibold leading-[28px] text-white mr-[4px]">David</h1>
            <p className="text-white text-[16px] font-semibold -rotate-90 mr-10">&#8249;</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
