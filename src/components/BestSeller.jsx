import Carousel from "react-multi-carousel";
import CardProduct from "./CardProduct";
import products from "../assets/fake-data/products";

const BestSeller = () => {
  const responsive = {
    xl: {
      breakpoint: { max: 9999, min: 1280 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    lg: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    md: {
      breakpoint: { max: 1024, min: 720 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    sm: {
      breakpoint: { max: 720, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const productsBestSeller = products.getProductsBestSeller();

  return (
    <div className="w-full my-10">
      <h1 className="font-bold uppercase text-3xl mb-2 text-center bg-orange-500 w-fit py-2 px-8 text-white rounded-full m-auto">
        Sản phẩm bán chạy
      </h1>

      <div className="slider container m-auto my-10">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          infinite={true}
          partialVisible={false}
        >
          {productsBestSeller.map((item, index) => {
            return (
              <div key={index} className="mx-3">
                <CardProduct item={item} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default BestSeller;
