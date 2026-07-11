"use client";
import { useMemo, useState } from "react";
import CategoryHorizMenu from "./CategoryHorizMenu";
import FoodItems from "./FoodItems";
import BackgroundBox from "./shared/BackgroundBox";
import WeeklyOffer from "./WeeklyOffer";
import { Food } from "@prisma/client";
import ImageDialog from "./ImageDialog";
import categories from "@/data/categories";

const FoodPageCore = ({ foods }: { foods: Food[] }) => {
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  const mostOrderedFood = useMemo(
    () => foods.find((food) => food.isWeeklyOffer),
    [foods],
  );

  // scroll to the selected category
  const scrollToCategory = (category: string) => {
    document.getElementById(`category-${category}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <BackgroundBox>
      <ImageDialog
        image={selectedFood?.image ?? ""}
        title={selectedFood?.title ?? ""}
        isOpen={!!selectedFood}
        setOpen={() => setSelectedFood(null)}
      />

      <CategoryHorizMenu
        categories={categories}
        scrollToCategory={scrollToCategory}
      />

      {mostOrderedFood && (
        <WeeklyOffer
          mostOrdered={mostOrderedFood}
          onImageClick={setSelectedFood}
        />
      )}

      <FoodItems
        foods={foods}
        categories={categories}
        onImageClick={setSelectedFood}
      />
    </BackgroundBox>
  );
};

export default FoodPageCore;
