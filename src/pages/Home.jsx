

import Category from "../component/Home/Category/Category";
import Banner from "../component/Home/Banner/Banner";
import HomeRecipes from "../component/Home/HomeRecipes/HomeRecipes";
import CanBeChef from "../component/Home/CanBeChef/CanBeChef";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <HomeRecipes></HomeRecipes>
            <CanBeChef></CanBeChef>
        </div>
    );
};

export default Home;