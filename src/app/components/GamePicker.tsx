"use client";
import { Box, Typography, Chip, Divider } from "@mui/material";
import { useMemo, useState } from "react";
import GameItems from "./GameItems";
import { GameGenre } from "@/data/game";
import ImageDialog from "./ImageDialog";

export interface GameUI {
  id: number;
  title: string;
  desc: string | null;
  image: string | null;
  genre: GameGenre[];
  playerCount: number[];
  isWeeklyOffer: boolean;
}

interface Props {
  genres: readonly GameGenre[];
  players: number[];
  games: GameUI[];
}

const GamePicker = ({ genres, players, games }: Props) => {
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null);
  const [selectedGenres, setSelectedGenres] = useState<GameGenre[]>([]);
  const [selectedGame, setSelectedGame] = useState<GameUI | null>(null);

  const toggleGenre = (genre: GameGenre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre],
    );
  };

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const playerMatch =
        selectedPlayer === null
          ? true
          : selectedPlayer === 6
            ? game.playerCount.some((p) => p >= 6)
            : game.playerCount.includes(selectedPlayer);

      const genreMatch =
        selectedGenres.length === 0
          ? true
          : selectedGenres.some((g) => game.genre.includes(g));

      return playerMatch && genreMatch;
    });
  }, [selectedPlayer, selectedGenres]);

  const suggestedGames = useMemo(() => {
    return [...filteredGames].sort(() => Math.random() - 0.5).slice(0, 3);
  }, [filteredGames]);

  const hasFilters = selectedPlayer !== null || selectedGenres.length > 0;

  return (
    <>
      <ImageDialog
        image={selectedGame?.image ?? ""}
        isOpen={!!selectedGame}
        setOpen={() => setSelectedGame(null)}
        title={selectedGame?.title ?? ""}
      />
      <Box sx={{ maxWidth: 500, mx: "auto", py: 3, px: 2 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "1.4rem",
            mb: 3,
          }}
        >
          🎲 چی بازی کنیم؟
        </Typography>
        <Typography sx={{ mb: 1, textAlign: "end" }}>چند نفر هستید؟</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            mb: "14px",
            gap: "6px",
            justifyContent: "end",
          }}
        >
          {players.map((player) => (
            <Chip
              key={player}
              clickable
              label={player === 6 ? "6+" : player}
              color={selectedPlayer === player ? "warning" : "default"}
              onClick={() =>
                setSelectedPlayer((prev) => (prev === player ? null : player))
              }
            />
          ))}
        </Box>
        <Divider
          sx={{
            width: "100%",
            color: "rgba(255,255,255,0.08)",
            my: 2,
            borderBottomWidth: "2px",
            borderRadius: "8px",
          }}
        />
        <Typography sx={{ mb: 1, textAlign: "end" }}>
          چه سبکی دوست دارید؟
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            mb: "12px",
            gap: "8px",
            justifyContent: "end",
          }}
        >
          {genres.map((genre) => (
            <Chip
              key={genre}
              label={genre}
              color={selectedGenres.includes(genre) ? "warning" : "default"}
              onClick={() => toggleGenre(genre)}
            />
          ))}
        </Box>
        <Divider
          sx={{
            width: "100%",
            color: "rgba(255,255,255,0.08)",
            my: 2,
            borderBottomWidth: "2px",
            borderRadius: "8px",
          }}
        />
        {hasFilters && (
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 2,
            }}
          >
            ✨ پیشنهادها
          </Typography>
        )}
        {!hasFilters ? (
          <Typography sx={{ textAlign: "center", mt: 3, opacity: 0.7 }}>
            ژانر و تعداد نفراتتونو انتخاب کنید <br /> !تا بهتون پیشنهاد بدیم
          </Typography>
        ) : (
          <GameItems onImageClick={setSelectedGame} games={suggestedGames} />
        )}
      </Box>
    </>
  );
};

export default GamePicker;
