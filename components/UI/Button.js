import { Fragment } from "react";
import ButtonForm from "./ButtonForm";

const Submit = (props) => {
  return (
    <Fragment>
      <div className="flex justify-center items-center m-2">
        <ButtonForm text={props.text}/>
      </div>
      <div className="flex justify-center items-center text-gray-300">
      <hr className="border w-1/12"></hr>
      <h1 className="px-0.5 text-center text-[5px] sm:text-[8px]">
        OR
      </h1>
      <hr className="border w-1/12"></hr>
      </div>
      <div className="grid grid-cols-2 m-1">
        <button className="flex m-0.5 justify-end">
          <div className="flex border justify-center items-center rounded-sm text-[4px] sm:text-[8px]">
            <img className="w-2 h-2 mr-1 sm:w-3 sm:h-3" src="google1.png" alt="Google Logo" />
            {props.text} with Google
          </div>
        </button>
        <button className="flex m-0.5">
          <div className="flex justify-center items-center border rounded-sm text-[4px] sm:text-[8px]">
            <img
              className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5"
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