import Button from "@/components/UI/Button";

const Home = () => {
  return (
    <div className="flex justify-center items-center p-4 min-h-screen">
      <div className="sm:block hidden mt-10 m-12">
        <img src="task.png" className="w-7/12 h-7/12" />
        <h1 className="text-sm sm:text-base font-bold mb-1">Lorem ipsum dolor sit </h1>
        <p className="text-[5px] sm:text-xs text-gray-400 mb-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
        <hr className="border-2 border-gray-300 w-3/12"></hr>
      </div>
      <div className="flex flex-col sm:flex-grow p-2 max-w-md">
        <h1 className="text-[12px] text-center sm:text-lg">
          Create an Account
        </h1>
        <form className="border border-gray-300 rounded-lg p-8 mt-1">
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm">Full Name</label>
            <input
              className="border rounded w-full h-4 sm:h-6 text-[5px] sm:text-xs mt-1"
              placeholder="Email address or username"
            />

            <label className="text-xs sm:text-sm mt-3">Contact Number</label>
            <input
              className="border rounded w-full h-4 sm:h-6 text-[5px] sm:text-xs mt-1"
              placeholder="Enter your contact number"
            />

            <label className="text-xs sm:text-sm mt-3">Email ID</label>
            <input
              className="border rounded w-full h-4 sm:h-6 text-[5px] sm:text-xs mt-1"
              placeholder="Your email id"
            />

            <label className="text-xs sm:text-sm mt-3">Create a Password</label>
            <input
              className="border rounded w-full h-4 sm:h-6 text-[5px] sm:text-xs mt-1"
              placeholder="Password"
            />

            <label className="text-xs sm:text-sm mt-3">Country</label>
            <input
              className="border rounded w-full h-4 sm:h-6 text-[5px] sm:text-xs mt-1"
              placeholder="Enter your country"
            />
          </div>

          <Button text="Sign Up"></Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
