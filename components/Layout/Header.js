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
      <Logo />

      {loggedIn && (
        <div className="flex items-center absolute right-3 mr-4">
          <img src="vector12.png" className="w-4 h-4 mr-7" />
          <img src="group.png" className="w-5 h-6 mr-7" />
          <div className=" flex items-center">
            <img src="ellipse.png" className="w-6 h-6 mr-1" />
            <h1 className="text-sm text-white mr-0.5">David</h1>
            <p className="text-white -rotate-90">&#8249;</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
