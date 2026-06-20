"use client";
import { foods } from "@/data/mockData";
import BackgroundBox from "../components/shared/BackgroundBox";
import CustomCard from "../components/shared/CustomCard";

const FoodPage = () => {
  return (
    <BackgroundBox>
      {foods.map((food, idx) => {
        return <CustomCard cardItem={food} key={food.id} idx={idx} />;
      })}
    </BackgroundBox>
  );
};

export default FoodPage;
