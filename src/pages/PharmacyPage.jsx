import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import pharmacyData from "../assets/fake-data/pharmacy";
import productsData from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";

const PharmacyPage = () => {
  const params = useParams();

  const pharmacy = pharmacyData.getBySlug(params.slug);

  const products = productsData.getByPharmacySlug(params.slug);

  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "blue",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [products]);

  return (
    <>
      <section className="relative bg-white h-64">
        <div className="h-64 flex flex-col justify-center items-center gap-5 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <h1 className="text-4xl stroke-2 stroke-blue-500 font-extrabold uppercase tracking-tight leading-none text-white  md:text-5xl lg:text-6xl [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)]">
            {pharmacy.name}
          </h1>
          <p className="text-lg font-medium text-gray-100 lg:text-xl sm:px-16 lg:px-48 [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)]">
            {pharmacy.desc}
          </p>
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-0 flex justify-center items-center overflow-hidden">
          <img
            src={pharmacy.uri}
            alt="banner"
            className="w-full object-cover"
          />
        </div>
        <div className="bg-gradient-to-b from-blue-600 opacity-90 to-blue-300 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>

      {/* Filter products */}
      <div className="container m-auto w-full h-14 bg-white my-5 rounded-md shadow flex justify-between items-center px-5">
        <div className="flex items-center gap-3 w-full md:w-2/3">
          <Button
            variant="text"
            color="blue"
            aria-atomic
            className="flex items-center gap-2 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <span>Filter</span>
          </Button>

          <div>
            <Tooltip
              content="Roomy"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 22 },
              }}
              className=" bg-white px-4 py-2 shadow shadow-black/10 text-black font-medium"
            >
              <Button variant="text" color="blue" aria-atomic className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                  />
                </svg>
              </Button>
            </Tooltip>

            <Tooltip
              content="List"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 22 },
              }}
              className=" bg-white px-4 py-2 shadow shadow-black/10 text-black font-medium"
            >
              <Button variant="text" color="blue" aria-atomic className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                  />
                </svg>
              </Button>
            </Tooltip>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="gray"
            className="w-7 h-7 hidden sm:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
          <p className="text-sm font-medium mt-[2px] hidden sm:block">
            Showing 1-16 of 32 results
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {products.map((item) => {
            return (
              <div key={item.id}>
                <CardProduct item={item} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      <div
        className={`hidden items-center justify-center gap-4 w-[90%] m-auto my-10 ${
          products.length > 8 && "sm:flex"
        }`}
      >
        <Button
          color="blue"
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton {...getItemProps(1)}>1</IconButton>
          <IconButton {...getItemProps(2)}>2</IconButton>
          <IconButton {...getItemProps(3)}>3</IconButton>
          <IconButton {...getItemProps(4)}>4</IconButton>
          <IconButton {...getItemProps(5)}>5</IconButton>
        </div>
        <Button
          variant="text"
          color="orange"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === 5}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default PharmacyPage;
