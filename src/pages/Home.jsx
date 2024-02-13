

import Category from "../component/Home/Category/Category";
import Banner from "../component/Home/Banner/Banner";
import HomeRecipes from "../component/Home/HomeRecipes/HomeRecipes";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <HomeRecipes></HomeRecipes>
        </div>
    );
};

export default Home;