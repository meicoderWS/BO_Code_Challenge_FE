import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../constants';

const initialState = {
    locations: [],
    status: 'idle'
};

const fetchLocations = createAsyncThunk('locations/fetch', async () => {
    try {
        const response = await axios['get'](`${API_URL}`);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
});

const locationSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        addLocation: (state, action) => {
            state.locations.push(action.payload);
        },
        removeLocation: (state, action) => {
            state.locations = state.locations.filter((location) => location.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLocations.fulfilled, (state, action) => {
                state.locations = action.payload;
            })
            .addCase(fetchLocations.pending, (state) => {
                state.status = 'loading';
            });
    }
});

export { fetchLocations };
export const { addLocation, removeLocation } = locationSlice.actions;
export default locationSlice.reducer;
