import {
  Button,
  IconButton,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { images } from "../assets/images";
import CardProduct from "./CardProduct";
import { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import productsData from "../assets/fake-data/products";

const SuggestProducts = () => {
  const data = [
    {
      label: "Flash Sale",
      value: "flash sale",
      items: productsData.getProductsFlashSale(),
    },
    {
      label: "Đánh giá cao",
      value: "đánh giá cao",
      items: productsData.getProductsHightRating(),
    },
    {
      label: "Sản phẩm mới",
      value: "sản phẩm mới",
      items: productsData.getNewProducts(),
    },
  ];

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

  return (
    <div className="bg-white w-full py-12">
      <div className="container m-auto">
        <Typography
          color="gray"
          className="text-3xl uppercase font-bold text-center mb-10"
        >
          Gợi ý ngày hôm nay
        </Typography>

        <Tabs value="flash sale">
          <TabsHeader className="w-[90%] m-auto mb-4 lg:w-1/2">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="font-semibold text-md">
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, items }) => (
              <TabPanel key={value} value={value}>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                  {items.map((item) => {
                    return (
                      <div key={item.id}>
                        <CardProduct item={item} />
                      </div>
                    );
                  })}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>

        {/* Pagination */}
        <div className="hidden sm:flex items-center justify-center gap-4 w-[90%] m-auto">
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
      </div>
    </div>
  );
};

export default SuggestProducts;
