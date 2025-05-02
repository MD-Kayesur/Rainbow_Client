import React from "react";
import img1 from "../../assets/download/zfZq4Dlk5gBvDo0BLoBSkrL9c.avif";
import img2 from "../../assets/download/vm4oQ51bPFtxep5h4VtAFpkhFI.avif";
import img3 from "../../assets/download/VMlyJdWdfaRDDAbGARnULWDMEVc.avif";
import img4 from "../../assets/download/pxlkJb9k6o4OTq9j1XritX2BE.avif";
import { FaBox, FaChrome, FaDotCircle } from "react-icons/fa";
import Header from "../../Components/Header";
import img5 from "../../assets/BuildFor/crome.png";
import img6 from "../../assets/BuildFor/-edge-.png";
import img7 from "../../assets/BuildFor/fireFox.jpg";

const Download_Dextop = () => {
  // const action= [
  //     {img:'img5' , name:'Crome'},
  //     {img:'../../assets/BuildFor/crome.png' , name:'Crome'},
  //     {img:'/crome.png' , name:'Crome'},
  //     {img:'../../assets/BuildFor/crome.png' , name:'Crome'},
  //     {img:'../../assets/BuildFor/crome.png' , name:'Crome'},
  //     {img:'../../assets/BuildFor/crome.png' , name:'Crome'}
  // ]

  return (
    <div className="py-20 bg-gradient-to-b from-blue-200 to-green-200">
      <div className="w-11/12 mx-auto  ">
        <div className="flex items-center gap-5 ">
          <div className="relative flex-1/2">
            <div className="absolute right-0 py-3 top-0 pr-5 items-center border-b-2 w-full flex gap-4 justify-end rounded-4xl backdrop-blur-xl">
              <img className="w-10 h-10  " src={img2} alt="" />
              <img className="w-10 rounded-full " src={img4} alt="" />
              {/* <h1>
                <FaBox className="text-4xl"></FaBox>
              </h1> */}
              <h2 className="text-center -pl-7">
                <FaDotCircle className="text-4xl"></FaDotCircle>
              </h2>
            </div>

            <img
              className="absolute w-[450px] right-0 top-10"
              src={img3}
              alt=""
            />
            <img className="h-screen rounded-4xl " src={img1} alt="" />
          </div>

          <div className="h-screen flex-1/2 bg-gradient-to-b from-blue-200 to-green-200">
            <Header
              className={"text-6xl px-5 text-center"}
              title={"Download for desktop"}></Header>
            <div className="grid grid-cols-3 gap-7 py-10 ">
              <a href="https://chromewebstore.google.com/detail/rainbow/opfgelmcmbiajamepnmloijbpoleiama">
                {" "}
                <div className="text-center bg-base-300 p-3 rounded-4xl">
                  <img
                    className="mx-auto w-30 h-30 rounded-full "
                    src={img5}
                    alt=""
                  />
                  <h2 className="text-2xl font-bold">Crome</h2>
                </div>
              </a>

              <div className="text-center bg-base-300 p-3 rounded-4xl">
                <img
                  className="mx-auto w-30 h-30 rounded-full "
                  src={img6}
                  alt=""
                />
                <h2 className="text-2xl font-bold">Edge</h2>
              </div>
              <a href="https://addons.mozilla.org/en-US/firefox/addon/rainbow-extension/">
                <div className="text-center bg-base-300 p-3 rounded-4xl">
                  <img
                    className="mx-auto w-30 h-30 rounded-full "
                    src={img7}
                    alt=""
                  />
                  <h2 className="text-2xl font-bold">FireFox</h2>
                </div>
              </a>
              <a href="https://chromewebstore.google.com/detail/rainbow/opfgelmcmbiajamepnmloijbpoleiama">
                <div className="text-center bg-base-300 p-3 rounded-4xl">
                  <img
                    className="mx-auto w-30 h-30 rounded-full "
                    src={img5}
                    alt=""
                  />
                  <h2 className="text-2xl font-bold">Crome</h2>
                </div>
              </a>
              <div className="text-center bg-base-300 p-3 rounded-4xl">
                <img
                  className="mx-auto  w-30 h-30 rounded-full "
                  src={img6}
                  alt=""
                />
                <h2 className="text-2xl font-bold">Edge</h2>
              </div>
              <a href="https://addons.mozilla.org/en-US/firefox/addon/rainbow-extension/">
                <div className="text-center bg-base-300 p-3 rounded-4xl">
                  <img
                    className="mx-auto w-30 h-30 rounded-full "
                    src={img7}
                    alt=""
                  />
                  <h2 className="text-2xl font-bold">FireFox</h2>
                </div>
              </a>
              {/* <img className='absolute w-[300px]' src={img3} alt="" />
        <img className='absolute w-[300px]' src={img3} alt="" /> * */}
              {/* <img className='absolute w-[300px]' src={img3} alt="" /> */}
              {/* <img className='absolute w-[300px]' src={img3} alt="" />
        <img className='absolute w-[300px]' src={img3} alt="" />
        <img className='absolute w-[300px]' src={img3} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download_Dextop;
