"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { LoungeDrink } from "@prisma/client";

import CategoryHorizMenu from "./CategoryHorizMenu";
import LoungeDrinkItems from "./LoungeDrinkItems";
import BackgroundBox from "./shared/BackgroundBox";
import LoungeWeeklyOffer from "./LoungeWeeklyOffer";
import ImageDialog from "./ImageDialog";
import categories from "@/data/loungeCategories";

const LoungePageCore = ({ loungeDrinks }: { loungeDrinks: LoungeDrink[] }) => {
  const [selectedDrink, setSelectedDrink] = useState<LoungeDrink | null>(null);

  const [activeCategory, setActiveCategory] = useState(categories[0] ?? "");

  const isAutoScrolling = useRef(false);

  const weeklyDrink = useMemo(
    () => loungeDrinks.find((drink) => drink.isWeeklyOffer),
    [loungeDrinks],
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

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToCategory = (category: string) => {
    isAutoScrolling.current = true;

    setActiveCategory(category);

    document.getElementById(`category-${category}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      isAutoScrolling.current = false;
    }, 700);
  };

  return (
    <BackgroundBox>
      <ImageDialog
        image={selectedDrink?.image ?? ""}
        title={selectedDrink?.title ?? ""}
        isOpen={!!selectedDrink}
        setOpen={() => setSelectedDrink(null)}
      />

      <CategoryHorizMenu
        categories={categories}
        scrollToCategory={scrollToCategory}
        activeCategory={activeCategory}
      />

      {weeklyDrink && (
        <LoungeWeeklyOffer
          mostOrdered={weeklyDrink}
          onImageClick={setSelectedDrink}
        />
      )}

      <LoungeDrinkItems
        loungeDrinks={loungeDrinks}
        categories={categories}
        onImageClick={setSelectedDrink}
      />
    </BackgroundBox>
  );
};

export default LoungePageCore;
