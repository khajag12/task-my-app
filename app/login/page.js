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
    <div className="flex justify-center items-center min-h-screen">
    <div className="flex flex-col justify-center items-center sm:flex-grow p-2 max-w-md">
      <h1 className="text-[12px] text-center sm:text-lg uppercase mb-1 sm:mb-2">login to continue</h1>
      <form className="border border-gray-300 rounded-lg mt-1 w-9/12">
        <div className="flex flex-col pt-12 px-12 mb-6">
          <label className="text-xs sm:text-sm">
          Email address or username
          </label>
          <input placeholder="Email address or username" className="border rounded mt-1 w-full h-4 sm:h-6 text-[5px] sm:text-xs" />

          <label className="text-xs sm:text-sm mt-3">
            Password
          </label>
          <input placeholder="Password" className="border rounded mt-1 w-full h-4 sm:h-6 text-[5px] sm:text-xs" />
        </div>
        <Button onClick={handleLogin} link="/jobs" text="Sign In"></Button>

        <div className="grid grid-cols-2 my-4 mx-4">
            <div className="flex justify-end items-center text-[8px]">Don't have an account? <img src="icon.png" className="w-3 h-3 mr-0.5 sm:mr-2"/></div>
            <Link
            href="/"
          className=" bg-[#583D88] text-white text-center text-[5px] uppercase mx-2 py-1 px-3 sm:py-2 sm:mx-3 sm:px-5 sm:text-[7px] font-bold rounded-3xl hover:bg-violet-700 focus:outline-none focus:shadow-outline"
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
