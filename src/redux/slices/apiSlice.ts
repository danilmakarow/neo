import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {NEOData, NeoState} from "../../shared/interfaces/api.interfaces";

const API_URL = import.meta.env.VITE_NASA_API_URL;
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

// Creating async action
export const fetchNeo = createAsyncThunk('neo/fetchNeo', async (date: string) => {
    const response = await axios.get(`${API_URL}?start_date=${date}&end_date=${date}&api_key=${API_KEY}`);
    return response.data;
});

const initialState: NeoState = {
    data: null,
    status: 'idle',
    error: null,
};

// Creating slice
const apiSlice = createSlice({
    name: 'neo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNeo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNeo.fulfilled, (state, action: PayloadAction<NEOData>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchNeo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default apiSlice.reducer;
