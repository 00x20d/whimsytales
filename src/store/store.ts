import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import characterReducer from "./slices/characterSlice";
import storyReducer from "./slices/storySlice";
import userReducer from "./slices/userSlice";
import communityReducer from "./slices/communitySlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    characters: characterReducer,
    stories: storyReducer,
    user: userReducer,
    community: communityReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
