"use client"

import { useAuth } from "@/components/AuthContext";
import Button from "@/components/UI/Button";
import Link from "next/link";

const Login = () => {
  const { toggleLogin, isLoggedIn } = useAuth();

  const handleLogin = () => {
    // Perform login logic
    // Once login is successful, toggle the login state
    toggleLogin();
  };

  return (
    <div className="flex justify-center items-center min-h-screen mb-[90px]">
    <div className="flex flex-col justify-center items-center sm:flex-grow mt-[80px] max-w-md">
      <h1 className="text-[12px] text-center font-semibold tracking-[0.5px] leading-[72px] sm:text-[25px] uppercase">login to continue</h1>
      <form className="border border-[#DCDCDC] rounded-[20px] mt-1 w-[716px]">
        <div className="flex flex-col mt-[85px] px-[138px] mb-[50px]">
          <label className="text-xs sm:text-sm">
          Email address or username
          </label>
          <input placeholder="Email address or username" className="border rounded mt-1 w-full h-4 sm:h-[50px] text-[5px] sm:text-base font-normal px-[14px] py-[15px]" />

          <label className="text-xs sm:text-sm mt-3">
            Password
          </label>
          <input placeholder="Password" className="border rounded mt-1 w-full h-4 sm:h-[50px] text-[5px] sm:text-base font-normal px-[14px] py-[15px]" />
          <span className="mt-[17px] text-base leading-normal font-normal">Forgot your password?</span>
        </div>
        <Button onClick={handleLogin} link="/jobs" text="Log In"></Button>

        <div className="grid grid-cols-2 mt-[100px] mb-[115px] mx-4">
            <div className="flex justify-end items-center text-[19px] mr-8">Don't have an account? <img src="icon.png" className="w-[49px] h-[49px] mr-0.5 sm:mr-2"/></div>
            <Link
            href="/"
          className="flex items-center justify-center bg-[#583D88] text-white text-[5px] uppercase mx-2 py-1 px-3 sm:py-2 sm:mx-3 sm:px-5 sm:text-[14px] font-bold rounded-3xl hover:bg-violet-700 focus:outline-none focus:shadow-outline"
        >
          Create an account
        </Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
