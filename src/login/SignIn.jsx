import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Input } from "antd";
//import EyeOutlined from "@ant-design/icons";
//import EyeInvisibleOutlined from "@ant-design/icons";

const SignIn = ({ toggleForms }) => {
  const [username, setUsername] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevPasswordVisible) => !prevPasswordVisible);
  };

  return (
    <>
      <span className="mb-3  text-4xl font-bold flex justify-center">
        LOGIN
      </span>
      <span className="font-light text-gray-400 mb-5">
        Welcome aboard , Your dashboard adventure awaits.
      </span>
      <div className="py-2">
        <span className="mb-2 text-md font-bold text-gray-600">Username</span>
        <Input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
          name="username"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        />
      </div>
      <div className="py-2">
        <span className="mb-2 text-md font-bold text-gray-600">Password</span>
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
      <div className="py-2">
        <span className="mb-2 text-md font-bold text-gray-600">Join Code</span>
        <Input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
          name="join"
          id="join"
          placeholder="Join Code"
          rules={[
            {
              required: true,
              message: "Please input the join code!",
            },
          ]}
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
        Sign In
      </Button>
      <div className="text-center text-gray-400 ">
        Don&apos;t have an account?
        <Button className="font-bold text-black ml-3" onClick={toggleForms}>
          Sign Up
        </Button>
      </div>
    </>
  );
};
SignIn.propTypes = {
  toggleForms: PropTypes.func.isRequired,
};

export default SignIn;
