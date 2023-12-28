import hotRecipe from '../../../assets/hotRecipe.png'

const Banner = () => {
    return (
      <div className="max-w-[1366px]  my-5  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ">
        <div className="flex h-[80vh] ">
          <div className="bg-[#e7fafe] w-1/2 rounded-tl-3xl  rounded-tb-3xl p-10 space-y-8">
            <div className="bg-white py-2 px-4 rounded-full flex items-center gap-2 w-max">
              <img src={hotRecipe} alt="" />
              <span className="font-semibold text-sm">Hot Recipes</span>
            </div>
            <div className='space-y-4'>
              <h1 className="text-6xl font-semibold w-[90%] leading-[60px]">
                Super delicious salad rice
              </h1>
              <p className='text-black/60'>
                Experience delight in every bite with our super delicious salad
                rice – a perfect blend of freshness and flavor.
              </p>
              <div>
                <div></div>
              </div>
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