import Logo from "../UI/Logo";

const Footer = () => {
  return (
    <div className="bg-[#937dc2] rounded-t-md w-full">
      <div className="grid grid-cols-2">
        <div className="ml-[180px] mt-9 text-[13px] sm:text-[16px]">
          <Logo style=" text-[30px]" />
          <p className="text-[7px] sm:text-[15px] font-normal tracking-[-0.205px] text-white pt-2 mb-3 w-4/6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim , quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </p>
        </div>
        <div className="flex justify-center mt-12 text-white">
          <div className="text-[15px] font-normal tracking-[-0.205px] mr-4">
            <h1 className="mb-10 text-[20px]">Policies</h1>
            <h1 className="mb-6">Terms and Conditions</h1>
            <h1 className="mb-6">Refund Policy</h1>
            <h1 className="mb-6">Data Privacy</h1>
          </div>
          <div className="pl-5 text-[15px] font-normal tracking-[-0.205px] mr-4">
            <h1 className="mb-8 text-[20px]">About</h1>
            <h1 className="mb-8">Our Story</h1>
            <h1 className="mb-8">Benefits</h1>
            <h1 className="mb-8">Team</h1>
            <h1 className="mb-8">Careers</h1>
          </div>
          <div className="pl-3 text-[15px] font-normal tracking-[-0.205px]">
            <h1 className="mb-8 text-[20px]">Follow Us</h1>
            <div className="mb-8 flex items-center">
              <img
                src="facebook.png"
                className="w-[2.5px] h-[2.5px] sm:w-[10px] sm:h-[20px] mx-[13px]"
              />
              <span>Facebook</span>
            </div>
            <div className="mb-8 flex items-center">
              <img
                src="twitter.png"
                className="w-[2.5px] h-[2.5px] sm:w-[20px] sm:h-[16px] mx-2"
              />
              <span>Twitter</span>
            </div>
            <div className="mb-8 flex items-center">
              <img
                src="instagram.png"
                className="w-[2.5px] h-[2.5px] sm:w-[20px] sm:h-[20px] mx-2"
              />
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-[5px] sm:text-[15px] font-normal text-[#e0d6ef] mt-16 pb-6">
        <h1 className="ml-[180px]">
          Copyright © 2020. LogoIpsum. All rights reserved.
        </h1>
        <div className="flex ml-auto mr-24">
          <h1 className="pr-10">Terms & Conditions</h1>
          <h1>Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
