import Link from "next/link";

const JobItem = (props) => {
  const cardTime = new Date(props.timestamp);

  const hours = Math.floor(cardTime / (1000 * 60 * 60));

  return (
    <div className="border pt-4 mt-4 ml-4 rounded-xl mr-4 shadow-md">
      <div>
        <div className="grid grid-cols-2">
          <div className="border rounded-r-3xl w-1/2 p-2 bg-[#4CB71A] text-white font-semibold text-sm sm:text-xs">
            <h1 className="flex justify-center">{props.title}</h1>
          </div>
          <div className="flex items-center justify-end mr-16 text-gray-400 text-sm sm:text-xs">
            <h1>Posted {hours} hours ago</h1>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-4 ml-8 text-sm sm:text-xs">
          <div className="flex">
            <h3 className="font-bold mr-1">Job ID:</h3> {props.id}
          </div>
          <div className="flex">
            <h3 className="font-bold mr-1">Job Category:</h3> {props.category}
          </div>
          <div className="flex">
            <h3 className="font-bold mr-1">Employer Name:</h3>
            {props.employerName}
          </div>
        </div>
        <div className="mt-4 ml-8 text-sm sm:text-xs">
          <h1 className="font-bold">Job Description</h1>
          <p className="mt-4">{props.description}</p>
        </div>
        <div className="m-6">
          <Link
            href={`/jobs/${props.id}`}
            className="flex justify-center items-center border rounded-3xl w-1/4 p-3 text-sm sm:text-xs text-white bg-[#292D55]"
          >
            Apply For Job
            <img src="apply.png" className="pl-2 h-6 w-7" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
