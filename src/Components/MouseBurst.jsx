// useState, useEffect – React-এর হুক।

// motion, AnimatePresence – framer-motion থেকে আনিমেশন করার জন্য।

// rainbowImage – আপনার rainbow-type image, যেটা burst-এ ব্যবহার করা হবে।
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rainbowImage from "../assets/Banner/vK8ECGL27BFN7tScchchrKWCgPA.avif"; // এখান থেকে ইমেজ import করো

const MouseBurst = () => {
  const [clicks, setClicks] = useState([]);  //   এখানে clicks হচ্ছে মাউসে ক্লিকের location সংরক্ষণ করার জন্য একটি state।
// প্রতিবার ক্লিক করলে, নতুন location setClicks দিয়ে add হবে।
   

useEffect(() => {
    const handleClick = (e) => {
      const { clientX, clientY } = e;
// যখন mouse-এ click হয়, তখন cursor এর x এবং y coordinate নেয়া হয়।
      const newClick = {
        id: Date.now() + Math.random(),
        x: clientX,
        y: clientY,
      };
// প্রতিটি ক্লিকের জন্য unique id, এবং click position (x, y) নিয়ে নতুন object তৈরি হয়।

      setClicks((prev) => [...prev, newClick]);
// এই click object-টি clicks array-তে যোগ করা হচ্ছে।
      // 1.2s পরে ইমেজগুলো সরিয়ে ফেলা হবে
      setTimeout(() => {
        setClicks((prev) => prev.filter((item) => item.id !== newClick.id));
      }, 1200);
    };
// ১.২ সেকেন্ড পর এই ইমেজটি মুছে ফেলা হচ্ছে যাতে সে অদৃশ্য হয়ে যায়।

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick); // মাউসে click হলে handleClick function ট্রিগার হবে। 
  }, []);   // component unmount হলে event listener রিমুভ করা হবে।


  const particles = 10; // কতগুলো ইমেজ ছড়াবে // একটি ক্লিকে কয়টি ইমেজ ছড়াবে – এখানে ১০টি নির্ধারণ করা হয়েছে।
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none"> 
    {/* পুরো স্ক্রিনে MouseBurst ওভারলে হিসেবে বসে থাকবে। 
pointer-events-none দিলে এটা user interaction block করবে না। */}

      <AnimatePresence>
        {clicks.map((click) =>
          Array.from({ length: particles }).map((_, i) => {
            const angle = (360 / particles) * i;
            const radius = 100;
            const radian = (angle * Math.PI) / 180;

            const dx = Math.cos(radian) * radius;
            const dy = Math.sin(radian) * radius;

            // প্রতিটি click-এর জন্য ১০টি ইমেজ বানানো হয়। 
            // প্রতিটা ইমেজ এক বৃত্তের এক নির্দিষ্ট কোণে ছড়ায় (angle হিসাব করে)। 
            // dx, dy দিয়ে ইমেজ কোন দিকে যাবে তা ঠিক করা হয়।


            return (
              <motion.img
                key={`${click.id}-${i}`}
                src={rainbowImage}
                initial={{
                  x: click.x,
                  y: click.y,
                  scale: 0.3,
                  opacity: 1,
                }}
                animate={{
                  x: click.x + dx,
                  y: click.y + dy,
                  scale: 1.2,
                  opacity: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2"
              />

//               প্রতিটি ইমেজ: 
// শুরু হয় cursor পজিশনে ছোট (scale 0.3), 
// animate হয়ে চারদিকে ছড়িয়ে পড়ে (x+dx, y+dy), বড় হয় এবং fade হয়ে যায়।
            );
          })
        )}
      </AnimatePresence>
    </div>
  );
};

export default MouseBurst;

// globally use korar jonno ai vaba use korta hoba
//  <StrictMode>
//     <MouseBurst></MouseBurst>
//     <RouterProvider router={router} />
//   </StrictMode>,
