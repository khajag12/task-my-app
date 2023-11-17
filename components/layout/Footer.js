const Footer = (className) => {
  return (
    <div className="grid grid-cols-3 pt-12 bg-violet-400">
      <div className="ml-48 ">
        <h1 className="uppercase text-white text-2xl pb-4">logo</h1>
        <p className=" text-white text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim , quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <h3 className="text-white text-xs mt-24">Copyright © 2020. LogoIpsum. All rights reserved.</h3>
      </div>
      <div className="ml-auto">
        <div className=" text-white text-xl">
          <h1>Policies</h1>
        </div>
        <br></br>
        <div>
        <button className="text-white text-sm">Refund policy</button>
        <br></br>
        <br></br>
        <button className="text-white text-sm">Terms and Conditions</button>
        <br></br>
        <br></br>
        <button className="text-white text-sm">Data privacy</button>
        </div>
      </div>
      <div className="grid grid-cols-2 text-white ml-12">
        <div className="text-sm">
          <h1 className="text-xl">About</h1>
          <br></br>
          <button>Our Story</button>
          <br></br>
          <br></br>
          <button>Benefits</button>
          <br></br>
          <br></br>
          <button>Team</button>
          <br></br>
          <br></br>
          <button>Careers</button>
          <br></br>
          <button className="text-white text-xs mt-[45px]">Terms & Conditions</button>
        </div>
        <div className="text-sm">
          <h1  className="text-xl">Follow Us</h1>
          <br></br>
          <button>Facebook</button>
          <br></br>
          <br></br>
          <button>Twitter</button>
          <br></br>
          <br></br>
          <button>Instagram</button>
          <br></br>
          <button className="text-white text-xs mt-[84px] mb-4">Privacy policy</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
