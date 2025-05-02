import img1 from "../../assets/notifiedMOney/0Yc8U1018CTvo510TyLaaxLfTPE.avif";
import img2 from "../../assets/notifiedMOney/oLaeD8taIuSUBaCIZtth9eStBBU.avif";
import img3 from "../../assets/notifiedMOney/WYJ4Rp4VjdgyQFj2ArOSr5xt4A.avif";
import img4 from "../../assets/notifiedMOney/yX7N3E7u8BiyOrStXzh2Ddr0Vk.avif";
import Header from "../../Components/Header";
import img5 from "../../assets/notifiedMOney/WiCqVn6By9ZXYgeKt4CfAQ9YYw.avif";
//  import img6 from '../../assets/notifiedMOney'

const Notified_Money = () => {
  return (
    <div className="bg-gradient-to-b from-blue-300 via-green-100 to-rose-300 p-5">
      <div className="w-11/12 mx-auto">
      <div className=" grid grid-cols-2 gap-5 justify-between items-center">
        <div className="bg-gradient-to-b from-blue-300 via-green-100 to-rose-300 p-5 rounded-3xl h-full">
          <img
            className="rounded-xl w-40 h-40 p-5  "
            src={img3}
            alt=""
            srcset=""
          />
          <Header
            className={"text-5xl "}
            title={"Get notified about what matters most"}></Header>
          <h1 className="text-xl text-gray-400 py-5 font-bold">
            Know what happens the instant it’s confirmed onchain. Customize the
            alerts you receive, from the type of transaction to the individual
            wallets you watch.
          </h1>

          <img
            className="rounded-xl w-[500px] h-[300px] p-5"
            src={img1}
            alt=""
          />
        </div>

        <div className="bg-gradient-to-b from-pink-100 via-blue-100 to-green-100  p-5 rounded-3xl h-full">
          <img
            className="rounded-xl w-40 h-40 p-5  "
            src={img4}
            alt=""
            srcset=""
          />
          <Header
            className={"text-5xl "}
            title={"Find the money that might be waiting for you"}></Header>
          <h1 className="text-xl text-gray-400 py-9 font-bold">
            See and accept all of your NFT offers inside Rainbow
          </h1>

          <img
            className="rounded-xl w-[500px] h-[300px]     p-5"
            src={img2}
            alt=""
          />
        </div>

        <div className="col-span-2 flex items-center  bg-gradient-to-b from-orange-100 to-blue-300 p-5 rounded-3xl">
          <div className="flex-1/2 text-center">
            <img
              className="rounded-full w-40 h-40 p-5 mx-auto hover:rounded-full hover:rotate-180 transform transition-all duration-500"
              src={img5}
              alt=""
              srcset=""
            />
            <Header
              className={"text-6xl w-8/12 mx-auto"}
              title={"The best way to set up your ENS profile"}></Header>
            <h1 className="text-xl text-gray-600 font-bold py-3">As seen in <strong className="text-2xl">Forbes</strong></h1>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Notified_Money;
