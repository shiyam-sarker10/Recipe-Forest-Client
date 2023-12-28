import hotRecipe from "../../../assets/hotRecipe.png";
import Fork from "../../../assets/ForkKnife.png";
import timer from "../../../assets/Timer.png";
import play from "../../../assets/PlayCircle.png";


const BannerContent = ({ recipe }) => {
    const {
      foodTitle,
      description,
      timeToCook,
      dishName,
      image,
      authorImage,
      authorName,
      dateOfPost
    } = recipe;

  return (
    <div className="flex h-[80vh] ">
      <div className="bg-[#e7fafe] w-1/2 rounded-tl-3xl  rounded-bl-3xl p-10 space-y-10">
        <div className="bg-white py-2 px-4 rounded-full flex items-center gap-2 w-max">
          <img src={hotRecipe} alt="" />
          <span className="font-semibold text-sm">Hot Recipes</span>
        </div>

        <div className="space-y-4">
          {/* heading and desc  */}
          <h1 className="text-5xl font-semibold w-[90%] leading-[60px]">
            {foodTitle}
          </h1>
          <p className="text-black/60">{description}</p>

          {/* timer and formk  */}

          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-black/5 py-2 px-4 rounded-full">
              <img src={timer} alt="Time" />
              <span className="text-xs text-black/60 font-semibold">
                {timeToCook}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-black/5 py-2 px-4 rounded-full">
              <img src={Fork} alt="Salad Rice" />
              <span className="text-xs text-black/60 font-semibold">
                {dishName}
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
              <p className="font-semibold">{authorName}</p>
              <p className="text-black/60"> {dateOfPost}</p>
            </div>
          </div>
          <button className="px-4 active:bg-black/10 active:border active:border-black active:text-black duration-500 flex gap-2 items-center rounded-lg py-3 text-sm bg-black text-white ">
            View Recipe <img src={play} alt="" />
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-blue-500 w-1/2 rounded-tr-3xl  rounded-br-3xl"
      >
        
      </div>
    </div>
  );
};

export default BannerContent;
