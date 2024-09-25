import { Carousel } from "@material-tailwind/react";
import { images } from "../assets/images";
import Common from "../components/Common";
import Pharmacy from "../components/Pharmacy";
import BestSeller from "../components/BestSeller";
import SuggestProducts from "../components/SuggestProducts";

const HomePage = () => {
  const listImageCarousel = [
    { image: images.carousel.image1, alt: "banner-01" },
    { image: images.carousel.image2, alt: "banner-02" },
    { image: images.carousel.image3, alt: "banner-03" },
    { image: images.carousel.image4, alt: "banner-04" },
    { image: images.carousel.image5, alt: "banner-05" },
  ];

  window.scrollTo(0, 0);
  return (
    <>
      {/* Carousel & Banner */}
      <div className="lg:container mt-0 m-auto lg:my-4 flex items-center gap-4 h-[18rem] lg:h-[24rem]">
        <Carousel
          transition={{ duration: 0.8 }}
          autoplay={true}
          loop={true}
          autoplayDelay={2500}
          className="lg:rounded-xl w-full xl:w-2/3 h-full"
        >
          {listImageCarousel.map(({ image, alt }, index) => {
            return (
              <img
                key={index}
                src={image}
                alt={alt}
                className="h-full w-full object-cover"
              />
            );
          })}
        </Carousel>
        <div className="hidden w-1/3 h-full xl:flex flex-col gap-4">
          <div className="h-1/2 w-full rounded-xl overflow-hidden">
            <img
              src={images.banner.banner1}
              alt="banner"
              className="h-full object-cover"
            />
          </div>
          <div className="h-1/2 w-full rounded-xl overflow-hidden">
            <img
              src={images.banner.banner2}
              alt="banner"
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Common */}
      <Common />

      {/* Farmacy */}
      <Pharmacy />

      {/* Best Seller */}
      <BestSeller />

      {/* Suggest Products */}
      <SuggestProducts />
    </>
  );
};

export default HomePage;
