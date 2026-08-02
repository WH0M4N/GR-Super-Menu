"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import CategoryHorizMenu from "./CategoryHorizMenu";
import FoodItems from "./FoodItems";
import BackgroundBox from "./shared/BackgroundBox";
import WeeklyOffer from "./WeeklyOffer";
import { Food } from "@prisma/client";
import ImageDialog from "./ImageDialog";
import categories from "@/data/categories";

const FoodPageCore = ({ foods }: { foods: Food[] }) => {
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? "");

  const isAutoScrolling = useRef(false);

  const mostOrderedFood = useMemo(
    () => foods.find((food) => food.isWeeklyOffer),
    [foods],
  );

  useEffect(() => {
    const onScroll = () => {
      if (isAutoScrolling.current) return;

      const offset = 90;

      let current = categories[0];

      for (const category of categories) {
        const el = document.getElementById(`category-${category}`);
        if (!el) continue;

        if (el.getBoundingClientRect().top <= offset) {
          current = category;
        } else {
          break;
        }
      }

      setActiveCategory(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll to the selected category
  const scrollToCategory = (category: string) => {
    isAutoScrolling.current = true;

    setActiveCategory(category);

    document.getElementById(`category-${category}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      isAutoScrolling.current = false;
    }, 700); // roughly matches smooth scroll duration
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
        activeCategory={activeCategory}
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
