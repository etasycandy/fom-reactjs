import { Typography } from "@material-tailwind/react";

import { images } from "../../assets/images";
import { Link } from "react-router-dom";

const Footer = () => {
  const aboutUs = [
    { icon: images.icons.discord, ref: "#", alt: "" },
    { icon: images.icons.twitter, ref: "#", alt: "" },
    { icon: images.icons.icon3, ref: "#", alt: "" },
    { icon: images.icons.icon4, ref: "#", alt: "" },
    { icon: images.icons.icon5, ref: "#", alt: "" },
  ];

  return (
    <div className="sticky bottom-0">
      <div className="w-full h-[80px] bg-[#000] opacity-50"></div>
      <div className="container flex justify-center items-center absolute bottom-5 gap-2 m-auto left-0 right-0 z-10">
        <Typography className="text-[24px] font-bold text-white">
          Find us on
        </Typography>
        {aboutUs.map(({ icon, ref, alt }, index) => {
          return (
            <Link key={index} to={ref}>
              <img src={icon} alt={alt} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
