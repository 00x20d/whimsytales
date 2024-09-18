import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Character {
  id?: string; // Make id optional
  name: string;
  age: number;
  interests: string[];
  gender: string;
  is_main: boolean;
}

interface CharacterState {
  characters: Character[];
}

const initialState: CharacterState = {
  characters: [],
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<Character>) => {
      state.characters.push(action.payload);
    },
    updateCharacter: (state, action: PayloadAction<Character>) => {
      const index = state.characters.findIndex(
        (c) => c.id === action.payload.id
      );
      if (index !== -1) {
        state.characters[index] = action.payload;
      }
    },
    removeCharacter: (state, action: PayloadAction<string>) => {
      state.characters = state.characters.filter(
        (c) => c.id !== action.payload
      );
    },
  },
});

export const { addCharacter, updateCharacter, removeCharacter } =
  characterSlice.actions;
export default characterSlice.reducer;
