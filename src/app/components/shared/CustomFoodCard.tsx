"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Food } from "@prisma/client";
import NoImage from "../../../../public/images/food/noPic.jpg";

interface Props {
  food: Food;
  idx: number;
  onImageClick: (food: Food) => void;
}

const CustomCard = ({ food, idx, onImageClick }: Props) => {
  const isWeeklyOffer = food.isWeeklyOffer ? true : false;
  const isLeft = idx % 2 === 1;

  const glowingBorder = {
    ...(isWeeklyOffer && {
      animation: "glow 3s ease-in-out infinite",
      "@keyframes glow": {
        "0%": {
          borderColor: "#806a25",
          boxShadow: "0 0 0 rgba(255, 213, 79, 0)",
        },
        "50%": {
          borderColor: "#FFD54F",
          boxShadow: "0 0 12px rgba(255, 213, 79, 0.7)",
        },
        "100%": {
          borderColor: "#806a25",
          boxShadow: "0 0 0 rgba(255, 213, 79, 0)",
        },
      },
    }),
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        my: { xs: 1.5, sm: 2 },
        px: { xs: 1, sm: 0 }, // prevents edge touching on tiny phones
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 500,

          // responsive height
          minHeight: { xs: 140, sm: 110, md: 100 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            height: "100%",
            width: "calc(100% - 40px)",
            borderRadius: 3,
            bgcolor: isWeeklyOffer
              ? "rgba(255, 215, 0, 0.2)"
              : "rgba(255,255,255,0.08)",

            border: isWeeklyOffer ? "1.5px solid #FFD54F" : "none",
            ...glowingBorder,

            boxShadow: isWeeklyOffer
              ? "0 0 20px rgba(255, 215, 0, 0.5)"
              : "none",
            display: "flex",
            alignItems: "center",

            ...(isLeft
              ? {
                  left: 40,
                  pl: { xs: 7, sm: 8, md: 10 },
                  pr: { xs: 2, sm: 3 },
                }
              : {
                  right: 40,
                  pl: { xs: 2, sm: 3 },
                  pr: { xs: 7, sm: 8, md: 10 },
                  justifyContent: "flex-end",
                  textAlign: "right",
                }),
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: "0.9rem",
                  sm: "1rem",
                  md: "1.1rem",
                },
                lineHeight: 1.2,
              }}
            >
              {food.title}
            </Typography>

            {food.desc && (
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.85rem",
                    md: "0.875rem",
                  },
                  lineHeight: "18px",
                  opacity: 0.85,
                  color: "text.secondary",
                  mt: {
                    xs: 1,
                    sm: 1.2,
                  },
                  direction: "rtl",
                }}
              >
                {food.desc}
              </Typography>
            )}

            {/* Games wont have any price */}
            {food.price && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: isLeft ? "start" : "end",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.9rem",
                      sm: "0.8rem",
                      md: "0.875rem",
                    },
                    lineHeight: "18px",
                    opacity: 0.85,
                    color: "text.secondary",
                    mt: {
                      xs: 1,
                      sm: 1.2,
                    },
                    mx: "3px",
                  }}
                >
                  تومن
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      sm: "0.8rem",
                      md: "0.875rem",
                    },
                    lineHeight: "18px",
                    opacity: 0.85,
                    color: "text.secondary",
                    mt: {
                      xs: 1,
                      sm: 1.2,
                    },
                  }}
                >
                  {food.price}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        <Box
          onClick={() => {
            if (food.image) onImageClick(food);
            return;
          }}
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",

            ...(isLeft ? { left: 0 } : { right: 0 }),

            // responsive image size
            width: { xs: 80, sm: 95, md: 110 },
            height: { xs: 80, sm: 95, md: 110 },

            borderRadius: "50%",
            overflow: "hidden",
            border: {
              xs: isWeeklyOffer ? "3px solid #FFD54F" : "3px solid white",
              md: isWeeklyOffer ? "4px solid #FFD54F" : "4px solid white",
            },

            ...glowingBorder,

            bgcolor: isWeeklyOffer ? "#FFD54F" : "white",
            zIndex: 2,
            flexShrink: 0,
          }}
        >
          <Image
            src={food.image || NoImage}
            alt={food.title}
            fill
            sizes="(max-width: 600px) 74px,
         (max-width: 900px) 89px,
         102px"
            priority={isWeeklyOffer}
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(CustomCard);
