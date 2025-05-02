import img1 from "../../assets/Exclusive_drops/AqPynGSlYOCcr39v0pPiulmm10A.gif";
import img2 from "../../assets/Exclusive_drops/hrXcUi1ewZOEmxyk4xgLSLuaY.avif";
import img3 from "../../assets/Exclusive_drops/jt72X8fdeeoWRErHafQB3OZ6ds.avif";
import Header from "../../Components/Header";
//  import img1 from '../../assets/Exclusive_drops'

const Exclusive_drops = () => {
  return (
    <div className="bg-gradient-to-b from-red-300 to-blue-300 py-10">
      <div className="w-11/12 mx-auto  ">
        <div className=" ">
          <Header
            className="text-6xl py-5   text-start"
            title="Get access to exclusive drops"
          />
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="card   w-96 shadow-sm rounded-4xl">
            <figure>
              <img className="rounded-4xl" src={img3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
                The Rainbow Poolboy
              </h2>
              <p className="text-xl">
                Soak in the sun and stream tunes all onchain summer directly
                from your Rainbow Wallet
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>


          <div className="card   w-96 shadow-sm rounded-4xl">
            <figure>
              <img className="rounded-4xl" src={img2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
              Bow, the Rainbow Fini
              </h2>
              <p className="text-xl">
              A special edition Rainbow Finiliar friend that keeps you up to date with the gas prices
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>


          <div className="card   w-96 shadow-sm rounded-4xl">
            <figure>
              <img className="rounded-4xl" src={img1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
              Rainbow World
              </h2>
              <p className="text-xl">
              Generative. Interactive. Customizable. Bring your Citizen to life in Rainbow World.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Exclusive_drops;
