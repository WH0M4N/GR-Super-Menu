import CustomGameCard from "./shared/CustomGameCard";
import { GameUI } from "./GamePicker";

const GameItems = ({
  games,
  onImageClick,
  showGenres = true,
}: {
  games: GameUI[];
  onImageClick: (game: GameUI) => void;
  showGenres?: boolean;
}) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 500,
        scrollMarginTop: "70px",
      }}
    >
      {games.map((game, index) => (
        <CustomGameCard
          key={game.id}
          game={game}
          idx={index}
          onImageClick={onImageClick}
          showGenres={showGenres}
        />
      ))}
    </div>
  );
};

export default GameItems;
