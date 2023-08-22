import { Box, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchLocations } from '../../redux/locationSlice';

const LocationSearchForm = () => {
    const dispatch = useDispatch();
    const [distance, setDistance] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        const filters = {
            distance,
            latitude,
            longitude
        };
        dispatch(searchLocations(filters));

        setDistance('');
        setLatitude('');
        setLongitude('');
    };
    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ paddingBlock: '2rem' }}>
            <Stack
                spacing={2}
                direction="column"
                sx={{
                    marginBottom: '2rem'
                }}
            >
                <TextField label="distance" value={distance} onChange={(e) => setDistance(e.target.value)} required />
                <TextField label="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
                <TextField label="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
            </Stack>

            <Button variant="contained" type="submit">
                Search
            </Button>
        </Box>
    );
};

export default LocationSearchForm;
