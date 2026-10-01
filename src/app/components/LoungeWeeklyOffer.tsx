"use client";

import { Box, Typography } from "@mui/material";
import { LoungeDrink } from "@prisma/client";

import CustomLoungeDrinkCard from "./shared/CustomLoungeDrinkCard";

interface Props {
  mostOrdered: LoungeDrink;
  onImageClick: (drink: LoungeDrink) => void;
}

const LoungeWeeklyOffer = ({ mostOrdered, onImageClick }: Props) => {
  return (
    <Box
      id="most-ordered"
      sx={{
        width: "100%",
        maxWidth: 500,
        mt: 5,
        mb: 1,
      }}
    >
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: "1.2rem",
          mb: 1,
          textAlign: "center",
        }}
      >
        ⭐ محبوب‌ترین هفته
      </Typography>

      <CustomLoungeDrinkCard
        drink={mostOrdered}
        idx={0}
        onImageClick={onImageClick}
      />
    </Box>
  );
};

export default LoungeWeeklyOffer;
