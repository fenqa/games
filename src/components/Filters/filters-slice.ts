import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  searchStr: string;
  platforms: Array<string>;
};

const initialState: initialStateType = {
  searchStr: "",
  platforms: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.searchStr = action.payload;
    },
    filterByPlatform: (state, action: PayloadAction<Array<string>>) => {
      state.platforms = action.payload;
    },
  },
});

export const { search, filterByPlatform } = filterSlice.actions;
export default filterSlice.reducer;
