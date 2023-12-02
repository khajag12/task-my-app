const ButtonForm = (props) => {
    return (
        <button
          type="submit"
          className=" bg-[#4CB71A] text-white text-[7px] text-center py-1 px-6 sm:py-2 sm:px-10 sm:text-[10px] font-bold rounded-3xl hover:bg-lime-500 focus:outline-none focus:shadow-outline"
        >
          {props.text}
        </button>
    );
}
 
export default ButtonForm;