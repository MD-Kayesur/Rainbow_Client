import { motion, useAnimation } from "framer-motion"; //motion, useAnimation – animation manually control করার জন্য।
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; //useInView – জানার জন্য যে element টা viewport-এ দেখা যাচ্ছে কিনা (scroll করলে দেখায় কি না)।

const directionVariants = {
  up: {
    hidden: { opacity: 0, y: 60 },  //up: নিচ থেকে উপরে animate হবে।
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: 60 }, //left: বাম থেকে animate হবে (ডানে আসবে)।
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -60 }, //right: ডান থেকে animate হবে (বামে আসবে)।
    visible: { opacity: 1, x: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.8 }, //hidden = initial state, visible = final animated state।
    visible: { opacity: 1, scale: 1 },
  },
};

//children পাঠান (যে element/component animate করতে চান), direction পাঠান (default: "up")।
const FadeInOnScroll = ({ children, direction = "up" }) => {   
  const controls = useAnimation();    //এই hook দিয়ে আপনি animation এর ওপর manual control পাবেন — কখন animate শুরু বা থামবে তা নির্ধারণ করতে পারবেন।
  const [ref, inView] = useInView({    // useInView জানায় আপনার element টা screen-এ দেখা যাচ্ছে কি না। এখানে ref: কোন element কে observe করবে তা নির্দেশ করে।
    triggerOnce: false,    //inView: true/false বলে – দেখা যাচ্ছে কি না। triggerOnce: false → বারবার scroll করলেও trigger হবে।
    threshold: 0.2,     //threshold: 0.2 → element-এর ২০% screen-এ আসলে trigger হবে।
  }); 

  useEffect(() => {          // যখন element screen-এ আসে (inView === true), তখন visible animation চালু হয়।
                             // না থাকলে আবার hidden করে দেয় — তাই বারবার animate হয়।
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);


//   এখানে direction অনুযায়ী সঠিক animation variant নির্বাচন করা হচ্ছে।
// যদি ভুল বা কিছু না দেওয়া হয়, তাহলে default: "up" নেবে।
 
  const variants = directionVariants[direction] || directionVariants["up"];

//   motion.div – animated div। এর মধ্যে:

//   ref={ref} → এটিকে observe করছে (inView এর জন্য)।
  
//   initial="hidden" → শুরুতে opacity 0 থাকবে।
  
//   animate={controls} → control অনুযায়ী visible/hidden animate হবে।
  
//   variants={variants} → আপনি যে direction দিয়েছিলেন তার animation variant।
  
//   transition → কতো সময় লাগবে animate হতে (0.6s) এবং ease style।


  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;


// componenet a use korar rule
{/* <FadeInOnScroll direction="left">
  <h2>Hello World</h2>
</FadeInOnScroll>
🔸 এতে h2 tag টা বাম থেকে ডানে animate হয়ে আসবে যখন viewport-এ আসবে। */}
