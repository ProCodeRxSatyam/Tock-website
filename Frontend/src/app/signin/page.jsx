"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Signup() {
  const Router = useRouter();
  const inputRefP = useRef();
  const inputRefN = useRef();
  const [focusedInput, setFocusedInput] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
   const [isValid, setIsValid] = useState(null);

  function focusInput(type) {
    if (type === "password" && inputRefP.current) {
      inputRefP.current.focus();
    } else if (type === "name" && inputRefN.current) {
      inputRefN.current.focus();
    }
  }

  const handleNchange = (e) => {
    setNameValue(e.target.value);
  };

  const handlePchange = (e) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className="blurframe">
      <div className="frameborder relative flex flex-col hide-scrollbar  ">
        <div className="w-[100%] bg-black h-[50px] flex sticky top-0 z-10 ">
          <span
            className=" text-2xl pl-[1%] ml-[1%] hover:bg-gray-900 mt-[1%]"
            onClick={() => Router.push("/")}
          >
            &#10005;
          </span>
          <div className="absolute left-1/2 top-[1%] -translate-x-1/2 mt-2">
            <img
              src="/TockLogo.png"
              alt=""
              className="w-[50px] bg-black rounded-md"
            />
          </div>
        </div>

        <form
          action=""
          className="py-15 px-20 flex flex-col gap-7 w-[100%] max-[712px]:py-45"
        >
          <h1 className="text-3xl font-semibold "> Log in to Tock</h1>
          {/* ---------------------------------------name-------------------------------------------------- */}
          <div>
            <div
              className="h-16 border border-gray-500 rounded-md   relative"
              style={{ borderColor: !isValid && isValid !== null ? "#f30b0bff" : focusedInput === "name" ? "#60a5fa":"" }}
              id="inputdiv"
              onClick={() => focusInput("name")}
            >
              <div className=" ">
                <p
                  className={`absolute px-3 py-5 transition-all duration-200 ease-in-out ${
                    focusedInput === "name"
                      ? `top-[-17px] text-sm text-blue-500 `
                      : "top-0 text-base text-gray-400"
                  }`}
                  name="placeholder"
                >
                  Name
                </p>
              </div>
              <input
                ref={inputRefN}
                type="text"
                name="Name"
                className="w-[100%] h-5 mt-8 pl-3 leading-[15rem] border-none outline-none"
                spellCheck="false"
                value={nameValue}
                onChange={handleNchange}
                onFocus={() => {
                  setFocusedInput("name");
                }}
                onBlur={() => {
                  setFocusedInput(null);
                }}
              />
            </div>
            <div>
              <p className="text-sm text-red-500 px-3">
                {false && "Please enter a valid email address."}
              </p>
            </div>
          </div>
          {/* --------------------------------------password------------------------------------------------- */}
          <div>
            <div
              className="h-16 border border-gray-500 rounded-md   relative"
              style={{ borderColor: !isValid && isValid !== null ? "#f30b0bff" : focusedInput === "password" ? "#60a5fa":"" }}
              id="inputdiv"
              onClick={() => focusInput("password")}
            >
              <div className=" ">
                <p
                  className={`absolute px-3 py-5 transition-all duration-200 ease-in-out ${
                    focusedInput === "password"
                      ? `top-[-17px] text-sm text-blue-500 `
                      : "top-0 text-base text-gray-400"
                  }`}
                  name="placeholder"
                >
                  Password
                </p>
              </div>
              <input
                ref={inputRefP}
                type="text"
                name="Password"
                className="w-[100%] h-5 mt-8 pl-3 leading-[15rem] border-none outline-none"
                spellCheck="false"
                value={passwordValue}
                onChange={handlePchange}
                onFocus={() => {
                  setFocusedInput("password");
                }}
                onBlur={() => {
                  setFocusedInput(null);
                }}
              />
            </div>
            <div>
              <p className="text-sm text-red-500 px-3">
                {false && "Please enter a valid email address."}
              </p>
            </div>
          </div>
          <button className="w-[100%] h-16 bg-gray-800 text-white rounded-full mt-[8%] font-semibold hover:bg-gray-500 max-[712]:pt-4 max-[712]:pb-4">
            Sign in
          </button>
          <button
            type="button"
            className="w-[100%] h-16 border border-white-500 text-white rounded-full mt-[1%] font-semibold hover:bg-gray-500 max-[712]:pt-4 max-[712]:pb-4"
            onClick={() => Router.push("/forgotpassword")}
          >
            Forgot Password?
          </button>
          <p className="text-sm text-gray-600 tracking-[0.05em]">
            Don't have an account ?{" "}
            <Link
              href="/signup"
              className="text-blue-600 font-medium extra-spacing"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
