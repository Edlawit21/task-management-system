import { Button, Input, Radio } from "antd";
import up from "./up.png";
import pep from "./pep.png";
import { useState } from "react";
import SignIn from "./SignIn";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevPasswordVisible) => !prevPasswordVisible);
  };

  const [showSignUp, setShowSignUp] = useState(true);

  const toggleForms = () => {
    setShowSignUp(!showSignUp);
  };

  const data = {
    up: up,
    pep: pep,
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 ">
        {/*left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          {showSignUp ? (
            <>
              <span className="mb-3 text-4xl font-bold  flex justify-center">
                Create Account
              </span>
              <span className="font-light text-gray-400 mb-5">
                Join us! The path to creating your account starts now.
              </span>
              <div className="py-2">
                <span className="mb-2 text-md font-bold text-gray-600">
                  Username
                </span>

                <Input
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
                  name="username"
                  id="username"
                  placeholder="Username"
                />
              </div>

              {/* Email Input */}
              <div className="py-2">
                <span className="mb-2 text-md font-bold text-gray-600">
                  Email
                </span>
                <Input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="py-2">
                <span className="mb-2 text-md font-bold text-gray-600">
                  Password
                </span>
                <Input.Password
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: togglePasswordVisibility,
                  }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                />
              </div>
              <div className="mb-2">
                <h1 className="text-gray-600 text-md font-bold mb-2">Gender</h1>
                <Radio.Group>
                  <Radio value={1}>Male</Radio>
                  <Radio value={2}>Female</Radio>
                </Radio.Group>
              </div>
              <div>
                <h1 className="text-gray-600 text-md font-bold mb-2">
                  Educational Level
                </h1>
                <Input
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
                  name="username"
                  id="username"
                  placeholder="Educational level"
                />
              </div>

              <div className="flex justify-between w-full py-3"></div>
              <Button
                className="w-full bg-purple-800 text-white p-2 rounded-lg mb-6  hover:bg-white hover:text-black hover:border hover:border-gray-300 flex items-center justify-center font-bold text-xl"
                style={{
                  padding: "22px 0",
                  background: "linear-gradient(to right, #8d4bff, #bd3dde)",
                }}
              >
                Sign Up
              </Button>

              <div className="text-center text-gray-400 ">
                Already have an account.
                <Button
                  className="font-bold text-black ml-3 "
                  onClick={toggleForms}
                >
                  Sign In
                </Button>
              </div>
            </>
          ) : (
            <SignIn toggleForms={toggleForms} />
          )}
        </div>
        {/* right side */}
        <div
          className="relative rounded-r-2xl "
          style={{ background: "linear-gradient(to right, #8d4bff, #bd3dde)" }}
        >
          <img
            src={data.pep}
            alt="img"
            className="w-[400px]  hidden rounded-r-2xl md:block object-cover mt-36 "
          />

          {/* text on image  */}
          <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 rounded drop-shadow-lg md:block ">
            <span className="text-white text-xl">
              Enhance your Team Synergy.
              <br />
              start your project and can&apos;t <br />
              imagine working without it.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
{
  /*
const SignUp = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* login container */
}
{
  /*} <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* form 
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>

          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Login
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Login with Google
          </button>

          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <a href="#">Forgot your password?</a>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Don't have an account?</p>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
              Register
            </button>
          </div>
        </div>

        {/* image 
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          />
        </div>
      </div>
    </div>  */
}

//import { Button, Input } from "antd";
{
  /*
const SignUp = () => {
  return (
    <div className="signup">
      <div className="m-5">
        <h1 className="font-bold text-center text-3xl my-6">SignIn</h1>
        <label htmlFor="username">UserName:</label>
        <Input className="mb-6" type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <Input className="mb-4" type="password" id="password" name="password" />
        <div className="flex justify-center mt-5">
          <Button className="w-56 h-12 bg-purple-700 text-white rounded-2xl text-lg">
            Sumbit
          </Button>
        </div>
      </div>
      <div className="font-semibold text-center border-l flex items-center justify-center flex-col pb-12 bg-purple-600   text-white rounded-s-3xl">
        <h1 className="p-4">SignIn and Add your Team Members</h1>
        <h2 className="p-3">
          Enjoy every momment with your teams and make your project work!!{" "}
        </h2>
      </div>
  </div>*/
}
