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
    <div className="bg-gradient-to-t from-[#E7FAFE] to-[#E7FAFE]/40 px-4 pt-4 pb-8 w-[316px] space-y-6 rounded-2xl ">
      <div>
        <img
          className="w-[300px] h-[200px] rounded-xl object-cover"
          src={image}
          alt=""
        />
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
