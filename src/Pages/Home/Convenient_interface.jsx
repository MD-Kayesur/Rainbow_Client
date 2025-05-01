import React from "react";
import Header from "../../Components/Header";
import img1 from "../../assets/Convenient_interface/l9wyiSXOd6E7GjaifADUTpFk.avif";
import img2 from "../../assets/Convenient_interface/EiAAb6HdWVkLjXTMY3xQYHo5lQI.avif";
import img3 from "../../assets/Convenient_interface/aHU5vyR6vcxVXVuq7JT4IJ9Z0u4.avif";
import img4 from "../../assets/Convenient_interface/X3QpZJjrDO7P5Aibd75MBU5toRM.avif";
import img5 from "../../assets/Convenient_interface/HLFjtkh7H13XNvrotUtSfFeUvA.avif";
import img6 from "../../assets/Convenient_interface/nCn8ZTvrjnWD8ABEoHmmYFSqc.avif";
const Convenient_interface = () => {
  return (
    <div className=" bg-gradient-to-b from-blue-100 to-bash-300 ">
      <div className="w-11/12 mx-auto">
        <div>
          <Header
            className="text-6xl py-15 w-8/12 mx-auto text-center"
            title={"One convenient interface tailored for you"}></Header>
        </div>
        <div className="grid grid-cols-3 gap-5 ">
            
          <div className="card     shadow-sm">
            <figure className="px-10 pt-10">
              <img src={img1} alt="Shoes" className="rounded-xl w-40 h-40 p-5 bg-red-300" />
            </figure>
            <div className="card-body items-center flex text-center">
              <h2 className=" text-xl text-gray-600">
                {" "}
                <span className="text-black text-2xl"> mpersonation mode </span> Use any
                wallet in read-only mode with just an address
              </h2>
            </div>
          </div>

          <div className="card     shadow-sm">
            <figure className="px-10 pt-10">
              <img src={img2} alt="Shoes" className="rounded-xl w-40 h-40 p-5 bg-yellow-300" />
            </figure>
            <div className="card-body items-center flex text-center">
              <h2 className=" text-xl text-gray-600">
                {" "}
                <span className="text-black text-2xl">  rdware wallets </span>  
                Do anything with Ledger & Trezor from Rainbow
              </h2>
            </div>
          </div>

          <div className="card     shadow-sm">
            <figure className="px-10 pt-10">
              <img src={img3} alt="Shoes" className="rounded-xl w-40 h-40 p-5 bg-green-300" />
            </figure>
            <div className="card-body items-center flex text-center">
              <h2 className=" text-xl text-gray-600">
                {" "}
                <span className=" text-black text-2xl"> All the L2s </span>Tokens, activity details, and NFTs for the L2s that matter
              </h2>
            </div>
          </div>

          <div className="card     shadow-sm">
            <figure className="px-10 pt-10">
              <img src={img4} alt="Shoes" className="rounded-xl w-40 h-40 p-5 bg-blue-300" />
            </figure>
            <div className="card-body items-center flex text-center">
              <h2 className=" text-xl text-gray-600">
                {" "}
                <span className="text-black text-2xl"> Secure Leverages </span>  the latest extension standards for your safety and sec
              </h2>
            </div>
          </div>

          <div className="card     shadow-sm">
            <figure className="px-10 pt-10">
              <img src={img5} alt="Shoes" className="rounded-xl w-40 h-40 p-5 bg-purple-300" />
            </figure>
            <div className="card-body items-center flex text-center">
              <h2 className=" text-xl text-gray-600">
                {" "}
                <span className="text-black text-2xl"> NFTs See </span> your collections, access market data, & trade
              </h2>
            </div>
          </div>

          <div className="card     shadow-sm">
            <figure className="px-10 pt-10">
              <img src={img6} alt="Shoes" className="rounded-xl w-40 h-40 p-5 bg-orange-300" />
            </figure>
            <div className="card-body items-center flex text-center">
              <h2 className=" text-xl text-gray-600">
                {" "}
                <span className="text-black text-2xl">Custom RPCs </span>  

Add any EVM chain
              </h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Convenient_interface;
