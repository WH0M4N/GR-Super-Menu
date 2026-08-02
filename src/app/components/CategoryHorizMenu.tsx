"use client";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

interface Props {
  categories: string[];
  activeCategory: string;
  scrollToCategory: (category: string) => void;
}

const CategoryHorizMenu = ({
  categories,
  activeCategory,
  scrollToCategory,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log("active cat: ", activeCategory);
  // }, [activeCategory]);

  useEffect(() => {
    const activeElement = containerRef.current?.querySelector(
      `[data-category="${activeCategory}"]`,
    ) as HTMLElement | null;

    activeElement?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeCategory]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "fixed",
        top: 5,
        width: "calc(100% - 24px)",
        height: "60px",
        maxWidth: 500,
        zIndex: 100,

        bgcolor: "rgba(13,13,13,0.75)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",

        border: "1px solid #d36a1e",
        boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
        borderRadius: "16px",

        display: "flex",
        gap: 1,
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        py: 1,
        px: 1,

        "&::-webkit-scrollbar": {
          display: "none",
        },

        direction: "rtl",
      }}
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <Box
            key={category}
            data-category={category}
            onClick={() => scrollToCategory(category)}
            sx={{
              flexShrink: 0,
              px: 2,
              py: 1,
              borderRadius: 20,

              bgcolor: isActive ? "#d36a1e" : "rgba(255,255,255,0.08)",

              border: isActive ? "3px solid #b55a18" : "1px solid #b55a18",
              backdropFilter: "blur(8px)",

              cursor: "pointer",
              whiteSpace: "nowrap",
              fontWeight: 600,
              color: "text.primary",

              transition: "all 0.2s",

              display: "flex",
              alignItems: "center",

              "&:hover": {
                bgcolor: isActive ? "#d36a1e" : "rgba(255,255,255,0.15)",
                transform: "translateY(-1px)",
              },
            }}
          >
            {category}
          </Box>
        );
      })}
    </Box>
  );
};

export default CategoryHorizMenu;
