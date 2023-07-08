import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {NEO} from "../../shared/interfaces/api.interfaces";
import {updateNeoDisplay} from "../actions";

interface DescriptionState {
    neos: NEO[]
}

const initialState: DescriptionState = {
    neos: []
};

const neoDisplaySlice = createSlice({
    name: 'neo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateNeoDisplay, (state, action: PayloadAction<NEO[]>) => {
            state.neos = action.payload;
        });
    },
});

export default neoDisplaySlice.reducer;
