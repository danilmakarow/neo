import { configureStore } from '@reduxjs/toolkit';
import apiReducer from "./slices/apiSlice";
import descReducer from "./slices/descriptionSlice";

export const store = configureStore({
    reducer: {
        neo: apiReducer,
        description: descReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
