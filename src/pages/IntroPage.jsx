import Footer from "../components/intro/Footer";
import Header from "../components/intro/Header";
import { images } from "../assets/images";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <div className="w-full min-h-screen h-fit">
      <div className="bg-image bg-cover">
        <Header />
        <main className="container main-intro grid grid-cols-1 lg:grid-cols-2 m-auto items-center justify-center ease-in-out duration-1000">
          <div className="order-2 lg:order-1">
            <img
              src={images.arthur}
              alt="Arthur statue"
              className="lg:absolute bottom-[80px] ease-in-out duration-1000"
            />
          </div>
          <div className="h-full flex flex-col gap-[24px] order-1 lg:order-2 px-4 py-24 lg:pb-0 lg:pt-24 ease-in-out duration-1000">
            <Typography
              variant="h1"
              color="amber"
              textGradient
              className="font-extrabold uppercase w-[422px] text-[36px] leading-[36px]"
            >
              Be the King of Your Own Legend
            </Typography>
            <Typography
              color="white"
              className="font-medium text-[18px] leading-[28px]"
            >
              Introducing Arthur Exchange: Where Linea's potential meets DeFi
              innovation. A unified platform merging a Decentralized Exchange
              and Launchpad, Arthur Exchange empowers Linea's community for
              seamless trading and project launches. Join us in shaping the
              future of decentralized finance.
            </Typography>
            <div className="flex items-center gap-16 md:gap-5 xl:block">
              <div className="relative mt-[17.5px] mb-[38px] mx-6">
                <div className="rounded-full w-[132px] h-[132px] bg-[#FFAF1D] opacity-10 absolute -top-[17.5px] -left-[17.5px] animate-pulse animate-infinite animate-duration-1000 animate-ease-in-out"></div>
                <div className="rounded-full w-[113px] h-[113px] bg-[#FFAF1D] opacity-30 absolute -top-[8px] -left-[8px] animate-pulse animate-infinite animate-duration-500 animate-ease-in-out"></div>
                <Button
                  size="lg"
                  className="flex flex-col items-center gap-1 rounded-full w-[97px] h-[97px] relative top-0 bg-[#FFAF1D]"
                >
                  <img
                    src={images.icons.knife}
                    alt="icons"
                    className="w-[50px] animate-bounce animate-infinite animate-duration-500 animate-ease-in-out animate-alternate animate-fill-backwards"
                  />
                  <Typography className="uppercase text-[10px] font-extrabold leading-[12px] text-[#0A071E] ">
                    Launch app
                  </Typography>
                </Button>
              </div>
              <div className="flex flex-col items-start gap-3 xl:flex-row xl:items-center xl:gap-5">
                <Typography
                  variant="h1"
                  color="amber"
                  textGradient
                  className="uppercase text-[#FFAF1D] font-extrabold text-[36px] leading-[36px]"
                >
                  Get ready!
                </Typography>
                <div className="font-bold text-[18px] leading-[28px] text-[#D0D5DD]">
                  <Typography>Arthur Exchange DEX is live on Linea </Typography>
                  <Typography>
                    Join our{" "}
                    <Link to="/" className="text-[#FFAF1D]">
                      community
                    </Link>{" "}
                    to find out more.{" "}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <div className="h-screen"></div> */}

        <Footer />
      </div>
    </div>
  );
};

export default IntroPage;
