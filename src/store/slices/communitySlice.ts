import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommunityGroup {
  id: string;
  name: string;
  // Add other group properties as needed
}

interface CommunityState {
  groups: CommunityGroup[];
  currentGroup: CommunityGroup | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CommunityState = {
  groups: [],
  currentGroup: null,
  isLoading: false,
  error: null,
};

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    setGroups: (state, action: PayloadAction<CommunityGroup[]>) => {
      state.groups = action.payload;
    },
    setCurrentGroup: (state, action: PayloadAction<CommunityGroup | null>) => {
      state.currentGroup = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setGroups, setCurrentGroup, setLoading, setError } =
  communitySlice.actions;
export default communitySlice.reducer;
