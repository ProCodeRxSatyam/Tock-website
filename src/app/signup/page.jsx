export default function Signup() {
  return (
   <div className="">
    <form action="" className="flex flex-col justify-center items-center">
        <img src="/TockLogo.png" alt="" className="w-[50px] my-4"/>
        
        <div className="w-full box-border px-[12vw] ">
        <h1 className="text-3xl font-bold my-4">Create your account</h1>
        <input type="text" placeholder="Name" className="w-[80vw] h-16 px-4 my-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input type="text" placeholder="••••Password••••" className="w-[80vw] h-16 px-4 my-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input type="text" placeholder="Email" className="w-[80vw] h-16 px-4 my-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button className="w-[80vw] h-16 bg-gray-800 text-white rounded-full my-4 font-semibold hover:bg-gray-500">Sign up</button>
        <p className="text-sm text-gray-600 my-4">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
        </div>
    </form>
   </div>
  );
}
