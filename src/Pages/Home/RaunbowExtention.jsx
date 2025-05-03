import img1 from "../../assets/WB7cWZkCOhrZwymgwc1ZSbxVHw.avif";
import img2 from "../../assets/Db47uuVucT0OblJscJJ8IPGxpgU.png";
import img3 from "../../assets/fbj8plFz0twtbXVQ2m4jnwqRUQ.avif";
import img4 from "../../assets/bNPsntOiWsTdbnf3oHZenwGVfk.avif";
import FadeInOnScroll from "../../Components/FadeInOnScroll ";

const RaunbowExtention = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-blue-200 to-tomato-500 ">
         <FadeInOnScroll direction="left">
      <div className="relative">
        <div className="absolute left-10  top-100 z-10">
          <img className="w-70" src={img4} alt="" />
        </div>
        <div className="absolute  z-10 -right-40 bottom-30  ">
          <img className="w-100" src={img2} alt="" />
        </div>
        <div className=" absolute left-70 ">
          <img className=" w-200 " src={img1} alt="" />
        </div>
        <div className="w-full bg-cover">
          <img src={img3} alt="" />
        </div>
      </div>
      </FadeInOnScroll>
    </div>
    </div>
  );
};

export default RaunbowExtention;
