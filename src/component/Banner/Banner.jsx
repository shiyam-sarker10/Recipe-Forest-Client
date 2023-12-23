import banner from '../../assets/Banner.jpg'

const Banner = () => {
    return (
      <div>
        <div className="lg:h-[calc(100vh-88px)] my-10 mx-4 ">
          <div className="h-full banner-gradient rounded-3xl text-white/90 p-10 flex items-center">
            <div className="md:w-[50%] space-y-6">
              <h1 className=" text-4xl font-semibold leading-[45px]">
                Taste the world, explore global flavors from your kitchen.
              </h1>
              <p>
                Embark on a global culinary journey, unleash your inner chef,
                and savor the joy of creating delicious meals that transport you
              </p>
              <button className="border hover:bg-white hover:text-black duration-500 ease-in-out px-6 py-4 text-white rounded-lg">
                Explore Recipes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;