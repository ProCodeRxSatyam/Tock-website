"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Signup() {
  const router = useRouter();
  const inputRef = useRef();
  const timerRef = useRef(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [emailValue, setEmailValue] = useState("");
  const [isValid, setIsValid] = useState(null);

  function focusInput(type) {
    if (type === "email" && inputRef.current) {
      inputRef.current.focus();
    }
  }

  function isValidEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (emailValue.trim() === "") {
        setIsValid(null);
      } else {
        setIsValid(isValidEmail(emailValue));
      }
    }, 500);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [emailValue]);

  const handleEchange = (e) => {
    setEmailValue(e.target.value);
  };
  return (
    <div className="blurframe">
      <div className="frameborder relative flex flex-col hide-scrollbar  ">
        <div className="w-[100%] bg-black h-[50px] flex sticky top-0 z-10 ">
          <span
            className=" text-2xl pl-[1%] ml-[1%] hover:bg-gray-900 mt-[1%]"
            onClick={() => router.push("/")}
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
          <h1 className="text-3xl font-semibold "> Find your Tock account</h1>
          <p className="text-gray-600 ">
            Enter the email , associated with your account to change your
            Password
          </p>
          <div>
            <div
              className="h-16 border border-gray-500 rounded-md   relative"
              style={{
                borderColor:
                  !isValid && isValid !== null
                    ? "#f30b0bff"
                    : focusedInput === "email"
                    ? "#60a5fa"
                    : "",
              }}
              id="inputdiv"
              onClick={() => focusInput("email")}
            >
              <div className=" ">
                <p
                  className={`absolute px-3 py-5 transition-all duration-200 ease-in-out ${
                    focusedInput === "email" || emailValue !== ""
                      ? `top-[-17px] text-sm text-blue-500 ${
                          !isValid && isValid !== null
                            ? "text-red-500"
                            : focusedInput !== "email"
                            ? "text-gray-400"
                            : "text-blue-500"
                        } `
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
                onFocus={() => {
                  setFocusedInput("email");
                }}
                onBlur={() => {
                  setFocusedInput(null);
                }}
              />
            </div>
            <div>
              <p className="text-sm text-red-500 px-3">
                {isValid !== null &&
                  !isValid &&
                  "Please enter a valid email address."}
              </p>
            </div>
          </div>

          <button className="w-[100%] h-16 bg-gray-800 text-white rounded-full mt-[48%] font-semibold hover:bg-gray-500 max-[712]:pt-4 max-[712]:pb-4">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
