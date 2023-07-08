import { configureStore } from '@reduxjs/toolkit';
import neoDataReduce from "./slices/apiSlice";
import descReducer from "./slices/descriptionSlice";
import neoDisplayReducer from "./slices/neoDisplaySlice";

export const store = configureStore({
    reducer: {
        neoData: neoDataReduce,
        description: descReducer,
        neoDisplay: neoDisplayReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
