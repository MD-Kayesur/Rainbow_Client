import React from "react";
import { FiDivideCircle } from "react-icons/fi";
import myImage1 from "../../assets/Banner/Clud.avif";
import myImage2 from "../../assets/Banner/hU2QG6d9scwuab7no8Kzy4G4 (1).avif";
import myImage3 from "../../assets/Banner/hU2QG6d9scwuab7no8Kzy4G4.avif";
import myImage4 from "../../assets/Banner/jiid6nfu78vtDFgJz0L0Ga87uFg.avif";
import myImage5 from "../../assets/Banner/Pn7vfzLLQ2Ylyc0MS2jmR64xKlc.avif";
import myImage6 from "../../assets/Banner/UFvPlymoCJQRWIcq6OuiAEro.avif";
import myImage7 from "../../assets/Banner/WdqwfLzM7511b0vTKJhyOovVw8.avif";
import myImage8 from "../../assets/Banner/vK8ECGL27BFN7tScchchrKWCgPA.avif";
import { Link, NavLink } from "react-router-dom";
import Header from "../../Components/Header";
const Banner = () => {
  return (
    // creat a banner with more pic as baground img
    <div className="relative bg-gradient-to-b from-blue-500 to-blue-200 ">
      <div>
      <div className="absolute left-10 top-0">
          <img className="w-70 " src={myImage8} alt="" />
        </div>
        <div className="absolute left-0 top-0 z-20">
          <img className="w-100  " src={myImage1} alt="" />
        </div>
        <div className="absolute -top-10 md:-right-30">
          <img className="md:w-200 w-50 h-70  " src={myImage2} alt="" />
        </div>
        <div className="absolute bottom-20 left-0  ">
          <img className="w-60   " src={myImage7} alt="" />
        </div>
        <div className="absolute     -bottom-5 -left-30   ">
          <img className="md:w-200 w-50 h-70 " src={myImage3} alt="" />
        </div>
        <div className="absolute top-10 right-6">
          <img className="w-100   " src={myImage4} alt="" />
        </div>
        <div className="absolute top-0 right-30 ">
          <img className="w-70   " src={myImage5} alt="" />
        </div>
        <div className="absolute opacity-89  -bottom-10 md:-right-20 ">
          <img className="md:w-200 w-50  h-100  " src={myImage6} alt="" />
        </div>

        
      </div>

      <div className="hero z-50  min-h-screen">
        <div className="hero-content text-center">
          <div className="">
            <div>
              {/* <h1 className="md:text-7xl text-4xl mx-auto  md:w-9/12 font-bold coiny-regular">
                Experience Crypto in Color
              </h1> */}
              <Header className='md:text-7xl text-4xl mx-auto  md:w-9/12' title={'Experience Crypto in Color'}></Header>
              <p className="py-6 md:text-4xl text-2xl font-bold ">
                Fun, powerful, and secure wallets for everyday use
              </p>
            </div>
            <div className=" md:flex  gap-5   justify-center   ">
              <div className="flex items-center text-start bg-orange-400  cursor-pointer p-3 rounded-3xl  ">
                <h1 className="font-bold text-xl md:text-2xl">Download <br /> Rainbow Extension</h1>
                <img className="w-30" src={myImage8} alt="" />
              </div>
              <div className="flex items-center text-start bg-purple-500 cursor-pointer p-3 rounded-3xl">
                <h1 className="font-bold text-xl md:text-2xl">Download <br /> Rainbow Mobile</h1>
                <img className="w-30" src={myImage8} alt="" />
              </div>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
