import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import themeReducer from "./slices/themeSlice"

export const store = configureStore({
  reducer: {
    search: searchReducer,
    theme: themeReducer
  },
});

// Infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
