"use client";
import { Box, Skeleton } from "@mui/material";

const CustomGameCardSkeleton = ({ idx }: { idx: number }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // mt: { xs: 2.2, sm: 2.7 },
        mb: { xs: 1.5, sm: 2 },
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
          py: 1.5,
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
                  textAlign: "left",
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
              width: "100%",
              py: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              direction: idx % 2 === 0 ? "rtl" : "ltr",
            }}
          >
            <Skeleton width="25%" height={20} sx={{ m: 0 }} />

            <Skeleton width="80%" height={10} sx={{ m: 0 }} />
            <Skeleton width="60%" height={10} sx={{ mb: 2 }} />
          </Box>
        </Box>

        <Skeleton
          variant="circular"
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",

            ...(idx % 2 === 1 ? { left: 0 } : { right: 0 }),

            width: { xs: 80, sm: 95, md: 110 },
            height: { xs: 80, sm: 95, md: 110 },
          }}
        />
      </Box>
    </Box>
  );
};

export default CustomGameCardSkeleton;
