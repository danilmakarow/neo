import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {Neo, NeoState} from "../../shared/interfaces/api.interfaces";

const API_URL = import.meta.env.VITE_NASA_API_URL;
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

// Создаем асинхронный экшен
export const fetchNeo = createAsyncThunk('neo/fetchNeo', async (date: string) => {
    const response = await axios.get(`${API_URL}?start_date=${date}&end_date=${date}&api_key=${API_KEY}`);
    console.log(response)
    return response.data;
});

const initialState: NeoState = {
    data: [],
    status: 'idle',
    error: null,
};

// Создаем срез
const apiSlice = createSlice({
    name: 'neo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNeo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNeo.fulfilled, (state, action: PayloadAction<Neo[]>) => {
                state.status = 'succeeded';
                // добавляем полученные данные в состояние
                state.data = action.payload;
            })
            .addCase(fetchNeo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default apiSlice.reducer;
