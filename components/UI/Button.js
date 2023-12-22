import { Fragment } from "react";
import ButtonForm from "./ButtonForm";

const Submit = (props) => {
  return (
    <Fragment>
      <div className="flex justify-center items-center m-2">
        <ButtonForm onClick={props.onClick} link={props.link} text={props.text}/>
      </div>
      <div className="flex justify-center  mt-[17px] items-center text-gray-400 font-extrabold">
      <hr className="border-2 border-gray-400 w-3"></hr>
      <h1 className=" p-[10px] text-center text-[6px] sm:text-2xl tracking-[4.5px]">
        OR
      </h1>
      <hr className="border-2 border-gray-400 w-3"></hr>
      </div>
      <div className="grid grid-cols-2 mt-[19px] mb-[27px]">
        <button className="flex m-0.5 justify-end ">
          <div className="flex border justify-center items-center rounded-lg text-[6px] sm:text-base py-[10px] pl-2 pr-1">
            <img className="w-6 h-6 mr-1" src="google1.png" alt="Google Logo" />
            {props.text} with Google
          </div>
        </button>
        <button className="flex m-0.5 ">
          <div className="flex justify-center items-center border rounded-lg text-[6px] sm:text-base py-[10px] pl-2 pr-1">
            <img
              className="w-[25px] h-[25px] mr-0.5"
              src="facebook1.png"
              alt="Facebook Logo"
            />
            {props.text} with Facebook
          </div>
        </button>
      </div>
    </Fragment>
  );
};

export default Submit;