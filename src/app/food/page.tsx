"use client";
import { foods } from "@/data/mockData";
import BackgroundBox from "../components/shared/BackgroundBox";
import CategoryHorizMenu from "../components/CategoryHorizMenu";
import FoodItems from "../components/FoodItems";

const FoodPage = () => {
  // categories will be fetched later
  const categories = [...new Set(foods.map((food) => food.category))];

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
      <FoodItems foods={foods} categories={categories} />
    </BackgroundBox>
  );
};

export default FoodPage;
