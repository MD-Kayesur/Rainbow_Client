import { FaChrome, FaEdge, FaFirefox } from "react-icons/fa";
import Header from "../../Components/Header";
// import myImage1 from '../../assets/crome.png'
// import myImage2 from '../../assets/-edge-.png'
import myImage3 from '../../assets/BuildFor/fireFox.jpg'
import myImage8 from '../../assets/Banner/vK8ECGL27BFN7tScchchrKWCgPA.avif'
import { NavLink } from "react-router-dom";
 

const Built_for = () => {
    return (
        <div>
            <div className="bg-gradient-to-b from-tomato-500 to-blue-200">
            <div>
              
              <Header className='md:text-7xl text-4xl mx-auto text-center md:w-9/12' title={'Rainbow Extension. Built for speed. Built for power. Built for You.'}></Header>
            
            </div>
            <div className=" md:flex  gap-5  items-center justify-center   "> 
              <NavLink to='/download'  className="flex items-center text-start  bg-orange-500 cursor-pointer p-3 rounded-3xl">
                <h1 className="font-bold text-xl md:text-2xl">Download <br /> Rainbow Mobile</h1>
                <img className="w-30" src={myImage8} alt="" />
              </NavLink>
              <div>
                <div className="flex items-center gap-5">
                    <a href="https://www.google.com/chrome/"><FaChrome className="text-5xl" ></FaChrome> </a>
                    <a href="https://www.google.com/chrome/"> <FaEdge className="text-5xl"></FaEdge> </a>
                    <a href="https://www.google.com/chrome/"> <FaFirefox className="text-5xl"></FaFirefox>  </a>
                    <a href="https://www.google.com/chrome/"> <img className="w-20 h-20 rounded-full bg-blue-200" src={myImage3} alt="" /> </a>
                    {/* <a href="https://www.google.com/chrome/"> <FaChrome className="text-3xl"></FaChrome> </a> */}
                </div>
                 <p className="text-xl font-bold">Available in your favorite browsers</p>
              </div>
               
            </div>
          </div>
        </div>
    );
};

export default Built_for;