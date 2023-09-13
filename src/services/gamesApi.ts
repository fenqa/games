import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IGame, IGameList } from "../components/Games/Game/types";

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://staging.belparyaj.com/api/pragmatic/game_list",
  }),
  endpoints: (builder) => ({
    getGamesList: builder.query<IGame[], string>({
      query: () => ``,
      transformResponse: (res: IGameList) => {
        return res.result;
      },
    }),
  }),
});

export const { useGetGamesListQuery } = gamesApi;
