import { Game } from "@/data/mockData";
import CustomGameCard from "./shared/CustomGameCard";

const GameItems = ({ games }: { games: Game[] }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 500,
        scrollMarginTop: "70px",
      }}
    >
      {games.map((game, index) => (
        <CustomGameCard key={game.id} game={game} idx={index} />
      ))}
    </div>
  );
};

export default GameItems;
