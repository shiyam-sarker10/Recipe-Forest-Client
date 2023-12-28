import hotRecipe from '../../../assets/hotRecipe.png';
import Fork from '../../../assets/ForkKnife.png';
import timer from "../../../assets/Timer.png";
import play from "../../../assets/PlayCircle.png";


const Banner = () => {
    return (
      <div className="max-w-[1366px]  my-5  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ">
        <div className="flex h-[80vh] ">
          <div className="bg-[#e7fafe] w-1/2 rounded-tl-3xl  rounded-bl-3xl p-10 space-y-10">
            <div className="bg-white py-2 px-4 rounded-full flex items-center gap-2 w-max">
              <img src={hotRecipe} alt="" />
              <span className="font-semibold text-sm">Hot Recipes</span>
            </div>

            <div className="space-y-4">
              {/* heading and desc  */}
              <h1 className="text-6xl font-semibold w-[90%] leading-[60px]">
                Super delicious salad rice
              </h1>
              <p className="text-black/60">
                Experience delight in every bite with our super delicious salad
                rice – a perfect blend of freshness and flavor.
              </p>

              {/* timer and formk  */}

              <div className="flex gap-4">
                <div className="flex items-center gap-2 bg-black/5 py-2 px-4 rounded-full">
                  <img src={timer} alt="Time" />
                  <span className="text-xs text-black/60 font-semibold">
                    10 Minutes
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-black/5 py-2 px-4 rounded-full">
                  <img src={Fork} alt="Salad Rice" />
                  <span className="text-xs text-black/60 font-semibold">
                    Salad Rice
                  </span>
                </div>
              </div>
            </div>
            {/* last part  */}
            <div className="pt-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  className="w-[50px] h-[50px] rounded-full object-cover"
                  src="https://uploads-ssl.webflow.com/5e86c7170f1ab21474c3f2a4/5ef1d04b4056011f67df2ed7_Natural%2Blight%2B-%2BFood%2BPhotography%2B-%2BFrenchly%2B-4365.jpg"
                  alt=""
                />
                <div>
                  <p className="font-semibold">John Smith</p>
                  <p className="text-black/60"> 15 March 2022</p>
                </div>
              </div>
              <button className="px-4 flex gap-2 items-center rounded-lg py-3 text-sm bg-black text-white ">
                View Recipe <img src={play} alt="" />
              </button>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                'url("https://uploads-ssl.webflow.com/5e86c7170f1ab21474c3f2a4/5ef1d04b4056011f67df2ed7_Natural%2Blight%2B-%2BFood%2BPhotography%2B-%2BFrenchly%2B-4365.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="bg-blue-500 w-1/2 rounded-tr-3xl  rounded-br-3xl"
          >
            df
          </div>
        </div>
      </div>
    );
};

export default Banner;