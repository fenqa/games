import { configureStore } from "@reduxjs/toolkit";
import { gamesApi } from "../services/gamesApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import filtersSlice from "../components/Filters/filters-slice";

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
    filter: filtersSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
