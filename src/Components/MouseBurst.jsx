import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rainbowImage from "../assets/Banner/vK8ECGL27BFN7tScchchrKWCgPA.avif"; // এখান থেকে ইমেজ import করো

const MouseBurst = () => {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const { clientX, clientY } = e;

      const newClick = {
        id: Date.now() + Math.random(),
        x: clientX,
        y: clientY,
      };

      setClicks((prev) => [...prev, newClick]);

      // 1.2s পরে ইমেজগুলো সরিয়ে ফেলা হবে
      setTimeout(() => {
        setClicks((prev) => prev.filter((item) => item.id !== newClick.id));
      }, 1200);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const particles = 10; // কতগুলো ইমেজ ছড়াবে

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <AnimatePresence>
        {clicks.map((click) =>
          Array.from({ length: particles }).map((_, i) => {
            const angle = (360 / particles) * i;
            const radius = 100;
            const radian = (angle * Math.PI) / 180;

            const dx = Math.cos(radian) * radius;
            const dy = Math.sin(radian) * radius;

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
            );
          })
        )}
      </AnimatePresence>
    </div>
  );
};

export default MouseBurst;
