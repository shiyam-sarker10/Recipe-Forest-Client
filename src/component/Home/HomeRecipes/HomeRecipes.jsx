import React from 'react';
import Header from '../../shared/Header/Header';
import FoodCard from '../../shared/FoodCard/FoodCard';
import Container from '../../shared/Container/Container';

const HomeRecipes = () => {
  const recipes = [
    {
      foodTitle: "Super Delicious Salad Rice",
      description:
        "Experience delight in every bite with our super delicious salad rice – a perfect blend of freshness and flavor.",
      timeToCook: "10 Minutes",
      dishName: "Salad",
      image:
        "https://uploads-ssl.webflow.com/5e86c7170f1ab21474c3f2a4/5ef1d04b4056011f67df2ed7_Natural%2Blight%2B-%2BFood%2BPhotography%2B-%2BFrenchly%2B-4365.jpg",
      authorImage: "author_image_1.jpg",
      authorName: "John Doe",
      dateOfPost: "15 March 2023",
    },
    {
      foodTitle: "Flavorful Mushroom Risotto",
      description:
        "Indulge in the rich and savory flavors of our mushroom risotto, a delightful dish that brings comfort to your table.",
      timeToCook: "25 Minutes",
      dishName: "Mushroom",
      image:
        "https://thebusybaker.ca/wp-content/uploads/2018/03/easy-mushroom-risotto-fbigBEST.jpg",
      authorImage: "author_image_2.jpg",
      authorName: "Jane Smith",
      dateOfPost: "20 April 2023",
    },
    {
      foodTitle: "Spicy Chickpea Curry",
      description:
        "Warm your taste buds with our spicy chickpea curry, a quick and easy recipe that packs a punch of flavors.",
      timeToCook: "15 Minutes",
      dishName: "Curry",
      image:
        "https://myheartbeets.com/wp-content/uploads/2020/07/indian-chickpea-stir-fry.jpg",
      authorImage: "author_image_3.jpg",
      authorName: "Alex Johnson",
      dateOfPost: "5 May 2023",
    },
    {
      foodTitle: "Sweet Potato Gnocchi",
      description:
        "Discover the joy of homemade sweet potato gnocchi, a delicious and satisfying dish that's surprisingly simple to make.",
      timeToCook: "30 Minutes",
      dishName: "Sweet Potato",
      image:
        "https://fullofplants.com/wp-content/uploads/2021/11/sweet-potato-gnocchi-with-kale-lime-pesto-plant-based-vegan-dish-gluten-free-26.jpg",
      authorImage: "author_image_4.jpg",
      authorName: "Maria Rodriguez",
      dateOfPost: "12 June 2023",
    },
    {
      foodTitle: "Sweet Potato Gnocchi",
      description:
        "Discover the joy of homemade sweet potato gnocchi, a delicious and satisfying dish that's surprisingly simple to make.",
      timeToCook: "30 Minutes",
      dishName: "Sweet Potato",
      image:
        "https://fullofplants.com/wp-content/uploads/2021/11/sweet-potato-gnocchi-with-kale-lime-pesto-plant-based-vegan-dish-gluten-free-26.jpg",
      authorImage: "author_image_4.jpg",
      authorName: "Maria Rodriguez",
      dateOfPost: "12 June 2023",
    },
    {
      foodTitle: "Sweet Potato Gnocchi",
      description:
        "Discover the joy of homemade sweet potato gnocchi, a delicious and satisfying dish that's surprisingly simple to make.",
      timeToCook: "30 Minutes",
      dishName: "Sweet Potato",
      image:
        "https://fullofplants.com/wp-content/uploads/2021/11/sweet-potato-gnocchi-with-kale-lime-pesto-plant-based-vegan-dish-gluten-free-26.jpg",
      authorImage: "author_image_4.jpg",
      authorName: "Maria Rodriguez",
      dateOfPost: "12 June 2023",
    },
  ];
    return (
      <Container>
        <div className="pb-20">
          <Header
            text_center="text-center"
            title="Simple and tasty recipes"
            text="Journey Through Flavor: Discover Simple and Delicious Recipes to Enhance Your Culinary Experience"
          ></Header>
          <div className="flex flex-wrap justify-center gap-8">
            {recipes?.map((recipe) => (
              <FoodCard key={recipe?.foodTitle} recipe={recipe}></FoodCard>
            ))}
          </div>
        </div>
      </Container>
    );
};

export default HomeRecipes;