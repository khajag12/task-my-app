import SignUpData from "@/components/forms/signUpData";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="grid grid-cols-2 bg-white pb-12">
        <div className="mx-16 mt-24">
          <img className="ml-8 md:w-80 h-80" src="task.png"></img>
          <h1 className=" text-4xl mt-2">Lorem ipsum dolor sit</h1>
          <p className="text-gray-500 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
        </div>
        <div className="mr-40">
          <h1 className="flex justify-center text-3xl p-6">Create an Account</h1>
          <SignUpData />
        </div>
      </div>
    </Fragment>
  );
}
