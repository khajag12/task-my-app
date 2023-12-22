import Link from "next/link";

const ButtonForm = (props) => {
    return (
        <Link
        href={props.link}
        onClick={props.onClick}
          className="flex items-center justify-center bg-[#4CB71A] uppercase font-bold leading-5 tracking-[1.955px] text-white text-[8px] text-center py-1 px-6 mt-[34px] sm:py-[15px] sm:px-24 sm:text-sm rounded-3xl hover:bg-lime-500 focus:outline-none focus:shadow-outline"
        >
          {props.text}
        </Link>
    );
}
 
export default ButtonForm;