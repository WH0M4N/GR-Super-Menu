"use client";
import { Box, Chip, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GameUI } from "../GamePicker";
import noPic from "../../../../public/images/food/noPic.jpg";

interface Props {
  game: GameUI;
  idx: number;
  onImageClick: (game: GameUI) => void;
  showGenres?: boolean;
}

const CustomGameCard = ({
  game,
  idx,
  onImageClick,
  showGenres = true,
}: Props) => {
  const isWeeklyOffer = game.isWeeklyOffer ? true : false;

  const pathName = usePathname();
  const showMostPlayed = pathName !== "/game-picker";

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
            bgcolor:
              isWeeklyOffer && showMostPlayed
                ? "rgba(255, 215, 0, 0.2)"
                : "rgba(255,255,255,0.08)",
            border:
              isWeeklyOffer && showMostPlayed ? "1.5px solid #FFD54F" : "none",
            boxShadow:
              isWeeklyOffer && showMostPlayed
                ? "0 0 20px rgba(255, 215, 0, 0.5)"
                : "none",
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
          <Box
            sx={{
              width: "100%",
              py: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
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
              {game?.title}
            </Typography>
            {game?.desc && (
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.72rem",
                    sm: "0.8rem",
                    md: "0.875rem",
                  },
                  lineHeight: 1.4,
                  opacity: 0.85,
                  color: "text.secondary",
                }}
              >
                {game?.desc}
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: idx % 2 === 1 ? "flex-start" : "flex-end",
                overflowY: "hidden",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: idx % 2 === 1 ? "flex-start" : "flex-end",
                  alignItems: "center",
                  gap: 0.5,
                  mt: 0.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: {
                        xs: "0.72rem",
                        sm: "0.8rem",
                      },
                      mx: "2px",
                    }}
                  >
                    نفره
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: {
                        xs: "0.72rem",
                        sm: "0.8rem",
                      },
                    }}
                  >
                    {game?.playerCount.length === 1
                      ? game?.playerCount[0]
                      : `${game?.playerCount[0]}-${
                          game?.playerCount[game?.playerCount.length - 1]
                        }`}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: idx % 2 === 1 ? "flex-end" : "flex-start",
                    alignItems: "center !important",
                    flexWrap: "wrap",
                    gap: 0.5,
                    mt: 0.5,
                    ml: 1,
                    maxHeight: 52,
                    overflowY: "auto",

                    scrollbarWidth: "none",
                    msOverflowStyle: "none",

                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
                  {showGenres &&
                    game?.genre?.map((genre, index) => (
                      <Chip
                        key={index}
                        label={genre}
                        size="small"
                        variant="outlined"
                        sx={{
                          height: 22,
                          mb: 0.5,
                          p: 0.5,

                          "& .MuiChip-label": {
                            px: "2px",
                            fontSize: "0.68rem",
                            fontWeight: 500,
                          },
                        }}
                      />
                    ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          onClick={() => {
            if (game?.image) onImageClick(game);
            return;
          }}
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",

            ...(idx % 2 === 1 ? { left: 0 } : { right: 0 }),

            // responsive image size
            width: { xs: 80, sm: 95, md: 110 },
            height: { xs: 80, sm: 95, md: 110 },

            borderRadius: "50%",
            overflow: "hidden",
            border: {
              xs: isWeeklyOffer ? "3px solid #FFD54F" : "3px solid white",
              md: isWeeklyOffer ? "4px solid #FFD54F" : "4px solid white",
            },
            bgcolor: isWeeklyOffer ? "#FFD54F" : "white",
            zIndex: 2,
            flexShrink: 0,
          }}
        >
          <Image
            src={game?.image || noPic}
            alt={game?.title}
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

export default CustomGameCard;
