import { Pokemon } from "@/types/pokemon.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserFavouriteState {
  favourites: Pokemon[]; // or just string[] if storing IDs
}

const initialState: UserFavouriteState = {
  favourites: [],
};

const userFavouriteSlice = createSlice({
  name: "favouritesPokemon",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Pokemon>) => {
      const exists = state.favourites.find((p) => p.id === action.payload.id);
      if (!exists) {
        state.favourites.push(action.payload);
      }
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      state.favourites = state.favourites.filter(
        (p) => p.id !== action.payload,
      );
    },
    toggleFavourite: (state, action: PayloadAction<Pokemon>) => {
      const exists = state.favourites.find((p) => p.id === action.payload.id);
      if (exists) {
        state.favourites = state.favourites.filter(
          (p) => p.id !== action.payload.id,
        );
      } else {
        state.favourites.push(action.payload);
      }
    },
    clearFavourites: (state) => {
      state.favourites = [];
    },
  },
});

export const {
  addFavourite,
  removeFavourite,
  toggleFavourite,
  clearFavourites,
} = userFavouriteSlice.actions;

export default userFavouriteSlice.reducer;
