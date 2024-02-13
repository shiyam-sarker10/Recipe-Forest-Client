import timer from "../../../assets/Timer.png";
import Fork from "../../../assets/ForkKnife.png";

const FoodCard = ({ recipe }) => {
    const {
      foodTitle,
      description,
      timeToCook,
      dishName,
      image,
      authorImage,
      authorName,
      dateOfPost,} = recipe
  return (
    <div className="bg-gradient-to-t from-[#E7FAFE] to-[#E7FAFE]/40 px-4 pt-4 pb-8 cursor-pointer w-[316px] space-y-6 rounded-2xl ">
      <div className="relative">
        <img
          className="w-[300px] h-[200px] rounded-xl object-cover"
          src={image}
          alt=""
        />
        <span className="w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full border absolute top-4 right-4">
          <svg
            width={20}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M 983.384 381.465 c 0 -147.456 -119.467 -266.923 -266.923 -266.923 c -81.4649 0 -154.283 36.4089 -203.207 93.8662 c -48.9245 -57.4578 -121.856 -93.8662 -203.207 -93.8662 c -147.456 0 -266.923 119.467 -266.923 266.923 c 0 77.3689 35.6125 142.109 85.5609 195.811 L 514.275 947.964 l 378.994 -366.592 c 48.0142 -50.0622 90.112 -120.377 90.112 -199.907 Z"
                fill="#ff6363"
              ></path>
              <path
                d="M 514.275 947.964 L 128.569 577.276 C 78.507 523.574 43.008 458.835 43.008 381.465 c 0 -147.456 119.467 -266.923 266.923 -266.923 c 81.4649 0 154.283 36.4089 203.207 93.8662 l 1.13778 739.555 Z"
                fill="#ff6363"
              ></path>
            </g>
          </svg>
        </span>
      </div>
      <h4 className="font-bold text-xl">{foodTitle}</h4>
      <div className="flex items-center justify-between">
        <div className="flex  items-center gap-2 bg-black/5 py-1 px-2 lg:px-4 rounded-full">
          <img src={Fork} alt="Salad Rice" />
          <span className="text-xs text-black/60 font-bold">{dishName}</span>
        </div>
        <div className="flex items-center gap-2 bg-black/5 py-1 px-2 lg:px-4 rounded-full">
          <img className="" src={timer} alt="Salad Rice" />
          <span className="text-xs text-black/60 font-bold">{timeToCook}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
