"use client";
import { FoodSeed } from "@/data/food";
import CategoryHorizMenu from "./CategoryHorizMenu";
import FoodItems from "./FoodItems";
import BackgroundBox from "./shared/BackgroundBox";
import WeeklyOffer from "./WeeklyOffer";

const FoodPageCore = ({ foods }: { foods: FoodSeed[] }) => {
  const mostOrderedFood = foods?.find((food) => food.isWeeklyOffer);
  const categories = [...new Set(foods?.map((food) => food?.category))];

  // scroll to the selected category
  const scrollToCategory = (category: string) => {
    document.getElementById(`category-${category}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <BackgroundBox>
      <CategoryHorizMenu
        categories={categories}
        scrollToCategory={scrollToCategory}
      />

      {mostOrderedFood && <WeeklyOffer mostOrdered={mostOrderedFood} />}

      <FoodItems foods={foods} categories={categories} />
    </BackgroundBox>
  );
};

export default FoodPageCore;
