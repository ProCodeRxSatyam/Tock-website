"use client"
import { useRouter } from "next/navigation";
import Signup from "./signup/page";
import { useAppState } from "./stateprovider";

export default function Home() {
  
  const router = useRouter();
  const { showPopup, setShowPopup } = useAppState();

  const handleClick = () => {
    setShowPopup(true);
  };


 
  return (
    <div className="outer font-sans logo ">
      <div className="logoimgbox">
        <img src="/TockLogo.png" alt="" />
      </div>

      <div className="loginbox">
        <form action="" className=" form">
          <h1 className="  font-extrabold  text-9xl ">Tock</h1>
          <h3 className="mt-3 font-extrabold pt-6 text-4xl">
            Welcome ➡️ Elites
          </h3>

          <div className="border-2 btnHover border-black text-center bg-white text-black rounded-full mt-7 px-4 py-2 w-80 text-xl  cursor-pointer">
            {/* <iframe src="" frameborder="1" title="Sign " width={400} height={60}></iframe> */}
            <img src="/Google-logo.svg" alt="" className="fitgooglelogo " />{" "}
            Sign up with Google
          </div>
          <div className="border-2 btnHover border-black text-center bg-white text-black rounded-full mt-5 px-4 py-2 w-80 text-xl  cursor-pointer">
            <img src="/Apple-logo.svg" alt="" className="fitgooglelogo " /> Sign
            up with Apple
          </div>

          <div className="divider">
            <span>OR</span>
          </div>


          <div id="btnn" className="border-2 btnHover border-black text-center font-medium bg-white text-black rounded-full mt-5 px-4 py-2 w-80 text-xl  cursor-pointer"
          onClick={handleClick}  >
            Create account
          </div>
          {showPopup && <Signup />}

          <p className="my-6 font-bold text-lg ml-1">
            Already have an account?
          </p>

          <div className="border-2 btnHover border-white text-center font-semibold rounded-full mt-5 px-4 py-2 w-80 text-xl  cursor-pointer" onClick={()=>router.push('/signin')}>
            Sign in
          </div>
        </form>
      </div>
    </div>
  );
}
