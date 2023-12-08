"use client";
import { useRef } from "react";
import { dummyData } from "@/components/JobList";
import { useParams } from "next/navigation";
import ButtonForm from "@/components/UI/ButtonForm";

const ProposalCard = (props) => {
  
  const { id } =useParams();
  const data = dummyData.find((item) => item.id === id);

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
        <h1 className="text-2xl">Create your proposal</h1>
        <div className="flex items-center w-4/6 bg-[#4CB71A] rounded mt-4">
          <h1 className="text-sm md:text-lg text-white pl-8 py-2 w-5/6">
            {data.title}
          </h1>
          <div className="flex items-center justify-end w-full mr-5">
          <h1 className="text-white text-xs sm:text-[13px] md:text-sm mr-2">Client Name</h1>
          <img src="/client.png" className="w-7 h-7"/>
          </div>
        </div>
        <form>
          <div className="flex pt-4">
            <label>Subject</label>
            <h1 className="text-red-600 pl-1">*</h1>
          </div>

          <div>
            <input
              placeholder="Enter your subject here..."
              className="border border-gray-400 rounded w-4/6 py-3 pl-6 text-xs md:text-base"
            />
          </div>
          <div className="flex pt-4">
            <label>Your Proposal</label>
            <h1 className="text-red-600 pl-1">*</h1>
          </div>
          <div>
            <input
              placeholder="Describe your proposal here..."
              className="border border-gray-400 rounded w-4/6 pb-[100px] pl-6 h-40 text-xs md:text-base"
            />
          </div>
          <div>
            <div className="flex pt-4 pb-2">
              <label htmlFor="upload" className="text-lg">
                Upload necessary documents
              </label>
              <h1 className="text-gray-500 flex items-center pl-1">(if any)</h1>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="bg-[#292D55] rounded py-4 w-4/6 text-white mb-6"
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
            <ButtonForm link="" type="submit" text="Proceed to Payout"></ButtonForm>
          </div>
        </form>
      </div>

      <div className="bg-gradient-to-b from-[#292D55] to-[#0a0c25] w-2/6 mr-10 mt-10 rounded-r-xl">
          <div className=" flex items-center mt-24 relative">
            <h1 className="text-white text-sm sm:text-lg md:text-2xl ml-6">How it works ?</h1>
            <img src="/light.png" className="absolute right-0 w-10 md:w-20"></img>
          </div>

        <div className="px-8 pt-8">
          <div className=" flex items-center py-4 rounded-xl bg-gradient-to-r from-[#4B4E6F] to-transparent">
            <img src="/googleForm.png" className="ml-3 w-6 h-6 sm:w-10 sm:h-10"></img>
            <h1 className="text-white ml-2 text-[8px] sm:text-xs md:text-sm">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit
            </h1>
          </div>
          <div className="flex items-center py-4 mt-4 rounded-xl bg-gradient-to-r from-[#4B4E6F] to-transparent">
            <img src="/email.png" className="ml-3 w-6 h-6 sm:w-10 sm:h-10"></img>
            <h1 className="text-white ml-2 text-[8px] sm:text-xs md:text-sm">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit
            </h1>
          </div>
          <div className="flex items-center py-4 mt-4 rounded-xl bg-gradient-to-r from-[#4B4E6F] to-transparent">
            <img src="/speak.png" className="ml-3 w-6 h-6 sm:w-10 sm:h-10"></img>
            <h1 className="text-white ml-2 text-[8px] sm:text-xs md:text-sm">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit
            </h1>
          </div>
        </div>
        <div className="flex justify-center w-full">
        <img src="/image.png" className=" h-2/6 w-3/6"/>
        </div>
      </div>
    </div>
  );
};

export default ProposalCard;
