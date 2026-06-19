"use client";
import FoodCard from "../components/FoodCard";
import { foods } from "@/data/mockData";
import BackgroundBox from "../components/shared/BackgroundBox";

const FoodPage = () => {
  return (
    <BackgroundBox>
      {foods.map((food, idx) => {
        return <FoodCard food={food} key={food.id} foodIdx={idx} />;
      })}
    </BackgroundBox>
  );
};

export default FoodPage;
