import type { IGame } from "./types";
import gameStyles from "./Game.module.scss";

const Game = ({
  game,
  style,
}: {
  game: IGame;
  style?: React.CSSProperties;
}) => {
  const { gameName, gameID, demoGameAvailable } = game;
  return (
    <li className={gameStyles.card} style={style}>
      <img
        className={gameStyles.image}
        src={`https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${gameID}.png`}
        alt={gameName}
      />
      <h3 className={gameStyles.title}>{gameName}</h3>
      {demoGameAvailable && (
        <span className={gameStyles.demo}>Demo Available</span>
      )}
    </li>
  );
};

export default Game;
