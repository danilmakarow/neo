// serviceSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Stats} from "../../shared/interfaces/api.interfaces";
import {updateStatistics} from "../serviceActions";

interface ServiceState {
    statistics: Stats;
}

const initialState: ServiceState = {
    statistics: {
        amount: 0,
        hazardous: 0,
        big: null,
        close: null,
        fast: null,
        date:''
    },
};

const descriptionSlice = createSlice({
    name: 'description',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateStatistics, (state, action: PayloadAction<Stats>) => {
            state.statistics = action.payload;
        });
    },
});

export default descriptionSlice.reducer;
