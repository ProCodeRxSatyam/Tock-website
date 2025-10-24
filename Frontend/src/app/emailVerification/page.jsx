"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Signup() {
  const router = useRouter();
  const inputRef = useRef();
  const [focusedInput, setFocusedInput] = useState(null);
  const [emailVerificationCode, setEmailVerificationCode] = useState("");

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const handleEchange = (e) => {
    setEmailVerificationCode(e.target.value);
  };

  const handleClick = (e) => {
    
  };

  return (
    <div className="blurframe">
      <div className="frameborder relative flex flex-col hide-scrollbar  ">
        <div className="w-[100%] bg-black h-[50px] flex sticky top-0 z-10 ">
          <span
            className=" text-2xl pl-[1%] ml-[1%] hover:bg-gray-900 mt-[1%]"
            // onClick={() => router.push("/")}
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
          action="/api/auth/signin"
          method="POST"
          className="py-15 px-20 flex flex-col gap-7 w-[100%] max-[712px]:py-45"
        >
          <h1 className="text-3xl font-semibold "> We sent you a code</h1>
          <p className="text-gray-600 ">
            Enter it below to verify your email address.
          </p>
          <div>
            <div
              className="h-16 border border-gray-500 rounded-md   relative"
              style={{
                borderColor: focusedInput === "email" ? "#60a5fa" : "",
              }}
              id="inputdiv"
              onClick={() => focusInput("email")}
            >
              <div className=" ">
                <p
                  className={`absolute px-3 py-5 transition-all duration-200 ease-in-out ${
                    focusedInput === "email" || emailVerificationCode !== ""
                      ? `top-[-17px] text-sm text-blue-500 `
                      : "top-0 text-base text-gray-400"
                  }`}
                  name="placeholder"
                >
                  Verification code
                </p>
              </div>
              <input
                ref={inputRef}
                type="email"
                name="email"
                className="w-[100%] h-5 mt-8 pl-3 leading-[15rem] border-none outline-none"
                spellCheck="false"
                value={emailVerificationCode}
                onChange={handleEchange}
                onFocus={() => {
                  setFocusedInput("email");
                }}
                onBlur={() => {
                  setFocusedInput(null);
                }}
              />
            </div>
            <div>
              <p className="text-sm text-blue-600 px-3">
                {"Did not receive email?"}
              </p>
            </div>
          </div>

          <button
          disabled = {emailVerificationCode.length === 0}
            className={`w-[100%] h-16 bg-white text-black rounded-full mt-[48%] font-semibold  max-[712]:pt-4 max-[712]:pb-4 
                ${emailVerificationCode.length === 0 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-500'}`}
            onClick={handleClick}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
