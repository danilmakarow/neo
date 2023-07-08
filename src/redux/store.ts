import { configureStore } from '@reduxjs/toolkit';
import apiReducer from "./slices/apiSlice";

export const store = configureStore({
    reducer: {
        neo: apiReducer,
    },
});
