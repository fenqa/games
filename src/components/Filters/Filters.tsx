import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useGetGamesListQuery } from "../../services/gamesApi";
import { filterByPlatform } from "./filters-slice";
import filtersStyles from "./Filters.module.scss";

const Filters = () => {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState<Array<string>>([]);
  const { data: games } = useGetGamesListQuery("");

  const uniquePlatforms =
    games &&
    games.reduce((platforms: string[], game) => {
      if (!platforms.includes(game.platform)) {
        platforms.push(game.platform);
      }
      return platforms;
    }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let updatedChecked: string[];

    if (checked.includes(e.target.value)) {
      updatedChecked = checked.filter((el) => e.target.value !== el);
    } else {
      updatedChecked = [...checked, e.target.value].sort();
    }
    setChecked(updatedChecked);
  };

  useEffect(() => {
    dispatch(filterByPlatform(checked));
  }, [checked, dispatch]);

  return (
    <div className={filtersStyles.checkboxWrapper}>
      <h3>Filters</h3>
      {uniquePlatforms &&
        uniquePlatforms.map((plat) => (
          <label key={plat}>
            {plat}
            <input
              type="checkbox"
              name={plat}
              value={plat}
              onChange={handleOnChange}
              className={filtersStyles.checkbox}
            />
          </label>
        ))}
    </div>
  );
};

export default Filters;
