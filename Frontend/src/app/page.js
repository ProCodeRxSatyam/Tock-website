"use client"
import { useRouter } from "next/navigation";


export default function Home() {

   async function handlegoogleSignup() {
    try{
      // const response = axios.get("http://localhost:5000/auth/google")
      // const authurl = response.data.url;

      window.location.href = process.env.NEXT_PUBLIC_BACKENDAPI_BASE_URL + "/auth/google";
    }catch(err){
      console.error(err);
    }
   }
  
  const router = useRouter();

  const handleClick = () => {
    router.push('/signup');
  };


 
  return (
    <div className="outer font-sans logo ">
      <div className="logoimgbox">
        <img src="/TockLogo.png" alt="" />
      </div>

      <div className="loginbox">
        <div action="" className=" formss">
          <h1 className="  font-extrabold  text-9xl ">Tock</h1>
          <h3 className="mt-3 font-extrabold pt-6 text-4xl">
            Welcome ➡️ Elites
          </h3>

          <div className="border-2 btnHover border-black text-center bg-white text-black rounded-full mt-7 px-4 py-2 w-80 text-xl  cursor-pointer"
            onClick={handlegoogleSignup}>

            <img src="/Google-logo.svg" alt="" className="fitgooglelogo " />{" "}
            Sign up with Google
          </div>
          
          <div className="border-2 btnHover border-black text-center bg-white text-black rounded-full mt-5 px-4 py-2 w-80 text-xl  cursor-pointer"
            onClick={()=>{alert("There is going some issues with Apple Signup! Please try other methods...")}}>
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

          <p className="my-6 font-bold text-lg ml-1">
            Already have an account?
          </p>

          <div className="border-2 btnHover border-white text-center font-semibold rounded-full mt-5 px-4 py-2 w-80 text-xl  cursor-pointer" onClick={()=>router.push('/signin')}>
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
}
