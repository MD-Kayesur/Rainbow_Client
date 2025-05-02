import { Link, NavLink } from "react-router-dom";
import Header from "../../Components/Header";

import myImage8 from "../../assets/Banner/vK8ECGL27BFN7tScchchrKWCgPA.avif";

const Get_started = () => {
    return (
        <div className="">
            <div className="hero z-50  min-h-screen bg-gradient-to-b from-green-300   via-red-300 to-green-300 py-10 ">
        <div className="hero-content text-center">
          <div className="">
            <div>
              <h1 className="md:text-8xl text-4xl mx-auto  md:w-9/12 font-bold coiny-regular">
              <span className="flex items-center">Download <img className="w-50 h-40" src={myImage8} alt="" /></span> Rainbow  to get started
              </h1>
              {/* <Header className='md:text-8xl text-4xl mx-auto  md:w-9/12' title={'Download Rainbow  to get started'}></Header> */}
             
            </div>
            <div className=" md:flex  gap-5 py-10  justify-center   ">
              <div className="flex items-center text-start bg-orange-400  cursor-pointer p-3 rounded-3xl  ">
                <h1 className="font-bold text-xl md:text-2xl">Download <br /> Rainbow Extension</h1>
                <img className="w-30" src={myImage8} alt="" />
              </div>
              <div className="flex items-center text-start bg-purple-500 cursor-pointer p-3 rounded-3xl">
                <h1 className="font-bold text-xl md:text-2xl">Download <br /> Rainbow Mobile</h1>
                <img className="w-30" src={myImage8} alt="" />
              </div>
               
            </div>
            <div className="py-7 flex items-center justify-center gap-5">
                <Link className=" bg-white text-2xl font-bold px-5 py-4   rounded-4xl">🧰 rainbowkit</Link>
                <Link className=" bg-white text-2xl font-bold px-5 py-4   rounded-4xl">👾 github</Link>
                <Link className=" bg-white text-2xl font-bold px-5 py-4   rounded-4xl">⬇️ media kit</Link>
                <Link className=" bg-white text-2xl font-bold px-5 py-4   rounded-4xl">📜 terms of use</Link>
                <Link className=" bg-white  text-2xl font-bold px-5 py-4   rounded-4xl">🔒 privacy policy</Link>
            </div>
          </div>
        </div>
       
      </div>
        </div>
    );
};

export default Get_started;