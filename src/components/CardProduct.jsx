import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/action";
import { Bounce, toast } from "react-toastify";

const CardProduct = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const addItem = {
      product: item,
      quantity: 1,
    };

    dispatch(addToCart(addItem));

    toast.success(`Successfully added to cart`, {
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
  };

  return (
    <Card className="w-full">
      <Link to={`/fom-reactjs/product/${item.slug}`}>
        <CardHeader
          shadow={false}
          floated={false}
          color="blue-gray"
          className="overflow-hidden h-52 flex justify-center items-center"
        >
          <img
            src={item.images ? item.images[0] : ""}
            alt={item.slug}
            className="object-cover w-full"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-start justify-between gap-2">
            <Tooltip content={item.name}>
              <Typography
                color="blue-gray"
                className="font-semibold text-lg truncate ..."
              >
                {item.name}
              </Typography>
            </Tooltip>

            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke={1}
                className="-mt-0.5 h-6 w-6 text-yellow-200"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              {item.totalStar}
            </Typography>
          </div>
          <Typography color="gray" className="opacity-70 text-sm truncate ...">
            {item.desc}
          </Typography>
          <div className="group mt-4 inline-flex flex-wrap items-center gap-3">
            <Tooltip content="Share">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              </span>
            </Tooltip>
            <Tooltip content="Like">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </span>
            </Tooltip>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-bold text-2xl">
              {new Intl.NumberFormat("vi-VN").format(item.sale)}đ
            </Typography>
            {item.price > item.sale ? (
              <Typography
                color="yellow"
                className="font-medium opacity-70 line-through"
              >
                {new Intl.NumberFormat("vi-VN").format(item.price)}đ
              </Typography>
            ) : (
              ""
            )}
          </div>
        </CardBody>
      </Link>

      <CardFooter className="pt-0">
        <Button
          size="lg"
          fullWidth={true}
          className="bg-gradient-to-b from-[#458bec] to-[#2469de]"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
