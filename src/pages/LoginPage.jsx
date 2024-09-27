import accoutsData from "../assets/fake-data/accounts";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Dialog,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { images } from "../assets/images";

const LoginPage = () => {
  // Show password
  const [showPass, setShowPass] = useState(false);
  const togglePasswordVisiblity = () => setShowPass((cur) => !cur);

  const { state, onChange } = useForm({
    username: "",
    password: "",
    usernameReg: "",
    passwordReg: "",
    confirmPassReg: "",
    nameReg: "",
    emailReg: "",
    phoneNumberReg: "",
    addressReg: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const login = accoutsData.login(state);
    if (login.code === 200) {
      setError("");

      sessionStorage.setItem("auth", JSON.stringify(login));
      navigate("/fom-reactjs");
    } else {
      setError("Tài khoản hoặc mật khẩu không đúng!");
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="grid lg:grid-cols-2 items-center gap-10 p-8">
      <section className="order-2 lg:order-1 h-fit grid text-center items-center p-8 bg-white rounded-xl shadow-md">
        <Typography variant="h3" color="blue-gray" className="mb-2 mt-3">
          Sign In
        </Typography>
        <Typography className="mb-5 text-gray-600 font-normal text-[18px]">
          Enter your email and password to sign in
        </Typography>

        <form
          method="POST"
          onSubmit={onSubmit}
          className="md:m-5 mt-0 text-left"
        >
          <div className="mb-6">
            <Input
              id="username"
              color="blue"
              size="lg"
              label="Username"
              className="outline-none"
              name="username"
              value={state.username}
              onChange={onChange}
              required
              error={!!error}
            />
          </div>
          <div className="mb-6">
            <Input
              id="password"
              color="blue"
              size="lg"
              label="Password"
              type={showPass ? "text" : "password"}
              className="focus:ring-0"
              name="password"
              value={state.password}
              onChange={onChange}
              required
              error={!!error}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {showPass ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
            <Typography
              variant="small"
              color="gray"
              className="mt-2 flex items-center gap-1 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              Use at least 8 characters, one uppercase, one lowercase and one
              number.
            </Typography>
          </div>
          <Button
            type="submit"
            variant="gradient"
            color="blue"
            size="lg"
            className="mt-6"
            fullWidth
          >
            sign in
          </Button>
          <div className="flex items-center justify-between">
            <Checkbox
              variant="small"
              color="blue"
              label="Remember me"
              labelProps={{
                className: "text-sm mt-[4px]",
              }}
              className="h-5 w-5 text-blue-600 rounded-md ring-0 focus:ring-transparent"
            />
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              variant="small"
              className="font-medium text-blue-500 hover:text-blue-600 cursor-pointer hover:underline"
            >
              Forgot password
            </Typography>
          </div>
          <Button
            variant="outlined"
            size="lg"
            className="mt-6 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            sign in with google
          </Button>
          <Typography
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal"
          >
            {"Don't have an account yet? "}
            <span
              className="font-medium text-blue-500 hover:text-blue-600 cursor-pointer"
              onClick={handleOpen}
            >
              {" "}
              Register here
            </span>
          </Typography>
          <Link to="/fom-reactjs/register"></Link>
        </form>
      </section>

      <div className="order-1 lg:order-2 lg:h-[400px] md:h-[300px] max-md:mt-8">
        <img
          src={images.loginImage}
          className="w-full h-full max-md:w-4/5 mx-auto block"
          alt="Dining Experience"
        />
      </div>

      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full ">
          <CardBody className="flex flex-col gap-4">
            <div>
              <Typography variant="h4" color="blue-gray">
                Đăng kí
              </Typography>
              <Typography
                className="mb-3 mt-1 font-normal"
                variant="small"
                color="gray"
              >
                Vui lòng điền vào các thông tin sau để đăng kí.
              </Typography>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <Input
                  id="usernameReg"
                  color="blue"
                  size="lg"
                  label="Username"
                  className="focus:ring-0"
                  name="usernameReg"
                  value={state.usernameReg}
                  onChange={onChange}
                  required
                  error={!!error}
                />
              </div>

              <Input
                id="passwordReg"
                color="blue"
                size="lg"
                label="Password"
                type={showPass ? "text" : "password"}
                className="focus:ring-0"
                name="passwordReg"
                value={state.passwordReg}
                onChange={onChange}
                required
                error={!!error}
                icon={
                  <i onClick={togglePasswordVisiblity}>
                    {showPass ? (
                      <EyeIcon className="h-5 w-5" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5" />
                    )}
                  </i>
                }
              />
              <Input
                id="confirmPassReg"
                color="blue"
                size="lg"
                label="Confirm Password"
                type={showPass ? "text" : "password"}
                className="focus:ring-0"
                name="confirmPassReg"
                value={state.confirmPassReg}
                onChange={onChange}
                required
                error={!!error}
              />

              <div className="md:col-span-2">
                <Input
                  id="nameReg"
                  color="blue"
                  size="lg"
                  label="Full Name"
                  className="focus:ring-0"
                  name="nameReg"
                  value={state.nameReg}
                  onChange={onChange}
                  required
                  error={!!error}
                />
              </div>

              <Input
                id="emailReg"
                type="email"
                color="blue"
                size="lg"
                label="Email"
                className="focus:ring-0"
                name="emailReg"
                value={state.emailReg}
                onChange={onChange}
              />
              <Input
                id="phoneNumberReg"
                type="number"
                color="blue"
                size="lg"
                label="Phone Number"
                className="focus:ring-0"
                name="phoneNumberReg"
                value={state.phoneNumberReg}
                onChange={onChange}
              />
              <div className="md:col-span-2">
                <Input
                  id="addressReg"
                  color="blue"
                  size="lg"
                  label="Address"
                  className="focus:ring-0"
                  name="addressReg"
                  value={state.addressReg}
                  onChange={onChange}
                />
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              color="blue"
              onClick={handleOpen}
              fullWidth
            >
              Sign In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                className="ml-1 font-bold text-blue-500 hover:text-blue-600 cursor-pointer"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
};

export default LoginPage;
