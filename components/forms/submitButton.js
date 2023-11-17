import { Fragment } from "react";

const Submit = (props) => {
  return (
    <Fragment>
      <div className="flex justify-center">
        <button
          type="submit"
          className=" bg-lime-600 text-white font-bold py-2 px-16 rounded-3xl mt-4 hover:bg-lime-700 focus:outline-none focus:shadow-outline"
        >
          {props.text}
        </button>
      </div>
      <h1 className=" flex justify-center py-[10px] text-gray-400 text-lg">
        -OR-
      </h1>
      <div className="grid grid-cols-2">
        <button className="flex m-1 justify-end">
          <h1 className="flex border rounded-lg p-1">
            <img className="w-5 h-5 mr-2" src="google.png" alt="Google Logo" />
            {props.text} with Google
          </h1>
        </button>
        <button className="flex m-1 justify-start">
          <h1 className="flex border rounded-lg p-1">
            <img
              className="w-10 h-6 mr-2"
              src="facebook.png"
              alt="Facebook Logo"
            />
            {props.text} with Facebook
          </h1>
        </button>
      </div>
    </Fragment>
  );
};

export default Submit;
