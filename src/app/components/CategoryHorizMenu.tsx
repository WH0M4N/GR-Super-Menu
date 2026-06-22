"use client";
import { Box } from "@mui/material";

interface Props {
  categories: string[];
  scrollToCategory: (category: string) => void;
}

const CategoryHorizMenu = ({ categories, scrollToCategory }: Props) => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        width: "100%",
        maxWidth: 500,
        zIndex: 100,
        bgcolor: "rgba(255,255,255,0.07)",

        display: "flex",
        gap: 1,
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        py: 1,
        px: 1,
        borderRadius: "6px",

        "&::-webkit-scrollbar": {
          display: "none",
        },

        direction: "rtl",
      }}
    >
      {categories.map((category) => (
        <Box
          key={category}
          onClick={() => scrollToCategory(category)}
          sx={{
            flexShrink: 0,
            px: 2,
            py: 1,
            borderRadius: 20,
            bgcolor: "background.paper",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {category}
        </Box>
      ))}
    </Box>
  );
};

export default CategoryHorizMenu;
