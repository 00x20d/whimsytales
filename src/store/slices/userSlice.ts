import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProfile {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  profile: UserProfile | null;
  mainCharacter: {
    id: string;
    name: string;
  } | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  profile: null,
  mainCharacter: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserProfile | null>) => {
      state.profile = action.payload;
    },
    setMainCharacter: (
      state,
      action: PayloadAction<{ id: string; name: string } | null>
    ) => {
      state.mainCharacter = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setProfile, setMainCharacter, setLoading, setError } =
  userSlice.actions;
export default userSlice.reducer;
