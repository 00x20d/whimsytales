import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  theme: "light" | "dark";
  isMenuOpen: boolean;
  // Add other UI-related state as needed
}

const initialState: UIState = {
  theme: "light",
  isMenuOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { setTheme, toggleMenu } = uiSlice.actions;
export default uiSlice.reducer;
