import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Error404Page = () => {
  return (
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl text-gray-700">
          <span className="sr-only">Error</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">
          {`Sorry, we couldn't find this page.`}
        </p>
        <p className="mt-4 mb-8 text-gray-500">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <Link rel="noopener noreferrer" to="/fom-reactjs">
          <Button
            variant="gradient"
            color="blue"
            className="font-semibold px-10 py-3 text-md"
          >
            Back to homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Error404Page;
