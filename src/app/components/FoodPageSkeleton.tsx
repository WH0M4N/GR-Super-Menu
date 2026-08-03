"use client";
import { Box, Skeleton } from "@mui/material";
import BackgroundBox from "./shared/BackgroundBox";
import CategoryHorizMenuSkeleton from "./CategoryHorizMenuSkeleton";
import CustomFoodCardSkeleton from "./shared/CustomFoodCardSkeleton";

const FoodPageSkeleton = () => {
  const categories = ["برگر", "پیتزا", "نوشیدنی"];

  return (
    <BackgroundBox>
      <CategoryHorizMenuSkeleton />

      <Skeleton
        variant="text"
        width={140}
        height={32}
        sx={{
          mx: "auto",
          mt: 5,
          mb: 0,
        }}
      />

      <CustomFoodCardSkeleton idx={0} />

      {/* Food categories */}
      {categories.map((category) => (
        <Box
          key={category}
          sx={{
            width: "100%",
            maxWidth: 500,
            scrollMarginTop: "70px",
            mt: 2,
          }}
        >
          {/* Category title */}
          <Skeleton
            variant="text"
            width={110}
            height={36}
            sx={{
              mx: "auto",
              mt: 3,
              mb: 2,
            }}
          />

          {/* Food cards */}
          {Array.from({ length: 4 }).map((_, index) => (
            <CustomFoodCardSkeleton key={index} idx={index} />
          ))}
        </Box>
      ))}
    </BackgroundBox>
  );
};

export default FoodPageSkeleton;
