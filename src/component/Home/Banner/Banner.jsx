import BannerContent from "./BannerContent";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const Banner = () => {
  const recipes = [
    {
      foodTitle: "Super Delicious Salad Rice",
      description:
        "Experience delight in every bite with our super delicious salad rice – a perfect blend of freshness and flavor.",
      timeToCook: "10 Minutes",
      dishName: "Salad Rice",
      image:
        "https://uploads-ssl.webflow.com/5e86c7170f1ab21474c3f2a4/5ef1d04b4056011f67df2ed7_Natural%2Blight%2B-%2BFood%2BPhotography%2B-%2BFrenchly%2B-4365.jpg",
      authorImage: "author_image_1.jpg",
      authorName: "Chef John Doe",
      dateOfPost: "15 March 2023",
    },
    {
      foodTitle: "Flavorful Mushroom Risotto",
      description:
        "Indulge in the rich and savory flavors of our mushroom risotto, a delightful dish that brings comfort to your table.",
      timeToCook: "25 Minutes",
      dishName: "Mushroom Risotto",
      image:
        "https://thebusybaker.ca/wp-content/uploads/2018/03/easy-mushroom-risotto-fbigBEST.jpg",
      authorImage: "author_image_2.jpg",
      authorName: "Chef Jane Smith",
      dateOfPost: "20 April 2023",
    },
    {
      foodTitle: "Spicy Chickpea Curry",
      description:
        "Warm your taste buds with our spicy chickpea curry, a quick and easy recipe that packs a punch of flavors.",
      timeToCook: "15 Minutes",
      dishName: "Chickpea Curry",
      image:
        "https://myheartbeets.com/wp-content/uploads/2020/07/indian-chickpea-stir-fry.jpg",
      authorImage: "author_image_3.jpg",
      authorName: "Chef Alex Johnson",
      dateOfPost: "5 May 2023",
    },
    {
      foodTitle: "Sweet Potato Gnocchi",
      description:
        "Discover the joy of homemade sweet potato gnocchi, a delicious and satisfying dish that's surprisingly simple to make.",
      timeToCook: "30 Minutes",
      dishName: "Sweet Potato Gnocchi",
      image:
        "https://fullofplants.com/wp-content/uploads/2021/11/sweet-potato-gnocchi-with-kale-lime-pesto-plant-based-vegan-dish-gluten-free-26.jpg",
      authorImage: "author_image_4.jpg",
      authorName: "Chef Maria Rodriguez",
      dateOfPost: "12 June 2023",
    },
  ];
    return (
      <div className="max-w-[1366px]  my-5  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {recipes.map((recipe, idx) => (
            <SwiperSlide key={idx}>
              <BannerContent recipe={recipe} key={idx}></BannerContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default Banner;