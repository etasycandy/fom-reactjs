import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import pharmacyData from "../assets/fake-data/pharmacy";

const Pharmacy = () => {
  const responsive = {
    xxl: {
      breakpoint: { max: 9999, min: 1280 },
      items: 5,
      slidesToSlide: 4, // optional, default to 1.
    },
    xl: {
      breakpoint: { max: 1280, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    lg: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    md: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    sm: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const infoPharmacy = pharmacyData.getAll();
  return (
    <div className="bg-white w-full py-10 my-10 shadow-sm">
      <h1 className="font-bold uppercase text-3xl mb-2 text-center">
        Nhà thuốc gần bạn
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Hãy tìm kiếm và lựa chọn nhà thuốc phù hợp với bạn nhé!
      </p>

      <div className="slider container m-auto">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          infinite={true}
          partialVisible={false}
          className="z-0"
        >
          {infoPharmacy.map((item, index) => {
            return (
              <Link
                to={`/pharmacy/${item.slug}`}
                className="item flex flex-col justify-center items-center gap-4 mx-5 font-bold text-lg"
                key={index}
              >
                <div className="bg-red-500 rounded-full w-44 h-44 overflow-hidden">
                  <img
                    src={item.uri}
                    alt={item.slug}
                    className="object-cover h-full"
                  />
                </div>
                <h3>{item.name}</h3>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Pharmacy;
