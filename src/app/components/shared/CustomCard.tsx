import { Food, Game } from "@/data/mockData";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  cardItem: Food | Game;
  idx: number;
}

const CustomCard = ({ idx, cardItem }: Props) => {
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
            bgcolor: "rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",

            ...(idx % 2 === 1
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
              {cardItem.title}
            </Typography>

            {/* Just in case if base taste idea was approved */}

            {/* {cardItem.baseTaste && (
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.72rem",
                    sm: "0.8rem",
                    md: "0.875rem",
                  },
                  lineHeight: 1.3,
                  opacity: 0.85,
                }}
              >
                {cardItem.baseTaste}
              </Typography>
            )} */}

            {cardItem.desc && (
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.72rem",
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
                {cardItem.desc}
              </Typography>
            )}

            {cardItem.price && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: idx % 2 === 1 ? "start" : "end",
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
                    mx: '3px'
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
                  {cardItem.price}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",

            ...(idx % 2 === 1 ? { left: 0 } : { right: 0 }),

            // responsive image size
            width: { xs: 80, sm: 95, md: 110 },
            height: { xs: 80, sm: 95, md: 110 },

            borderRadius: "50%",
            overflow: "hidden",
            border: { xs: "3px solid white", md: "4px solid white" },
            bgcolor: "white",
            zIndex: 2,
            flexShrink: 0,
          }}
        >
          <Image
            src={cardItem.image}
            alt="Element image"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomCard;
