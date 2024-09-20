import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { images } from "../../assets/images";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 h-[80px] max-w-full animate-fade-down animate-duration-[600ms]">
      <div className="bg-[#000] opacity-50 w-full h-[80px] rounded-none py-2 px-4 lg:px-8 lg:py-4"></div>
      <div className="container flex justify-between absolute m-auto top-3 left-0 right-0 z-10">
        <Link to="/" className="mr-4 cursor-pointer font-medium">
          <img src={images.logo} alt="" className="w-[120.38px]" />
        </Link>
        <Button
          color="amber"
          variant="gradient"
          size="lg"
          className="flex gap-[12px] py-[12px] px-[42px]"
        >
          <img src={images.icons.knife} alt="" className="w-[24px]" />{" "}
          <span className="text-[18px] leading-[28px] capitalize">
            Launch App
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
