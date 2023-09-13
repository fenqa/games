import { useAppSelector } from "../../app/hooks";
import { useGetGamesListQuery } from "../../services/gamesApi";
import Game from "./Game/Game";
import type { IGame } from "./Game/types";
import VirtualizedList from "../VirtualizedList/VirtualizedList";

import gamesStyles from "./Games.module.scss";

const Games = () => {
  const { searchStr, platforms } = useAppSelector((state) => state.filter);

  const { data: games } = useGetGamesListQuery("", {
    selectFromResult: ({ data }) => {
      return {
        data:
          data
            ?.filter(({ gameName }) =>
              gameName.toLowerCase().match(searchStr.toLowerCase()),
            )
            .filter(({ platform }) =>
              platforms.length ? platforms.includes(platform) : true,
            ) ?? ([] as IGame[]),
      };
    },
  });

  return (
    <div className={gamesStyles.container}>
      <VirtualizedList
        rowHeight={250}
        buffer={3}
        gap={10}
        items={games}
        renderItems={(item, style) => (
          <Game key={item.gameID} game={item} style={style} />
        )}
        numColumns={3}
        numRows={4}
        elementWidth={330}
      />
    </div>
  );
};

export default Games;
