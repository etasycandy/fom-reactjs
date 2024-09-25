import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link, useParams } from "react-router-dom";
import productsData from "../assets/fake-data/products";
import {
  Button,
  Rating,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Badge } from "flowbite-react";
import CardProduct from "../components/CardProduct";

const DetailProduct = () => {
  const responsive = {
    xxl: {
      breakpoint: { max: 9999, min: 1280 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    xl: {
      breakpoint: { max: 1280, min: 960 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    md: {
      breakpoint: { max: 960, min: 720 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    sm: {
      breakpoint: { max: 720, min: 550 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    sm1: {
      breakpoint: { max: 550, min: 375 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    sm2: {
      breakpoint: { max: 375, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const respProductCategory = {
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

  const params = useParams();
  const product = productsData.getBySlug(params.slug);

  const [mainImage, setMainImage] = useState(product.images[0]);
  const changeImage = (event) => setMainImage(event.target.src);

  let [qty, setQty] = useState(1);

  const handlePlus = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const handleMinus = () => {
    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  };

  let [type, setType] = useState();

  const handleType = (event) => setType(event.target.value);

  const data = [
    {
      label: "Thông tin chi tiết",
      value: "thông tin chi tiết",
      items: product.content,
    },
    {
      label: "Đánh giá",
      value: "đánh giá",
      items: product.reviews,
    },
  ];

  const productByCategory = productsData.getByCategorySlug(
    product.categorySlug,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <>
      <section className="py-8 container m-auto mt-14 mb-7 rounded-md shadow-sm bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          {product ? (
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div className="w-full lg:sticky top-0 text-center">
                <div className="lg:h-[560px] shadow rounded-md">
                  <img
                    id="mainImage"
                    src={mainImage}
                    alt="Product"
                    className="w-full h-full rounded-md object-cover object-top"
                  />
                </div>

                <div className="h-28 mx-auto mt-2 mb-16 lg:mb-4 py-2">
                  <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    infinite={true}
                    partialVisible={false}
                    className="z-0"
                  >
                    {product.images.map((image, index) => (
                      <div
                        key={index}
                        className="h-full w-28 overflow-hidden flex justify-center items-center rounded-md cursor-pointer mx-3 border-2 border-opacity-70 opacity-70 hover:border-blue-500 hover:opacity-100 transition duration-300"
                      >
                        <img
                          src={image}
                          alt={`image-product ${index + 1}`}
                          className="w-full object-cover shadow"
                          onClick={changeImage}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-0">
                {product.warehouse < 1 ? (
                  <Badge color="failure" className="w-fit mb-3">
                    Sold out
                  </Badge>
                ) : (
                  <Badge color="success" className="w-fit mb-3">
                    In stock
                  </Badge>
                )}

                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                  {product.name}
                </h1>

                <div className="flex items-center gap-2 mt-2 sm:mt-3">
                  <Rating
                    ratedColor="orange"
                    value={Math.floor(product.totalStar)}
                    readonly
                  />
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    ({product.totalStar.toFixed(1)})
                  </p>
                  <Link
                    to="/"
                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                  >
                    {product.qtySold} Purchases
                  </Link>
                </div>
                <div className="mt-5 sm:items-center sm:gap-6 sm:flex">
                  <Typography
                    color="blue"
                    className="text-2xl font-extrabold sm:text-3xl dark:text-white"
                  >
                    {new Intl.NumberFormat("vi-VN").format(product.sale)}đ
                  </Typography>
                  {product.price > product.sale ? (
                    <Typography
                      color="yellow"
                      className="text-md font-bold sm:text-xl dark:text-white line-through"
                    >
                      {new Intl.NumberFormat("vi-VN").format(product.price)}đ
                    </Typography>
                  ) : (
                    ""
                  )}
                </div>

                <div className="flex items-center my-4 gap-1">
                  <Typography color="gray" className="text-sm font-medium">
                    Quatity
                  </Typography>
                  <Tooltip content="Quantity: Number of units to purchase.">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-5 w-5 cursor-pointer text-gray-900"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </Tooltip>
                  <div className="flex items-center gap-1 ml-3">
                    <Button
                      onClick={handleMinus}
                      className="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2"
                    >
                      <i className="fa-solid fa-minus"></i>
                    </Button>
                    <Typography
                      color="blue"
                      className="mx-4 font-bold text-2xl"
                    >
                      {qty}
                    </Typography>
                    <Button
                      onClick={handlePlus}
                      className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </Button>
                  </div>
                </div>

                <Typography color="gray" className="text-sm font-medium mb-2">
                  Type
                </Typography>
                <div className="flex gap-3">
                  {product.types.map((item, index) => (
                    <Button
                      key={index}
                      value={item}
                      color="blue"
                      size="sm"
                      variant={type === item ? "filled" : "outlined"}
                      onClick={handleType}
                    >
                      {item}
                    </Button>
                  ))}
                </div>

                <div className="mt-6 gap-5 sm:items-center sm:flex">
                  <button
                    href="#"
                    title=""
                    className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    role="button"
                  >
                    <svg
                      className="w-5 h-5 -ms-2 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                    Add to favorites
                  </button>

                  <button
                    href="#"
                    title=""
                    className="text-white mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center"
                    role="button"
                    onClick={() => {
                      console.log("click");
                    }}
                    disabled={product.warehouse < 1}
                  >
                    <svg
                      className="w-5 h-5 -ms-2 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>

                <hr className="mt-8 mb-4 border-gray-200" />

                <p className="mb-6 text-gray-500 leading-8">{product.desc}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>

      <div className="p-8 container m-auto mb-8 rounded-md shadow-sm bg-white antialiased">
        <Tabs value="thông tin chi tiết">
          <TabsHeader className="w-[90%] m-auto mb-4 lg:w-1/2 z-0">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="font-semibold text-md">
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, items }) => (
              <TabPanel key={value} value={value}>
                <p>{items}</p>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>

      <div className="container m-auto mb-14">
        <Typography
          color="gray"
          className="text-3xl uppercase font-bold text-white py-3 px-7 bg-orange-500 w-fit rounded-full m-auto"
        >
          Sản phẩm tương tự
        </Typography>

        <Carousel
          responsive={respProductCategory}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          infinite={true}
          partialVisible={false}
          className="my-8"
        >
          {productByCategory.map((item, index) => {
            return (
              <div key={index} className="mx-3">
                <CardProduct item={item} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default DetailProduct;
