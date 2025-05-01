import { useState } from "react";
import Header from "../../Components/Header";
import img1 from "../../assets/HjctSO4d6dyMy0ENgreUrE2QYvw.avif";
import vedio1 from "../../assets/keybord.mp4";
import vedio2 from "../../assets/ifylK94PT0esgyo60E9k95VHJSU.mp4";
import vedio3 from "../../assets/OJmUgxKZDw2rJCngrvLLwRGd0U.mp4";
import vedio4 from "../../assets/PiAV5ldxJoY8M9O1OA5Iv9daxE.mp4";
import vedio5 from "../../assets/keybord.mp4";

const Keybord_Sortcart = () => {
  const [activeKey, setActiveKey] = useState("X");
  const [selectedVideo, setSelectedVideo] = useState(vedio1); // Initial video



  

  const actions = [
    { key: "K", label: "Magic Menu" ,    video: vedio1},
    { key: "1", label: "Switch your wallet" ,   video: vedio2 },
    { key: "X", label: "Swap", active: true ,   video: vedio3 },
    { key: "S", label: "Send" ,   video: vedio4 },
    { key: "W", label: "Wallets" ,   video: vedio5 },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-200 to-orange-200">
      <div className="w-11/12 mx-auto">

        {/* Top Section */}
        <div className="flex items-center gap-6 justify-evenly pt-20">
          <Header className={'text-4xl'} title="Move faster with keyboard shortcuts" />
          <div>
            <h1 className="text-xl font-bold">Leave your mouse at home</h1>
            <p className="text-xl text-gray-400 font-bold">
              A flow state experience for quick and versatile onchain actions -
              just press ⌘K and type your command.
            </p>
          </div>
        </div>

        {/* Image + Video */}
        <div className="w-full relative">
          <img className="w-screen h-screen object-cover" src={img1} alt="" />
          <video
            className="w-[200px] h-[300px] rounded-2xl absolute top-20 right-60"
            src={selectedVideo}
            controls
            autoPlay
            muted
            loop
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center items-center md:-mt-20 p-6 ">
          {actions.map((action, index) => {
            const isActive = activeKey === action.key;
            return (
              <div
                key={index}
                onClick={() => {
                  setActiveKey(action.key);
                  setSelectedVideo(action.video); // Change video
                }}
                className={`cursor-pointer flex flex-col p-3 w-50 h-24 rounded-2xl   
                  backdrop-blur-sm bg-white/40 border-white/10 transition-all
                  ${isActive ? " border-red-300 bg-white  border-4  text-black shadow-xl" : "text-gray-700"}`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-md text-xl font-bold
                    ${isActive ? "bg-red-100 text-red-500 border-2 border-red-300 " : "bg-white/70 text-gray-500 border border-gray-200"}`}
                >
                  {action.key}
                </div>
                <span className="mt-2 text-xl font-semibold">{action.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Keybord_Sortcart;
