import Link from "next/link";

const ButtonForm = (props) => {
    return (
        <Link
        href={props.link}
        onClick={props.onClick}
          className=" bg-[#4CB71A] text-white text-[8px] text-center py-1 px-6 sm:py-2 sm:px-10 sm:text-xs font-bold rounded-3xl hover:bg-lime-500 focus:outline-none focus:shadow-outline"
        >
          {props.text}
        </Link>
    );
}
 
export default ButtonForm;