"use client";
import { Box, Skeleton } from "@mui/material";
import BackgroundBox from "./shared/BackgroundBox";
import CustomGameCardSkeleton from "./shared/CustomGameCardSkeleton";

const GamePageSkeleton = () => {
  return (
    <BackgroundBox flip>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          px: 1.5,
          mt: "-20px",
        }}
      >
        <Skeleton
          variant="rounded"
          width={38.5}
          height={38.5}
          sx={{ borderRadius: "8px" }}
        />

        <Skeleton
          variant="rounded"
          width={185}
          height={38.5}
          sx={{ borderRadius: "8px" }}
        />
      </Box>

      <Skeleton
        variant="text"
        width={140}
        height={32}
        sx={{ mx: "auto", mt: 5, mb: 1 }}
      />

      <CustomGameCardSkeleton idx={0} />

      <Skeleton
        variant="text"
        width={120}
        height={36}
        sx={{ mx: "auto", mb: 2, mt: 2 }}
      />

      {/* Cards */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          mx: "auto",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <CustomGameCardSkeleton key={i} idx={i} />
        ))}
      </Box>
    </BackgroundBox>
  );
};

export default GamePageSkeleton;
