import React, { useState } from "react";

export const Register = () => {
  const [error, setError] = useState({
    message: "Invalid Username",
    status: false,
  });
  const [showpass, setShowpass] = useState({ status: false });
  return (
    <div className="register flex items-center background text-[40px] w-[80%] h-[50vh] lg:h-[70vh] bg-opacity-75 bg-white rounded-md border-2 border-[#845EC2]">
      <div
        align="center"
        className="content w-[100%] lg:w-[55%] lg:h-full opacity-100 flex flex-col items-center justify-center"
      >
        <div className="heading text-[28px] sm:text-[30px] font-[Barlow]">
          Create an Account
        </div>
        {error.status ? (
          <div className="error mt-[10px] text-[16px] sm:text-[20px] font-[Barlow] w-[80%] text-white bg-[#FF8066] py-[10px] rounded-md transition-opacity duration-700 ease-in-out opacity-100">
            Invalid Username
          </div>
        ) : (
          <div className="error mt-[10px] text-[16px] sm:text-[20px] font-[Barlow] w-[80%] text-white bg-[#B0A8B9] py-[10px] rounded-md">
            Create an Account with Username & Password
          </div>
        )}
        <div className="username mt-[20px] w-[80%] ">
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
              className="w-[86%] text-[16px] sm:text-[20px] text-[#845EC2] bg-transparent font-[Barlow]"
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
        <div className="repassword mt-[20px] w-[80%] ">
          <div className="flex items-center justify-end  border-2 border-[#845EC2] h-[60px] rounded-md">
            <input
              className="w-[96%] text-[16px] sm:text-[20px] text-[#845EC2] bg-transparent font-[Barlow]"
              style={{ border: "none", outline: "none" }}
              type={showpass.status ? "text" : "password"}
              placeholder="Re-Password"
              onClick={() => {
                setError({ status: false });
              }}
            />
          </div>
        </div>
        <div className="button mt-[10px] lg:w-[80%]">
          <button
            className="text-[20px] sm:text-[23px] px-[10%] py-[10px] text-white bg-[#4B4453] font-bold rounded-md font-[Barlow]"
            style={{ boxShadow: "2px 2px 20px 10px rgba(0, 0, 0, 0.25)" }}
            onClick={() => {
              setError({ status: true });
            }}
          >
            Register
          </button>
        </div>
      </div>
      <div className="hidden lg:block logo lg:w-[45%] lg:h-full opacity-100">
        <img
          className="w-full h-full rounded-md"
          src="./requiredfiles/register.png"
          alt=""
        />
      </div>
    </div>
  );
};
