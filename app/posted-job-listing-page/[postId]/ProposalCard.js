"use client";
import { useRef } from "react";


const ProposalCard = () => {
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

 
  return (

  

    <div className="flex mb-10 bg-white">
      <div className="bg-white pt-16 pl-10 mb-10 w-4/6">
        <h1 className="text-2xl font-semibold">Create your proposal</h1>
        <div className="flex w-4/6 bg-lime-500 rounded mt-4">
          <h1 className="flex items-center text-lg text-white pl-8 py-2 w-5/6">
            Job Headline Demo
          </h1>
          <h1 className="flex place-items-center text-white">Client Name</h1>
        </div>
        <form>
          <div className="flex pt-4">
            <label>Subject</label>
            <h1 className="text-red-600 pl-1">*</h1>
          </div>

          <div>
            <input
              placeholder="Enter your subject here..."
              className="border border-gray-400 rounded w-4/6 py-2"
            />
          </div>
          <div className="flex pt-4">
            <label>Your Proposal</label>
            <h1 className="text-red-600 pl-1">*</h1>
          </div>
          <div>
            <input
              placeholder="Describe your proposal here..."
              className="border border-gray-400 rounded w-4/6 py-2"
            />
          </div>
          <div>
            <div className="flex pt-4 pb-2">
              <label htmlFor="upload" className="text-lgw">
                Upload necessary documents
              </label>
              <h1 className="text-gray-500 flex items-center pl-1">(if any)</h1>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="bg-indigo-800 rounded py-4 w-4/6 text-white mb-6"
              >
                Upload Your Files
              </button>
              <h1 className="text-xs mt-2 text-gray-400 mb-6">
                Attach file. File size of your documents should not exceed 10MB
              </h1>
              <input
                ref={hiddenFileInput}
                onChange={handleChange}
                type="file"
                id="upload"
                style={{ display: "none" }}
              />
            </div>
          </div>

          <div className="flex justify-center w-4/6">
            <button
              type="submit"
              className=" bg-lime-600 text-white font-bold py-2 px-16 rounded-3xl mt-4 mb-4 hover:bg-lime-700 focus:outline-none focus:shadow-outline"
            >
              Proceed to payout
            </button>
          </div>
        </form>
      </div>

      <div className="bg-indigo-900 w-2/6 mr-10 mt-10 rounded-r-xl">
        <div className="flex">
          <div className="w-4/6">
            <h1 className="text-white text-3xl mt-24 ml-6">How it works ?</h1>
          </div>
          <div>
          <img src="/light.png" className="mt-12"></img>
          </div>
        </div>

        <div className="px-8 pt-8">
          <div className=" flex py-4 rounded-xl bg-gradient-to-r from-zinc-500 to-transparent">
            <img src="/googleForm.png" className="ml-3"></img>
            <h1 className="text-white ml-2">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit
            </h1>
          </div>
          <div className="flex py-4 mt-4 rounded-xl bg-gradient-to-r from-zinc-500 to-transparent">
            <img src="/email.png" className="ml-3"></img>
            <h1 className="text-white ml-2">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit
            </h1>
          </div>
          <div className="flex py-4 mt-4 rounded-xl bg-gradient-to-r from-zinc-500 to-transparent">
            <img src="/speak.png" className="ml-3"></img>
            <h1 className="text-white ml-2">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalCard;
