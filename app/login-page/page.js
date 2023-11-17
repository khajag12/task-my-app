import Login from "@/components/forms/login";
import { Fragment } from "react";

const LoginPage = () => {
  return (
    <div className=" bg-white w-full">
      <h1 className="flex justify-center text-3xl p-8">Login to continue</h1>
      <div className="flex justify-center" >
      <Login />
      </div>
    </div>
  );
};

export default LoginPage;
