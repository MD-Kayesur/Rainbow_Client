import Header from "../../Components/Header";

import img1 from "../../assets/BuildFor/crome.png";
import img2 from "../../assets/BuildFor/fireFox.jpg";
import img3 from "../../assets/Banner/hU2QG6d9scwuab7no8Kzy4G4.avif";
import img4 from "../../assets/Banner/jiid6nfu78vtDFgJz0L0Ga87uFg.avif";
import img5 from "../../assets/Banner/WdqwfLzM7511b0vTKJhyOovVw8.avif";
import img6 from "../../assets/Banner/UFvPlymoCJQRWIcq6OuiAEro.avif";

const Download_mobile = () => {
  return (
    <div className="bg-gradient-to-b from-green-200 to-red-200">
      <div className="flex w-11/12 gap-6 mx-auto items-center ">
        <div className=" flex-1/2 bg-gradient-to-b from-blue-200 to-green-200 h-screen py-7 rounded-4xl">
          <Header
            className={"text-7xl px-5 text-center"}
            title={"Download for desktop"}></Header>
          <div className="flex items-center justify-center gap-5 py-10">
          <a href="https://chromewebstore.google.com/detail/rainbow/opfgelmcmbiajamepnmloijbpoleiama">

            <div className="text-center bg-base-300 p-3 rounded-4xl">
              <img
                className="mx-auto w-30 h-30 rounded-full "
                src={img1}
                alt=""
                />
              <h2 className="text-2xl font-bold">Crome</h2>
            </div>
                </a>
                <a href="https://addons.mozilla.org/en-US/firefox/addon/rainbow-extension/">

            <div className="text-center bg-base-300 p-3 rounded-4xl">
              <img
                className="mx-auto w-30 h-30 rounded-full "
                src={img2}
                alt=""
                />
              <h2 className="text-2xl font-bold">FireFox</h2>
            </div>
                </a>
          </div>
        </div>
        <div className="flex-1/2 relative h-screen bg-gradient-to-b from-red-200 to-green-200 rounded-4xl"> 
        
        <img className="absolute top-0 left-0 w-90" src={ img5} alt="" />
        <img className="absolute w-[450px]" src={ img4} alt="" />
        <img className="absolute top-0 right-0 w-100"  src={ img3} alt="" />
        <img className="absolute bottom-0 left-0 opacity-90 " src={ img6} alt="" />
        
        
        </div>
      </div>
    </div>
  );
};

export default Download_mobile;
