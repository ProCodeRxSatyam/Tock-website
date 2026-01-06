"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAppState } from "../stateprovider";
import axios from "axios";
import Loader from "../components/loader";

export default function Signup() {
  const router = useRouter();
  const inputRef = useRef();
  const [focusedInput, setFocusedInput] = useState(null);
  const [loading, setloading] = useState(true);
  const [emailVerificationCode, setEmailVerificationCode] = useState("");
  const {
    emailValue,
    setEmailValue,
    nameValue,
    setNameValue,
    passwordValue,
    setPasswordValue,
  } = useAppState();

  const resetAuthForm = () => {
    setNameValue(null);
    setPasswordValue(null);
  };

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  useEffect(() => {
    focusInput();
    const sendOtp = async () => {
      try {
        const OtpRes = await axios.post(
          process.env.NEXT_PUBLIC_BACKENDAPI_BASE_URL + "/sendOtp",
          {
            email: emailValue,
          }
        );
        console.log(OtpRes);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };

    sendOtp();
  }, []);

  const handleEchange = (e) => {
    setEmailVerificationCode(e.target.value);
  };

  const handleBackClick = () => {
    resetAuthForm();
    router.push("/signup");
  };

  const handleClick = async () => {
    try {
      const verifyRes = await axios.post(
        process.env.NEXT_PUBLIC_BACKENDAPI_BASE_URL + "/verifyOtp",
        {
          email: emailValue,
          otp: emailVerificationCode,
        }
      );

      if (verifyRes.status === 200) {
        const signupRes = await axios.post(
          process.env.NEXT_PUBLIC_BACKENDAPI_BASE_URL + "/register",
          {
            name: nameValue,
            email: emailValue,
            password: passwordValue,
          }
        );
        resetAuthForm();
        router.push("/home");
      } else {
        const notificationPanel = document.getElementById("NotificationPanel");
        notificationPanel.textContent = "Invalid OTP, please try again.";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="blurframe">
      {loading ? (
        <div
          className="frameborder relative flex flex-col hide-scrollbar "
          style={{ background: "rgba(4, 4, 4, 1)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Loader className="" />
          </div>
        </div>
      ) : (
        <div className="frameborder relative flex flex-col hide-scrollbar  ">
          <div className="w-[100%] bg-black h-[50px] flex sticky top-0 z-10 ">
            <span
              className=" text-2xl pl-[1%] ml-[1%] hover:bg-gray-900 mt-[1%]"
              onClick={handleBackClick}
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

          <div
            method="POST"
            className="py-10 px-20 flex flex-col gap-8 w-[100%] max-[712px]:py-14"
          >
            <div>
              <h1 className="text-3xl font-semibold "> We sent you a code</h1>
              <p className="text-gray-600 ">
                {`Enter it below to verify your email =>  ${emailValue} .`}
              </p>
              <h1 id="NotificationPanel" className="text-red-500 fadein py-2">
                {" "}
              </h1>
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
              disabled={emailVerificationCode.length === 0}
              className={`w-[100%] h-16 btn text-black rounded-full mt-[48%] font-semibold  max-[712]:pt-4 max-[712]:pb-4 
                ${
                  emailVerificationCode.length === 0
                    ? "opacity-40 cursor-not-allowed"
                    : "cursor-pointer btnHover"
                }`}
              onClick={handleClick}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
