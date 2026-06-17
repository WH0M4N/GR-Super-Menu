"use client";
import { Box } from "@mui/material";
import wavyBg from "../images/wavy.jpg";
import FoodCard from "../components/FoodCard";
import { foods } from "@/data/mockData";

const FoodPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        backgroundImage: `url(${wavyBg.src})`,
        backgroundRepeat: "repeat-y",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        position: "relative",
        padding: "40px",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 0,
        },

        "& > *": {
          zIndex: 1,
        },
      }}
    >
      {foods.map((food, idx) => {
        return <FoodCard food={food} key={food.id} foodIdx={idx} />;
      })}
    </Box>
  );
};

export default FoodPage;
