import { ThemeType } from "@/types/AppTheme.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  theme: ThemeType;
}

const initialState: ThemeState = {
  theme: "light", // default
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
