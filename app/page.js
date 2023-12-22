"use client";

import Button from "@/components/UI/Button";

import useInput from "../hooks/useInput";

const Home = () => {
  const { formData, errors, handleChange, handleSubmit } = useInput();

  return (
    <div className="flex justify-center items-center my-[90px] min-h-[80vh]">
      <div className="sm:block hidden w-1/2">
        <img src="task.png" className="w-[424px] h-[424px] ml-16" />
        <h1 className="text-base sm:text-[45px] font-bold mb-1 leading-[75px]">
          Lorem ipsum dolor sit
        </h1>
        <p className="text-xs sm:text-[23px] text-[#8B8B8B] leading-[34px] font-normal mb-1 w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
        <hr className="bg-[#D9D9D9] w-[146px] h-[11px] mt-[18px]"></hr>
      </div>
      <div className="flex flex-col justify-center sm:flex-grow p-2 max-w-xl">
        <h1 className="text-[12px] text-center sm:text-[35px] font-light leading-[72px] non-italic">
          Create an Account
        </h1>
        <form
          onSubmit={handleSubmit}
          className="border border-gray-300 rounded-[20px] mt-1 shrink-0"
        >
          <div className="flex flex-col mt-[70px] mx-14">
            <div className="mt-3">
              <label htmlFor="fullname" className="text-xs sm:text-sm my-3 font-bold">
                Full Name
              </label>
              <input
                id="fullname"
                name="fullname"
                className="border rounded w-full h-4 sm:h-[50px] text-xs sm:text-[15px] p-[14px] shadow-custom"
                placeholder="Email address or username"
                value={formData.fullname}
                onChange={handleChange}
              />
              {errors.fullname && <p className="text-xs text-red-500">{errors.fullname}</p>}
            </div>

            <div className="mt-3">
              <label htmlFor="number" className="text-xs sm:text-sm my-3 font-bold">
                Contact Number
              </label>
              <input
                id="number"
                name="number"
                className="border rounded w-full h-4 sm:h-[50px] text-xs sm:text-[15px] p-[14px] shadow-custom"
                placeholder="Enter your contact number"
                value={formData.number}
                onChange={handleChange}
              />
              {errors.number && <p className="text-xs text-red-500">{errors.number}</p>}
            </div>

            <div className="mt-3">
              <label htmlFor="email" className="text-xs sm:text-sm my-3 font-bold">
                Email ID
              </label>
              <input
                id="email"
                name="email"
                className="border rounded w-full h-4 sm:h-[50px] text-xs sm:text-[15px] p-[14px] shadow-custom"
                placeholder="Your email id"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            <div className="mt-3">
              <label htmlFor="password" className="text-xs sm:text-sm my-3 font-bold">
                Create a Password
              </label>
              <input
                id="password"
                name="password"
                className="border rounded w-full h-4 sm:h-[50px] text-xs sm:text-[15px] p-[14px] shadow-custom"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
            </div>

            <div className="mt-3">
              <label htmlFor="country" className="text-xs sm:text-sm my-3 font-bold">
                Country
              </label>
              <input
                id="country"
                name="country"
                className="border rounded w-full h-4 sm:h-[50px] text-xs sm:text-[15px] p-[14px] shadow-custom"
                placeholder="Enter your country"
                value={formData.country}
                onChange={handleChange}
              />
              {errors.country && <p className="text-xs text-red-500">{errors.country}</p>}
            </div>
          </div>

          <Button link="/login" text="Sign Up"></Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
