"use client";
import { useAppState } from "../stateprovider";
import  { useRouter } from "next/navigation";
export default function Signup() {
  const { showPopup, setShowPopup } = useAppState();
  const Router = useRouter();

  const handleClick = () => {
    setShowPopup(false)
    Router.push("/");
  };
  return (
   <div className="blurframe">
    
    <div className="frameborder relative flex flex-col hide-scrollbar  ">
      
      <div className="w-[100%] bg-black h-[50px] flex sticky top-0 z-10 ">
        <span className=" text-3xl ml-[2%] mt-[1%]" onClick={handleClick}>&#10005;</span>
         <div className="absolute left-1/2 top-[1%] -translate-x-1/2 mt-2">
          <img src="/TockLogo.png" alt="" className="w-[50px] bg-black rounded-md"/>
         </div>
      </div> 
      
      <form action="" className="py-15 px-20 flex flex-col gap-7 w-[100%] max-[712px]:py-45">
        <h1 className="text-3xl font-semibold ">Create your account</h1>
        <input type="text" placeholder="Name" className="w-[100%] h-16 border border-gray-500 rounded-md pl-3  leading-[15rem]"/>
        <input type="text" placeholder="Password" className="w-[100%] h-16 border border-gray-500 rounded-md pl-3 leading-[15rem]"/>
        <input type="text" placeholder="Email" className="w-[100%] h-16 border border-gray-500 rounded-md pl-3 leading-[15rem]"/>
        <button className="w-[100%] h-16 bg-gray-800 text-white rounded-full mt-[12%] font-semibold hover:bg-gray-500 max-[712]:pt-4 max-[712]:pb-4">Sign up</button>
        <p className="text-sm text-gray-600 ">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
      </form>
      
    

    </div>
   </div>
  );
}
