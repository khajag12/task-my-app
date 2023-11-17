import Card from "@/components/Card";
import Link from "next/link";

const JobItem = (props) => {
  const currentTime = new Date();
  const cardTime = new Date(props.timestamp);

  const hours = Math.floor(cardTime / (1000 * 60 * 60));

  return (
    <div className="border pt-4 mt-4 ml-4 rounded-xl mr-4 shadow-md">
      <Card>
        <div className="grid grid-cols-2">
        <div className="border rounded-r-3xl w-1/2 p-2 bg-lime-500 text-white font-semibold text-lg">
          <h1 className="flex justify-center">{props.title}</h1>
        </div>
        <div className="flex items-center justify-end mr-16 text-gray-400">
        <h1>Posted {hours} hours ago</h1>
        </div>
        </div>
        <div className="grid grid-cols-3 mt-4 ml-8">
          <div className="flex">
            <h3 className="font-bold">Job ID:</h3> {props.id}
          </div>
          <div className="flex">
            <h3 className="font-bold">Job Category:</h3> {props.category}
          </div>
          <div className="flex">
            <h3 className="font-bold">Employer Name:</h3> {props.employerName}
          </div>
        </div>
        <div className="mt-4 ml-8">
          <h1 className="font-bold">Job Description</h1>
          <p className="mt-4">{props.description}</p>
        </div>
        <div className="m-6">
          <Link href={`/posted-job-listing-page/${props.title}`} className="border rounded-3xl w-1/4 p-3 text-white bg-blue-950">
            Apply For Job
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default JobItem;
