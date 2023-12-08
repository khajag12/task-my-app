"use client";

import Button from "@/components/UI/Button";

import useInput from "../hooks/useInput";

const Home = () => {
  const { formData, errors, handleChange, handleSubmit } = useInput();

  return (
    <div className="flex justify-center items-center p-4 min-h-screen">
      <div className="sm:block hidden mt-10 m-12">
        <img src="task.png" className="w-7/12 h-7/12" />
        <h1 className="text-base sm:text-xl font-bold mb-1">
          Lorem ipsum dolor sit
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 mb-1 max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
        <hr className="border-2 border-gray-300 w-3/12"></hr>
      </div>
      <div className="flex flex-col sm:flex-grow p-2 max-w-md">
        <h1 className="text-[12px] text-center sm:text-lg">
          Create an Account
        </h1>
        <form
          onSubmit={handleSubmit}
          className="border border-gray-300 rounded-lg p-8 mt-1"
        >
          <div className="flex flex-col">
            <div className="mt-3">
              <label htmlFor="fullname" className="text-xs sm:text-sm">
                Full Name
              </label>
              <input
                id="fullname"
                name="fullname"
                className="border rounded w-full h-4 sm:h-6 text-xs sm:text-sm mt-1"
                placeholder="Email address or username"
                value={formData.fullname}
                onChange={handleChange}
              />
              {errors.fullname && <p className="text-xs text-red-500">{errors.fullname}</p>}
            </div>

            <div className="mt-3">
              <label htmlFor="number" className="text-xs sm:text-sm mt-3">
                Contact Number
              </label>
              <input
                id="number"
                name="number"
                className="border rounded w-full h-4 sm:h-6 text-xs sm:text-sm mt-1"
                placeholder="Enter your contact number"
                value={formData.number}
                onChange={handleChange}
              />
              {errors.number && <p className="text-xs text-red-500">{errors.number}</p>}
            </div>

            <div className="mt-3">
              <label htmlFor="email" className="text-xs sm:text-sm mt-3">
                Email ID
              </label>
              <input
                id="email"
                name="email"
                className="border rounded w-full h-4 sm:h-6 text-xs sm:text-sm mt-1"
                placeholder="Your email id"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            <div className="mt-3">
              <label htmlFor="password" className="text-xs sm:text-sm mt-3">
                Create a Password
              </label>
              <input
                id="password"
                name="password"
                className="border rounded w-full h-4 sm:h-6 text-xs sm:text-sm mt-1"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
            </div>

            <div className="mt-3">
              <label htmlFor="country" className="text-xs sm:text-sm mt-3">
                Country
              </label>
              <input
                id="country"
                name="country"
                className="border rounded w-full h-4 sm:h-6 text-xs sm:text-sm mt-1"
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
