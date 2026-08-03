"use client";

import { Box, Skeleton } from "@mui/material";

const CategoryHorizMenuSkeleton = () => {
  const skeletonItems = [70, 90, 75, 85, 65, 95];

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
        overflowX: "hidden",
        overflowY: "hidden",

        whiteSpace: "nowrap",
        py: 1,
        px: 1,

        direction: "rtl",
      }}
    >
      {skeletonItems.map((width, index) => (
        <Skeleton
          key={index}
          variant="rounded"
          width={width}
          height={40}
          sx={{
            flexShrink: 0,
            borderRadius: 20,
          }}
        />
      ))}
    </Box>
  );
};

export default CategoryHorizMenuSkeleton;
