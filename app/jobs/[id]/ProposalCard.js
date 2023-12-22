"use client";
import { useRef } from "react";
import { dummyData } from "@/components/JobList";
import { useParams } from "next/navigation";
import ButtonForm from "@/components/UI/ButtonForm";

const ProposalCard = (props) => {
  const { id } = useParams();
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
    <div className="flex mb-10 bg-white w-full px-[55px] pt-[59px]">
      <div className="bg-white w-4/6">
        <div className="border rounded-[10px] px-10 pt-9">
          <span className="flex items-center text-3xl font-semibold leading-[72px] text-center">
            Create your proposal
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6157 34.7593C22.1117 35.2633 21.25 34.9064 21.25 34.1936V16.8064C21.25 16.0936 22.1117 15.7367 22.6157 16.2407L31.3093 24.9343C31.6217 25.2467 31.6217 25.7533 31.3093 26.0657L22.6157 34.7593Z" fill="#4CB71A"/>
</svg>

          </span>
          <div className="flex items-center bg-[#4CB71A] rounded h-[49px]">
            <span className="text-sm md:text-[20px] font-semibold leading-[72px] text-white pl-[30px] w-5/6">
              {data.title}
            </span>
            <div className="flex items-center justify-end w-full mr-5">
              <h1 className="text-white text-xs sm:text-[13px] md:text-[18px] font-medium leading-[72px] mr-2">
                Client Name
              </h1>
              <img src="/client.png" className="w-5 h-5" />
            </div>
          </div>
          <form>
            <div className="flex text-lg font-semibold leading-[72px]">
              <label>Subject</label>
              <h1 className="text-red-600 pl-1">*</h1>
            </div>

            <div>
              <input
                placeholder="Enter your subject here..."
                className="border border-[#B1B0B0] rounded-[5px] w-full py-3 pl-6 text-xs md:text-sm font-normal tracking-[0.5px] leading-[22px]"
              />
            </div>
            <div className="flex text-lg font-semibold leading-[72px]">
              <label>Your Proposal</label>
              <h1 className="text-red-600 pl-1">*</h1>
            </div>
            <div>
              <input
                placeholder="Describe your proposal here..."
                className="border border-[#B1B0B0] rounded-[5px] w-full pb-[100px] pl-6 h-40 text-xs md:text-sm font-normal tracking-[0.5px] leading-[22px]"
              />
            </div>
            <div>
              <div>
                <span
                  htmlFor="upload"
                  className="text-lg leading-[72px] font-light text-black"
                >
                  Upload necessary documents (if any)
                </span>
                <button
                  onClick={handleClick}
                  className="bg-[#292D55] flex justify-center items-center rounded w-full text-white text-lg font-normal leading-[30px] py-[23px] mb-8"
                >
                  Upload your documents
                  <svg width="29" height="29" className="ml-2" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5939 24.1667H7.58245C5.81023 24.1667 4.30485 23.5474 3.06631 22.3088C1.82777 21.0703 1.2085 19.5649 1.2085 17.7927C1.2085 16.2219 1.71197 14.8423 2.71891 13.6542C3.72586 12.466 5.00468 11.751 6.55537 11.5094C6.95815 9.55589 7.90468 7.95988 9.39495 6.72134C10.8852 5.4828 12.6071 4.86353 14.5606 4.86353C16.8161 4.86353 18.7193 5.68419 20.27 7.3255C21.8206 8.96682 22.596 10.9354 22.596 13.2312V13.9562C24.046 13.916 25.2745 14.3842 26.2814 15.3609C27.2884 16.3377 27.7918 17.5712 27.7918 19.0614C27.7918 20.451 27.2884 21.6493 26.2814 22.6562C25.2745 23.6632 24.0762 24.1667 22.6866 24.1667H15.4064V14.5604L17.9137 17.0677L19.2127 15.7687L14.5002 11.0562L9.78766 15.7687L11.0866 17.0677L13.5939 14.5604V24.1667Z" fill="white"/>
</svg>

                </button>
                <span className="text-[10px] text-[#8E8E8E] leading-[16px] tracking-[0.5px]">
                  Attach file. File size of your documents should not exceed
                  10MB
                </span>
                <input
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  type="file"
                  id="upload"
                  style={{ display: "none" }}
                />
              </div>
            </div>

            <div className="flex justify-center mb-9">
              <ButtonForm
                link=""
                type="submit"
                text="Proceed to Payout"
              ></ButtonForm>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#292D55] to-[#0a0c25] w-2/6 rounded-r-xl h-full">
        <div className=" flex items-center relative">
          <div className="ml-6 mt-[110px]">
            <span className="text-white text-sm sm:text-lg md:text-[40px] font-bold leading-[72px]">
              How it works ?
            </span>
            <hr className="bg-[#4CB71A] w-[46px] h-[3px] mt-4"></hr>
            <hr className="bg-[#4CB71A] w-[86px] h-[3px] mt-2"></hr>
          </div>
          <img
            src="/light.png"
            className="absolute right-0 w-10 md:w-[120px] mt-[72px]"
          ></img>
        </div>

        <div className="mx-8 mt-16">
          <div className=" flex items-center h-[86px] rounded-xl bg-gradient-to-r from-[#4B4E6F] to-transparent">
            <img
              src="/googleForm.png"
              className="ml-[25px] w-10 h-10 sm:w-10 sm:h-10"
            ></img>
            <span className="text-[#E2E2E2] ml-4 text-xl leading-[24px]">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit
            </span>
          </div>
          <div className="flex items-center h-[86px] mt-[25px] rounded-xl bg-gradient-to-r from-[#4B4E6F] to-transparent">
            <img src="/email.png" className="ml-[25px] w-10 h-10"></img>
            <span className="text-[#E2E2E2] ml-4 text-xl leading-[24px]">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit
            </span>
          </div>
          <div className="flex items-center h-[86px] mt-[25px] rounded-xl bg-gradient-to-r from-[#4B4E6F] to-transparent">
            <img
              src="/speak.png"
              className="ml-[25px] w-10 h-10 sm:w-10 sm:h-10"
            ></img>
            <span className="text-[#E2E2E2] ml-4 text-xl leading-[24px]">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/image.png" className="h-[283px] w-[311px]" />
        </div>
      </div>
    </div>
  );
};

export default ProposalCard;
