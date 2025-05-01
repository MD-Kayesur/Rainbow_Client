import Header from "../../Components/Header";
import img1 from "../../assets/Swap_Expariance/4asjDMguVo7bEZsBXRXyk1o917Q.avif";
import img2 from "../../assets/Swap_Expariance/YuFCXnOfwz5r6j4BPifCQ2M5OQ.avif";
import img3 from "../../assets/Swap_Expariance/HLFjtkh7H13XNvrotUtSfFeUvA.avif";
import img4 from "../../assets/Swap_Expariance/I1k5Tlz7dU6vOPD60DULLsIR0.avif";
import img5 from "../../assets/Swap_Expariance/JtmyzlQ7ELs92BwxjJW1AvhRqH4.avif";

const Swap_Expariance = () => {
  return (
    <div className=" bg-gradient-to-b from-yellow-100 to-blue-100">
        {/* w-11/12 mx-auto */}
      <div className="w-11/12 mx-auto">
        <div>
          <Header
            className={"text-6xl py-10 w-8/12 mx-auto text-center"}
            title={"Swap And bridge & Expariance"}></Header>
        </div>
        <div className=" grid grid-cols-2 gap-5 justify-between items-center">
          <div className="bg-gradient-to-b from-blue-300 via-green-100 to-rose-300 p-5 rounded-3xl h-full">
            <img
              className="rounded-xl w-40 h-40 p-5 hover:rotate-180 transform transition-all duration-500"
              src={img2}
              alt=""
              srcset=""
            />
            <Header
              className={"text-5xl "}
              title={"Swap and bridge It just works"}></Header>
            <h1 className="text-xl text-gray-400 font-bold">
              Cross-chain swaps, endless DEX and bridge liquidity, and Flashbots
              protection from sandwich attacks and MEV.
            </h1>
            <h1 className="text-xl py-4  font-bold">Always the best available price</h1>
            <h1  className="text-xl   font-bold">What you see is what you get</h1>
            <img className="rounded-xl w-[500px] h-[300px] p-5" src={img1} alt="" />
          </div>


          
 
          <div className="bg-gradient-to-b from-pink-100 via-blue-100 to-green-100  p-5 rounded-3xl h-full">
            <img
              className="rounded-xl w-40 h-40 p-5 hover:rotate-180 transform transition-all duration-500"
              src={img3}
              alt=""
              srcset=""
            />
            <Header
              className={"text-5xl "}
              title={"The best way to experience NFTs"}></Header>
            <h1 className="text-xl text-gray-400 font-bold">
            See and organize all your NFTs across all Ethereum chains on mobile and desktop.
            </h1>
            <h1 className="text-xl py-4  font-bold">All the media formats</h1>
            <h1  className="text-xl   font-bold">All the chains that matter</h1>
            <img className="rounded-xl w-[500px] h-[500px]   -mt-18 p-5" src={img4} alt="" />
          </div>


          <div className="col-span-2 flex items-center  bg-gradient-to-b from-orange-100 to-blue-300 p-5 rounded-3xl">
         <div className="flex-1/2">
         <img
              className="rounded-xl w-40 h-40 p-5 hover:rounded-full hover:rotate-180 transform transition-all duration-500"
              src={img5}
              alt=""
              srcset=""
            />
            <Header
              className={"text-5xl "}
              title={"Controlled by you Supported by us"}></Header>
            <h1 className="text-xl text-gray-600 font-bold py-3">
            You are in full control of your funds, and we never have access to your private keys. But if you need support, we're here for you. 
            </h1>
            <h1 className="text-xl   font-bold">Global support team 24/7</h1>
         </div>
         <div className="flex-1/2 relative">
            <h2 className="text-xl rotate-20 font-bold inline-block bg-green-400 p-7 rounded-full transform transition duration-300 hover:scale-105">Best and fastest customer service in in web3 even better then so many web2 companies</h2>
            <h2 className="text-xl font-bold mb-4 inline-block bg-red-400 p-7 rounded-full transform transition duration-300 hover:scale-105">How is your support so f*ing good?</h2>
            <h2 className="text-xl   font-bold inline-block bg-blue-400   -rotate-6 p-7 rounded-full transform transition duration-300 hover:scale-105">best support by far super easy to use, great design, and solid customer service </h2>
            <h2 className="text-xl   rotate-15 font-bold inline-block bg-purple-400 p-7 rounded-full transform transition duration-300 hover:scale-105">Thanks for responding within 4 minutes & assisting w/ incredible customer service!</h2>
            <h2 className="text-xl font-bold inline-block rotate-6 bg-red-500 p-7 rounded-full transform transition duration-300 hover:scale-105">Gotta say, @rainbowdotme is probably the wallet I’d recommend to new users. super easy to use, great design, and solid customer service 👌</h2>
         </div>
         
           
          </div>



        </div>
      </div>
    </div>
  );
};

export default Swap_Expariance;
