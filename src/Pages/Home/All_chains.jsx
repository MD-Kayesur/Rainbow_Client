import React from "react";
import Header from "../../Components/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import icon1 from "../../assets/crome.png"; // নিজস্ব আইকন ইউজ করো
import icon2 from "../../assets/fireFox.jpg"; // নিজস্ব আইকন ইউজ করো
import icon3 from "../../assets/-edge-.png"; // নিজস্ব আইকন ইউজ করো
import icon4 from "../../assets/crome.png"; // নিজস্ব আইকন ইউজ করো
import icon5 from "../../assets/fireFox.jpg"; // নিজস্ব আইকন ইউজ করো
 import icon6 from "../../assets/fireFox.jpg"; // নিজস্ব আইকন ইউজ করো
import icon7 from "../../assets/fireFox.jpg"; // নিজস্ব আইকন ইউজ করো
import icon8 from "../../assets/fireFox.jpg"; // নিজস্ব আইকন ইউজ করো
import icon9 from "../../assets/fireFox.jpg"; // নিজস্ব আইকন ইউজ করো
import icon10 from "../../assets/fireFox.jpg"; // নিজস্ব আইকন ইউজ করো
import icon12 from "../../assets/tE16Zz9nhtx0Vm0bG7UMJonMcQg.avif"; // নিজস্ব আইকন ইউজ করো

const All_chains = () => {
    const { scrollY } = useScroll();
    const rotate = useTransform(scrollY, [0, 1000], [0, 360]);
  
    const icons = [icon1, icon2, icon3, icon4, icon5, icon6,icon7,icon8,icon9,icon10,];
  
    const radius = 200;
  return (
    <div className="relative min-h-screen  bg-gradient-to-b from-purple-300 to-blue-100 overflow-hidden">

   <div className="w-11/12 mx-auto">
   <Header
        className="text-5xl py-5 w-[500px] text-start"
        title={"All the chains that matter in one place"}></Header>
  <div className="relative   flex items-center justify-center  overflow-hidden">
      {/* ঘুরন্ত parent div */}
      <motion.div
        style={{ rotate }}
        className="absolute w-[500px] h-[500px] rounded-full"
      >
        {icons.map((icon, i) => {
          const angle = (i / icons.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.img
              key={i}
              src={icon}
              alt={`icon-${i}`}
              className="w-12 h-12 absolute"
              style={{
                left: 250 + x - 24, // 24 = icon size/2 (center offset)
                top: 250 + y - 24,
              }}
            />
          );
        })}
      </motion.div>

      {/* সামনে Card / Wallet Info */}
      <div className="z-10 ">
        <img className="w-[300px] h-[500px] " src={icon12} alt="" />
      </div>
    </div>
   </div>
    </div>
  );
};

export default All_chains;
