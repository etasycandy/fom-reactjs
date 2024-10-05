import { Link, useNavigate } from "react-router-dom";
import { images } from "../assets/images";
import { useEffect, useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Drawer,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  Typography,
} from "@material-tailwind/react";

import categoriesData from "../assets/fake-data/categories";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/action";
import { Bounce, toast } from "react-toastify";

const Header = () => {
  const categories = categoriesData.getAll();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [open, setOpen] = useState(false);

  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  // Check login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const authStorage = sessionStorage.getItem("auth");
    if (authStorage) {
      setIsLoggedIn(true);
      setUser(JSON.parse(authStorage));
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);

    sessionStorage.removeItem("auth");
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

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/fom-reactjs/purchases");
    } else {
      toast.error(`Bạn chưa có sản phẩm nào trong giỏ hàng.`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      {/* Header */}
      <div className="sticky top-0 z-20 h-fit max-w-full animate-fade-down animate-duration-[600ms]">
        <div className="bg-gradient-to-b from-[#458bec] to-[#2469de] w-full h-fit py-2">
          <div className="container flex justify-between m-auto h-[16px]">
            <div className="h-full w-full flex gap-2 items-center text-white xl:w-2/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-6 h-full relative bottom-[1px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
              <div className="w-full relative top-[2px]">
                <marquee className="uppercase font-bold text-sm max-w-full">
                  Đại tiệc ưu đãi, lãi ngàn deal khủng khi trải nghiệm lần đầu
                  tại FOM
                </marquee>
              </div>
            </div>
            <div className="h-full w-1/3 flex-row-reverse gap-5 hidden xl:flex">
              <Link
                to="/"
                className="flex items-center gap-1 h-full text-white font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6 h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <span className="text-sm">CSKH: 1900.0000</span>
              </Link>
              <Link
                to="/"
                className="flex items-center gap-1 h-full text-white font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6 h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <span className="text-sm">Tải ứng dụng</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-white shadow-sm h-fit rounded-none py-2 px-4">
          <div className="container grid grid-cols-12 justify-between items-center m-auto">
            <div className="col-span-11 md:col-span-3 lg:col-span-2 justify-center items-center">
              <Link to="/fom-reactjs" className="logo flex justify-center">
                <img src={images.logo} alt="logoFOM" className="w-40" />
              </Link>
            </div>

            <form className="max-w-sm mx-auto relative col-span-2 hidden xl:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="red"
                className="size-6 h-6 absolute top-2.5 left-2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <select
                id="location"
                className="cursor-pointer h-12 w-full px-6 pl-10 bg-gray-100 border-2 border-gray-200 text-gray-700 text-sm rounded-full focus:ring-blue-400 focus:border-blue-400 block outline-none font-semibold"
              >
                <option defaultValue="Thừa Thiên Huế">Thừa Thiên Huế</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              </select>
            </form>

            <form
              action="/"
              method="post"
              className="col-span-7 hidden xl:col-span-5 md:flex mx-5"
            >
              <input
                type="text"
                placeholder="Tìm theo tên thuốc, TPCN, Dược mĩ phẩm,..."
                className="truncate ... w-full outline-none text-black text-sm px-3 pr-12 pl-4 rounded-full bg-gray-100 border-2 border-gray-200 focus:border-blue-400 overflow-hidden h-12 font-[sans-serif]"
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192.904 192.904"
                  width="18px"
                  className="fill-gray-600 hover:fill-[#458bec] font-semibold ml-[-35px]"
                >
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
              </button>
            </form>

            <div className="col-span-2 lg:col-span-3 hidden lg:flex justify-end items-center gap-6">
              <div className="w-7 cursor-pointer" onClick={openCart}>
                <Badge
                  overlap="circular"
                  placement="bottom-end"
                  content={cartItems.length}
                  withBorder
                  className="p-1 rounded-full w-6 h-6 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="gray"
                    className="w-7 h-7 hover:stroke-blue-500 duration-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </Badge>
              </div>

              {isLoggedIn ? (
                <Menu placement="bottom-end">
                  <MenuHandler>
                    <Avatar
                      size="sm"
                      src={user.data.avt}
                      alt="avatar"
                      className="w-8 h-8 cursor-pointer"
                    />
                  </MenuHandler>
                  <MenuList className="p-0">
                    <Link
                      to="/fom-reactjs/account"
                      className="px-4 py-3 text-sm text-gray-900 flex items-center gap-4 outline-none"
                    >
                      <Avatar size="sm" src={user.data.avt} alt="avatar" />
                      <div className="truncate ... font-semibold">
                        {user.data.fullName}
                      </div>
                    </Link>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 border-y outline-none">
                      <li>
                        <Link
                          to="/fom-reactjs/orders"
                          className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                        >
                          <i className="fa-solid fa-truck h-5 w-5 -mb-1"></i>
                          Đơn hàng
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/fom-reactjs/like-list"
                          className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill=""
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5 mb-[2px]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                          </svg>
                          Yêu thích
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/fom-reactjs/settings"
                          className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5 mb-[2px]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                            />
                          </svg>
                          Cài đặt
                        </Link>
                      </li>
                    </ul>
                    <div
                      className="px-5 py-2.5 text-sm text-gray-700 flex items-center gap-2 cursor-pointer hover:bg-red-500 hover:text-white hover:rounded-b-lg outline-none"
                      onClick={handleLogout}
                    >
                      <i className="fa-solid fa-right-from-bracket"></i>
                      Sign out
                    </div>
                  </MenuList>
                </Menu>
              ) : (
                <Link to="/fom-reactjs/login">
                  <Button
                    size="md"
                    color="blue"
                    className="flex items-center justify-center gap-1 py-2 px-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    Đăng nhập
                  </Button>
                </Link>
              )}
            </div>

            {/* Icon menu */}
            <button className="col-span-1 md:col-span-2 flex justify-center lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="gray"
                className="size-6 w-8"
                onClick={handleClick}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <hr className="hidden xl:block" />
          <div className="container hidden xl:flex justify-center items-center mt-2 m-auto pb-1">
            <ul className="flex justify-between items-center gap-8">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={`/fom-reactjs/categories/${category.slug}`}
                >
                  <li
                    className="flex gap-1 text-sm font-medium cursor-pointer item-menu hover:text-blue-400"
                    type="button"
                  >
                    <p>{category.name}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-6 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`w-[20rem] transition duration-500 ease-in-out transform bg-white z-30 h-[100vh] fixed top-0  ${
          click === true ? "translate-x-[0]" : "translate-x-[-21rem]"
        }`}
      >
        {/* Main content */}
        <div className="sticky max-w-full top-0 z-10 shadow flex justify-between bg-white">
          <img src={images.logo} alt="logo-FOM" className="w-28 ml-5" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 w-7 hover:stroke-red-500 mr-5 cursor-pointer"
            onClick={closeMobileMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col overflow-scroll transition duration-500 h-[36rem]">
          <div className="w-full bg-gradient-to-b from-[#458bec] to-[#2469de] py-3 px-5">
            <p className="text-sm font-semibold text-white mb-3">
              Đăng nhập để hưởng những đặc quyền dành riêng cho thành viên.
            </p>
            <Link to="/" className="mr-4">
              <Button
                className="rounded-full"
                variant="gradient"
                color="deep-orange"
              >
                Đăng nhập
              </Button>
            </Link>
            <Link to="/">
              <Button
                className="rounded-full"
                variant="gradient"
                color="light-blue"
              >
                Đăng kí
              </Button>
            </Link>
          </div>
          <form action="/" method="post" className="flex mx-5 my-4 md:hidden">
            <input
              type="text"
              placeholder="Tìm theo tên thuốc, TPCN, Dược mĩ phẩm,..."
              className="truncate ... w-full outline-none text-black text-sm px-3 pr-12 pl-4 rounded-full bg-gray-100 border-2 border-gray-200 focus:border-blue-400 overflow-hidden h-12 font-[sans-serif]"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="18px"
                className="fill-gray-600 hover:fill-[#458bec] font-semibold ml-[-35px]"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </button>
          </form>
          <ul>
            <Link to="/">
              <li className="px-5 py-4 font-bold ">Thực phẩm chức năng</li>
            </Link>
            <Link to="">
              <li className="px-5 py-4 font-bold ">Vật tư y tế</li>
            </Link>
            <Link to="">
              <li className="px-5 py-4 font-bold ">Dược mỹ phẩm</li>
            </Link>
            <Link to="">
              <li className="px-5 py-4 font-bold ">Chăm sóc cá nhân</li>
            </Link>
            <Link to="">
              <li className="px-5 py-4 font-bold ">
                Nhà thuốc tại các khu vực
              </li>
            </Link>
            <Link to="">
              <li className="px-5 py-4 font-bold ">Ưu đãi hiện có</li>
            </Link>
          </ul>
        </div>
        <div className="bg-white sticky max-w-full z-10 pt-2 border-t-[1px]">
          <p className="px-5 font-semibold text-sm text-gray-500 mt-2">
            Trải nghiệm tốt hơn với ứng dụng FOM
          </p>
          <Button
            className="rounded-full mx-5 my-3"
            variant="gradient"
            color="blue"
          >
            <i className="fa-solid fa-download"></i> Tải ngay
          </Button>
          <div className="flex justify-center">
            <Link
              to=""
              className="text-center my-3 px-8 py-3 bg-gray-200 w-4/5 m-auto rounded-full text-blue-600"
            >
              <i className="fa-solid fa-phone"></i> CSKH: 1900.0000 (Miễn phí)
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop black */}
      <div
        className={`h-[100vh] transition duration-500 ease-in-out w-full bg-black opacity-25 fixed top-0 right-0 z-20  ${
          click === true ? "block" : "hidden"
        }`}
      ></div>

      {/* Cart */}
      <Drawer
        overlayProps={{
          className: "fixed",
        }}
        placement="right"
        open={open}
        onClose={closeCart}
        className={`!max-w-md transform ${
          open ? "!translate-x-0" : "!translate-x-full"
        } transition-transform !duration-700`}
      >
        <div className="relative h-full p-5 pb-0">
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Giỏ hàng
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>

          {cartItems.map((item, index) => (
            <Card
              key={index}
              color="transparent"
              shadow={false}
              className="mb-4 border-b pb-4 rounded-none"
            >
              <div className="flex items-center gap-4">
                <Avatar
                  size="xl"
                  src={item.product.images[0]}
                  alt="avatar"
                  variant="rounded"
                />
                <div className="w-3/4">
                  <div className="w-full flex justify-between gap-4">
                    <Link to="/" className="w-2/3">
                      <Typography
                        color="blue-gray"
                        className="font-medium text-md hover:text-blue-500 truncate ..."
                      >
                        {item.product.name}
                      </Typography>
                    </Link>
                    <Typography
                      color="blue-gray"
                      className="font-medium text-md"
                    >
                      {new Intl.NumberFormat("vi-VN").format(
                        item.product.sale * item.quantity,
                      )}
                      đ
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    className="text-[0.9rem] font-light italic mb-2"
                  >
                    {item.product.types[0]}
                  </Typography>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-1">
                      <i
                        onClick={() => handleMinus(item.product.id)}
                        className="fa-solid fa-minus cursor-pointer text-white hover:bg-orange-600 py-1 px-2 rounded-md bg-orange-500"
                      ></i>
                      <Typography
                        color="blue"
                        className="mx-3 font-bold text-xl"
                      >
                        {item.quantity}
                      </Typography>
                      <i
                        onClick={() => handlePlus(item.product.id)}
                        className="fa-solid fa-plus cursor-pointer text-white hover:bg-blue-600 py-1 px-2 rounded-md bg-blue-500"
                      ></i>
                    </div>
                    <Button
                      variant="gradient"
                      color="orange"
                      size="sm"
                      onClick={() => handleRemoveFromCart(item.product.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Footer Cart */}
          <div className="w-full border-t px-5 py-3 absolute bottom-0 left-0 ">
            <Typography variant="h5" className="float-right text-lg">
              {new Intl.NumberFormat("vi-VN").format(totalPrice)}đ
            </Typography>
            <Typography variant="h5" className="text-lg">
              Tổng tiền:
            </Typography>

            <Typography variant="small" className="mb-6 text-sm italic">
              Phí vận chuyển & thuế được tính khi thanh toán.
            </Typography>

            <Button
              size="md"
              fullWidth={true}
              variant="gradient"
              color="blue"
              className="uppercase text-md mb-6"
              onClick={handleCheckout}
            >
              Thanh toán
            </Button>

            <Link
              to="/fom-reactjs/cart"
              className="flex justify-center items-center gap-1 mb-4 text-blue-500 hover:text-blue-600"
              onClick={closeCart}
            >
              <Typography
                variant="lead"
                className="text-center text-md font-bold"
              >
                Chi tiết giỏ hàng
              </Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
