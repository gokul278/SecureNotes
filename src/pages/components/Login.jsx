import React, { useState } from "react";

export const Login = () => {
  const [error, setError] = useState({
    message: "Invalid Username",
    status: false,
  });
  const [showpass, setShowpass] = useState({ status: false });
  return (
    <div className="login flex background text-[40px] w-[80%] h-[50vh] lg:h-[70vh] bg-opacity-75 bg-white rounded-md border-2 border-[#845EC2]">
      <div className="logo w-[45%] h-full opacity-100 hidden lg:block">
        <img
          className="w-full h-full rounded-md"
          src="./requiredfiles/image.png"
          alt=""
        />
      </div>
      <div
        align="center"
        className="content flex flex-col justify-center items-center w-[100%] lg:w-[55%] h-full opacity-100"
      >
        <div className="heading text-[28px] sm:text-[30px] font-[Barlow]">
          Login
        </div>
        {error.status ? (
          <div className="error mt-[20px] text-[16px] sm:text-[20px] font-[Barlow] w-[80%] text-white bg-[#FF8066] py-[10px] rounded-md transition-opacity duration-700 ease-in-out opacity-100">
            Invalid Username
          </div>
        ) : (
          <div className="error mt-[20px] text-[16px] sm:text-[20px] font-[Barlow] w-[80%] text-white bg-[#B0A8B9] py-[10px] rounded-md">
            Enter the Username and Password
          </div>
        )}
        <div className="username mt-[30px] w-[80%] ">
          <div className="flex items-center justify-end  border-2 border-[#845EC2] h-[60px] rounded-md">
            <input
              className="w-[96%] text-[16px] sm:text-[20px] text-[#845EC2] bg-transparent font-[Barlow]"
              style={{ border: "none", outline: "none" }}
              type="text"
              placeholder="Username"
              onClick={() => {
                setError({ status: false });
              }}
            />
          </div>
        </div>
        <div className="password mt-[20px] w-[80%] ">
          <div className="flex items-center justify-end  border-2 border-[#845EC2] h-[60px] rounded-md">
            <input
              className="w-[86%] text-[16px] sm:text-[20px] text-[#845EC2] bg-transparent text font-[Barlow]"
              style={{ border: "none", outline: "none" }}
              type={showpass.status ? "text" : "password"}
              placeholder="Password"
              onClick={() => {
                setError({ status: false });
              }}
            />
            {showpass.status ? (
              <div
                align="start"
                className="icon pl-[1.4px] w-[10%] text-[16px] sm:text-[20px] text-[#845EC2]"
                onClick={() => {
                  setShowpass({ status: false });
                }}
              >
                <i className="fa-regular fa-eye"></i>
              </div>
            ) : (
              <div
                align="start"
                className="icon w-[10%] text-[16px] sm:text-[20px] text-[#845EC2]"
                onClick={() => {
                  setShowpass({ status: true });
                }}
              >
                <i className="fa-regular fa-eye-slash"></i>
              </div>
            )}
          </div>
        </div>
        <div className="button mt-[40px] w-[80%]">
          <button
            className="text-[20px] sm:text-[23px] px-[10%] py-[10px] text-white bg-[#4B4453] font-bold rounded-md font-[Barlow]"
            style={{ boxShadow: "2px 2px 20px 10px rgba(0, 0, 0, 0.25)" }}
            onClick={() => {
              setError({ status: true });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
