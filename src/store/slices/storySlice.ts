import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Story {
  id: string;
  title: string;
  content: string;
  // Add other story properties as needed
}

interface StoryState {
  stories: Story[];
  currentStory: Story | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: StoryState = {
  stories: [],
  currentStory: null,
  isLoading: false,
  error: null,
};

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    setStories: (state, action: PayloadAction<Story[]>) => {
      state.stories = action.payload;
    },
    setCurrentStory: (state, action: PayloadAction<Story | null>) => {
      state.currentStory = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setStories, setCurrentStory, setLoading, setError } =
  storySlice.actions;
export default storySlice.reducer;
