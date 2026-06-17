import { Box, Typography } from "@mui/material";
import Image from "next/image";
import randomFoodImage from "../images/donar-1-300x300.jpg";
import { Food } from "@/data/mockData";

const FoodCard = ({ food, foodIdx }: { food: Food; foodIdx: number }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        my: 2,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 500,
          height: 110,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            height: "100%",
            width: "calc(100% - 45px)",
            borderRadius: 3,
            bgcolor: "rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",

            ...(foodIdx % 2 === 1
              ? {
                  left: 45,
                  pl: 10,
                  pr: 3,
                }
              : {
                  right: 45,
                  pl: 3,
                  pr: 10,
                  justifyContent: "flex-end",
                  textAlign: "right",
                }),
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 700 }}>{food.title}</Typography>

            {food.baseTaste && (
              <Typography variant="body2">{food.baseTaste}</Typography>
            )}
          </Box>
        </Box>

        {/* Circle */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",

            ...(foodIdx % 2 === 1 ? { left: 0 } : { right: 0 }),

            width: 110,
            height: 110,
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid white",
            bgcolor: "white",
            zIndex: 2,
          }}
        >
          <Image
            src={randomFoodImage}
            alt="Food"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FoodCard;
