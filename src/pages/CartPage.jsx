import products from "../assets/fake-data/products";
import { Link } from "react-router-dom";
import { images } from "../assets/images";
import { Button, Tooltip, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/action";
import CardProduct from "../components/CardProduct";
import Carousel from "react-multi-carousel";
import { useEffect } from "react";

const CartPage = () => {
  const responsive = {
    xl: {
      breakpoint: { max: 9999, min: 1320 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    lg: {
      breakpoint: { max: 1320, min: 720 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  // Cart
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handlePlus = (productId) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: productId, quantity: 1 },
    });
  };

  const handleMinus = (productId) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: productId, quantity: -1 },
    });
  };

  const productsBestSeller = products.getProductsBestSeller();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="relative bg-white h-56 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
        <div className="h-56 flex justify-center items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 z-10 relative">
          <h1 className="mb-2 text-4xl stroke-2 stroke-blue-500 font-extrabold uppercase tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Giỏ hàng
          </h1>
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-0 flex justify-center items-center overflow-hidden">
          <img
            src={images.pharmacy.image1}
            alt="banner"
            className="w-full object-cover"
          />
        </div>
        <div className="bg-gradient-to-b from-blue-600 opacity-50 to-transparent w-full h-full absolute top-0 left-0 z-0"></div>
      </section>

      {/* <div>
        <Typography>Chưa có gì trong giỏ hàng</Typography>
      </div> */}

      {/* Content */}
      <section className="bg-white pb-8 antialiased pt-7">
        <div className="mx-auto px-5 container">
          <div className="mt-6 grid grid-cols-10 gap-4">
            <div className="col-span-10 lg:col-span-7 mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-3">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6 transition duration-700"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <Link
                        to="#"
                        className="shrink-0 md:order-1 rounded-xl w-full h-52 sm:h-72 md:h-24 md:w-24 flex justify-center items-center overflow-hidden shadow-md duration-500 hover:scale-105"
                      >
                        <img
                          className="w-full object-cover"
                          src={item.product.images[0]}
                          alt="imac image"
                        />
                      </Link>

                      <label htmlFor="counter-input" className="sr-only">
                        Choose quantity:
                      </label>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => handleMinus(item.product.id)}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            value={item.quantity}
                            required
                            disabled
                          />
                          <button
                            type="button"
                            onClick={() => handlePlus(item.product.id)}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 dark:text-white">
                            {new Intl.NumberFormat("vi-VN").format(
                              item.product.sale * item.quantity,
                            )}
                            đ
                          </p>
                        </div>
                      </div>

                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <Link to="#">
                          <Tooltip
                            placement="top-start"
                            content={item.product.name}
                            className="bg-opacity-70"
                          >
                            <Typography className="text-base font-medium text-gray-900 duration-500 hover:text-blue-700 truncate ...">
                              {item.product.name}
                            </Typography>
                          </Tooltip>
                        </Link>

                        <div className="flex items-center justify-between sm:justify-normal gap-4">
                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-gray-500 duration-300 hover:text-red-500"
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
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
                            <p className="hidden sm:block">Yêu thích</p>
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveFromCart(item.product.id)
                            }
                            className="inline-flex items-center text-sm font-medium text-red-500 hover:text-red-600"
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
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
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Xoá
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 hidden lg:block">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Flash sale
                </h3>
                <Carousel
                  responsive={responsive}
                  autoPlay={true}
                  swipeable={true}
                  draggable={true}
                  infinite={true}
                  partialVisible={false}
                >
                  {productsBestSeller.map((item, index) => (
                    <div key={index} className="mx-3">
                      <CardProduct item={item} />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>

            <div className="col-span-10 lg:col-span-3 mx-auto mt-6 max-w-4xl space-y-6 lg:mt-0 w-full block md:flex gap-5 lg:block duration-500">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 order-2 w-full md:w-3/5 lg:w-full">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tổng tiền
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        {new Intl.NumberFormat("vi-VN").format(totalPrice)}đ
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Giảm giá
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        0đ
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Phí giao hàng
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        0đ
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      {new Intl.NumberFormat("vi-VN").format(totalPrice)}đ
                    </dd>
                  </dl>
                </div>

                <Button
                  variant="gradient"
                  color="blue"
                  className="flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Thanh toán
                </Button>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    hoặc{" "}
                  </span>
                  <Link
                    to="/fom-reactjs"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline dark:text-blue-500"
                  >
                    Mua thêm
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 order-1 w-full md:w-2/5 !mt-6 md:!mt-0 lg:!mt-4 lg:w-full">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="voucher"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Do you have a voucher or gift card?{" "}
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <Button
                    variant="gradient"
                    color="blue"
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Apply Code
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
