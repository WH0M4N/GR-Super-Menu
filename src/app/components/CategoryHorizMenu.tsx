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
      {categories.map((category) => (
        <Box
          key={category}
          onClick={() => scrollToCategory(category)}
          sx={{
            flexShrink: 0,
            px: 2,
            py: 1,
            borderRadius: 20,

            bgcolor: "rgba(255,255,255,0.08)",
            border: "1px solid #b55a18",
            backdropFilter: "blur(8px)",

            cursor: "pointer",
            whiteSpace: "nowrap",
            fontWeight: 600,
            color: "text.primary",

            transition: "all 0.2s",

            display: "flex",
            alignItems: "center",

            "&:hover": {
              bgcolor: "rgba(255,255,255,0.15)",
              transform: "translateY(-1px)",
            },
          }}
        >
          {category}
        </Box>
      ))}
    </Box>
  );
};

export default CategoryHorizMenu;
