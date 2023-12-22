import Link from "next/link";

const JobItem = (props) => {
  const cardTime = new Date(props.timestamp);

  const hours = Math.floor(cardTime / (1000 * 60 * 60));

  return (
    <div className="border pt-4 mt-4 ml-4 rounded-xl mr-4 shadow-md h-[410px] w-[1034px] inline-flex flex-col">
      <div>
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center border rounded-r-[50px] w-[312px] h-[49px] bg-[#4CB71A] text-white ">
            <h1 className="text-base md:text-[23px] leading-[72px] font-semibold">
              {props.title}
            </h1>
          </div>
          <div className="flex items-center justify-end mr-16 text-[#9E9E9E] text-sm sm:text-[16px] leading-[25px] font-medium tracking-[0.5px]">
            <h1>Posted {hours} hours ago</h1>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-4 ml-8 text-sm md:text-[18px]">
          <div className="flex items-center">
            <h3 className="font-bold text-xs md:text-base leading-[25px] tracking-[0.5px] mr-1">
              Job ID:
            </h3>{" "}
            {props.id}
          </div>
          <div className="flex items-center">
            <h3 className="font-bold text-xs md:text-base leading-[25px] tracking-[0.5px] mr-1">
              Job Category:
            </h3>{" "}
            {props.category}
          </div>
          <div className="flex items-center">
            <h3 className="font-bold text-xs md:text-base leading-[25px] tracking-[0.5px] mr-1">
              Employer Name:
            </h3>
            {props.employerName}
          </div>
        </div>
        <div className="mt-4 ml-8 font-bold text-xs md:text-base leading-[25px] tracking-[0.5px]">
          <h1>Job Description</h1>
          <p className="mt-4 text-base md:text-[20px] font-normal leading-normal">
            {props.description}
          </p>
        </div>
      </div>
      <div className="ml-[37px] mt-auto flex items-end mb-[39px]">
        <Link
          href={`/jobs/${props.id}`}
          className="flex justify-center items-center border rounded-[50px] w-[262px] h-[57px] p-3 text-sm md:text-[23px] text-white bg-[#292D55]"
        >
          Apply For Job
          <img
            src="apply.png"
            className="pl-2 h-[18px] w-[18px] md:h-[29px] md:w-[29px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default JobItem;
