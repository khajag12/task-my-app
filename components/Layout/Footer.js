import Logo from "../UI/Logo";

const Footer = () => {
  return (
    <div className="bg-[#937dc2] rounded-t-md w-full">
      <div className="grid grid-cols-2">
        <div className=" pl-8 pt-3 text-[13px] sm:text-[16px]">
          <Logo />
          <p className="text-[7px] sm:text-[10px] text-white pt-2 mb-3 w-4/6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim , quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </p>
        </div>
        <div className="text-[8px] sm:text-[12px] flex justify-center pt-4 text-white">
          <div>
            <h1 className="mb-2">Policies</h1>
            <h1 className="text-[5px] sm:text-[8px] mb-1">Terms and Conditions</h1>
            <h1 className="text-[5px] sm:text-[8px] mb-1">Refund Policy</h1>
            <h1 className="text-[5px] sm:text-[8px] mb-1">Data Privacy</h1>
          </div>
          <div className="pl-5">
            <h1 className="mb-2">About</h1>
            <h1 className="text-[5px] sm:text-[8px] mb-1">Our Story</h1>
            <h1 className="text-[5px] sm:text-[8px] mb-1">Benefits</h1>
            <h1 className="text-[5px] sm:text-[8px] mb-1">Team</h1>
            <h1 className="text-[5px] sm:text-[8px] mb-1">Careers</h1>
          </div>
          <div className="pl-3">
            <h1 className="mb-2">Follow Us</h1>
            <div className="text-[5px] sm:text-[8px] mb-1 flex"><img src="facebook.png" className=" w-[2.5px] h-[2.5px] sm:w-[9px] sm:h-[9px] mr-0.5"/><h1>Facebook</h1></div>
            <div className="text-[5px] sm:text-[8px] mb-1 flex"><img src="twitter.png" className="w-[2.5px] h-[2.5px] sm:w-[9px] sm:h-[9px] mr-0.5"/><h1>Twitter</h1></div>
            <div className="text-[5px] sm:text-[8px] mb-1 flex"><img src="instagram.png" className="w-[2.5px] h-[2.5px] sm:w-[9px] sm:h-[9px] mr-0.5"/><h1>Instagram</h1></div>
          </div>
        </div>
      </div>
      <div className="flex text-[5px] sm:text-[8px] text-[#e0d6ef] pt-2">
          <h1 className="pl-8">
            Copyright © 2020. LogoIpsum. All rights reserved.
          </h1>
          <div className="flex ml-auto pr-8">
            <h1 className="pr-2">Terms & Conditions</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
    </div>
  );
};

export default Footer;
