import React, { useState } from 'react';
import Header from '../../Components/Header';
import vedio1 from "../../assets/Hundreds_wallets/keybord.mp4";
import vedio2 from "../../assets/Hundreds_wallets/ifylK94PT0esgyo60E9k95VHJSU.mp4";
import vedio3 from "../../assets/Hundreds_wallets/OJmUgxKZDw2rJCngrvLLwRGd0U.mp4";
import vedio4 from "../../assets/Hundreds_wallets/PiAV5ldxJoY8M9O1OA5Iv9daxE.mp4";
import vedio5 from "../../assets/Hundreds_wallets/keybord.mp4";
import Marquee from 'react-fast-marquee';

export const Hundreds_wallets = () => {
 

  const actions = [
    { title: 'Switch and reorder wallets', video: vedio1 },
    { title: 'Send', video: vedio2 },
    { title: 'Manage NFTs', video: vedio3 },
    { title: 'Swap & Bridge', video: vedio4 },
    { title: 'Swap & Bridge', video: vedio5 },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-200 to-purple-300 py-10">
      <div className="w-11/12 mx-auto">
        <Header
          className="text-5xl py-5 w-[500px] text-start"
          title="Effortlessly manage hundreds of wallets"
        />
      </div>

      <div     >
        <Marquee pauseOnHover speed={40}  >
            {
                actions?.map(data=> <div
                    
                    className="flex flex-col items-center justify-center    mx-6"
                  >
                    <video
                      className="w-[300px] h-[500px] object-cover rounded-2xl  shadow-lg"
                      src={data.video}
                      controls
                      autoPlay
                      muted
                      loop
                    />
                    <h1 className="mt-4 text-2xl font-bold   text-center">
                      {data.title}
                    </h1>
                  </div>)
            }
        </Marquee>
      </div>
    </div>
  );
}

 