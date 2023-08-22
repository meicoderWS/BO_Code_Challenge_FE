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

const searchLocations = createAsyncThunk('locations/search', async ({ distance, latitude, longitude }) => {
    try {
        const response = await axios['get'](`${API_URL}`, {
            params: {
                distance,
                latitude,
                longitude
            }
        });
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
});

const saveLocation = createAsyncThunk('locations/save', async ({ name, latitude, longitude }) => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                name,
                latitude,
                longitude
            }
        };
        const response = await axios(`${API_URL}`, options);
        const newLocation = {
            id: response.data,
            name,
            latitude,
            longitude
        };
        return newLocation;
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
                state.status = 'succeeded';
                state.locations = action.payload;
            })
            .addCase(fetchLocations.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(saveLocation.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.locations.push(action.payload);
            })
            .addCase(saveLocation.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchLocations.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.locations = action.payload;
            })
            .addCase(searchLocations.pending, (state) => {
                state.status = 'loading';
            });
    }
});

export { fetchLocations, saveLocation, searchLocations };
export const { addLocation, removeLocation } = locationSlice.actions;
export default locationSlice.reducer;
