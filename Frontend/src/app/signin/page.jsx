"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Signup() {
  const Router = useRouter();

  return (
    <div className="blurframe">
      <div className="frameborder relative flex flex-col hide-scrollbar  ">
        <div className="w-[100%] bg-black h-[50px] flex sticky top-0 z-10 ">
          <span
            className=" text-3xl ml-[2%] mt-[1%]"
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
          action=""
          className="py-15 px-20 flex flex-col gap-7 w-[100%] max-[712px]:py-45"
        >
          <h1 className="text-3xl font-semibold "> Log in to Tock</h1>
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
