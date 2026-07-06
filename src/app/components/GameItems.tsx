import CustomGameCard from "./shared/CustomGameCard";
import { GameUI } from "./GamePicker";

const GameItems = ({
  games,
  onImageClick,
}: {
  games: GameUI[];
  onImageClick: (game: GameUI) => void;
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
        />
      ))}
    </div>
  );
};

export default GameItems;
