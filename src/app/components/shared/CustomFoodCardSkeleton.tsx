"use client";

import { Box, Skeleton } from "@mui/material";

interface Props {
  idx: number;
}

const CustomFoodCardSkeleton = ({ idx }: Props) => {
  const isLeft = idx % 2 === 1;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        my: { xs: 1.5, sm: 2 },
        px: { xs: 1, sm: 0 },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 500,

          minHeight: {
            xs: 140,
            sm: 110,
            md: 100,
          },
        }}
      >
        {/* Main card body */}
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              width: "100%",
              gap: 0.5,
            }}
          >
            {/* Title */}
            <Skeleton
              variant="text"
              width="25%"
              height={18}
              sx={{
                alignSelf: isLeft ? "flex-start" : "flex-end",
              }}
            />

            {/* Description */}
            <Skeleton
              variant="text"
              width="80%"
              height={10}
              sx={{
                mt: 0.6,
                alignSelf: isLeft ? "flex-start" : "flex-end",
              }}
            />
            <Skeleton
              variant="text"
              width="30%"
              height={10}
              sx={{
                mb: 5,
                alignSelf: isLeft ? "flex-start" : "flex-end",
              }}
            />
          </Box>
        </Box>

        {/* Circular image */}
        <Skeleton
          variant="circular"
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",

            ...(isLeft
              ? {
                  left: 0,
                }
              : {
                  right: 0,
                }),

            width: {
              xs: 80,
              sm: 95,
              md: 110,
            },

            height: {
              xs: 80,
              sm: 95,
              md: 110,
            },

            border: "none",

            bgcolor: "transparen",
            flexShrink: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default CustomFoodCardSkeleton;
