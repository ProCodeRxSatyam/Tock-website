"use client";
import { useAppState } from "../stateprovider";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Signup() {
  const { showPopup, setShowPopup } = useAppState();
  const Router = useRouter();
  const inputRef = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const handleClick = () => {
    setShowPopup(false);
    Router.push("/");
  };

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  const boxFocused = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  function isValidEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }
  const handleEchange = (e) => {
    setEmailValue(e.target.value);
  };
  // function handleEchange(e) {
  //   const inputdiv = document.getElementById("inputdiv");
  //   if (!isValidEmail(e.target.value)) {
  //     inputdiv.style.border = "2px solid red";
  //   } else {
  //     inputdiv.style.border = "1px solid gray";
  //   }
  // }

  return (
    <div className="blurframe">
      <div className="frameborder relative flex flex-col hide-scrollbar  ">
        <div className="w-[100%] bg-black h-[50px] flex sticky top-0 z-10 ">
          <span
            className=" text-2xl pl-[1%] ml-[1%] mt-[1%] w-8 h-8 rounded-full hover:bg-gray-900 hover:cursor-pointer"
            onClick={handleClick}
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
          <h1 className="text-3xl font-semibold ">Create your account</h1>
          <input
            type="text"
            placeholder="Name"
            className="w-[100%] h-16 border border-gray-500 rounded-md pl-3  leading-[15rem]"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-[100%] h-16 border border-gray-500 rounded-md pl-3 leading-[15rem]"
          />

          {/*----------------------------------------------------------------------------------------- */}
          <div>
            <div
              className="h-16 border border-gray-500 rounded-md   relative"
              style={{ borderColor: isFocused ? "#60a5fa" : "" }}
              id="inputdiv"
              onClick={focusInput}
            >
              <div className=" ">
                <p
                  className={`absolute px-3 py-5 transition-all duration-200 ease-in-out ${
                    isFocused || emailValue !== ""
                      ? "top-[-17px] text-sm text-blue-500"
                      : "top-0 text-base text-gray-400"
                  }`}
                  name="placeholder"
                >
                  Email
                </p>
              </div>
              <input
                ref={inputRef}
                type="email"
                name="email"
                className="w-[100%] h-5 mt-8 pl-3 leading-[15rem] border-none outline-none"
                spellCheck="false"
                value={emailValue}
                onChange={handleEchange}
                onFocus={boxFocused}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <p className="text-sm text-red-500 px-3">
                Please enter valid email !.
              </p>
            </div>
          </div>
          {/*----------------------------------------------------------------------------------------- */}

          <button className="w-[100%] h-16 bg-gray-800 text-white rounded-full mt-[12%] font-semibold hover:bg-gray-500 max-[712]:pt-4 max-[712]:pb-4">
            Sign up
          </button>
          <p className="text-sm text-gray-600 ">
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy .
          </p>
        </form>
      </div>
    </div>
  );
}
