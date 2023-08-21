import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    latitude: 0,
    longitude: 0
};

export const locationSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setLocation: (state, action) => {
            return (state = { ...action.payload });
        }
    }
});

// Action creators are generated for each case reducer function
export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
