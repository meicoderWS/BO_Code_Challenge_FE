import { Box, Button, Stack, TextField } from '@mui/material';
import useAxiosRequest from '../../hooks/useAxiosRequest';
import { useState } from 'react';

const LocationForm = () => {
    const [name, setName] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const { /* loading, data, error, */ makeRequest } = useAxiosRequest();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newLocation = {
            name,
            latitude,
            longitude
        };
        makeRequest('post', newLocation);

        setName('');
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
                <TextField label="name" value={name} onChange={(e) => setName(e.target.value)} required />
                <TextField label="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
                <TextField label="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
            </Stack>
            <Stack spacing={2} direction="row" justifyContent="center">
                <Button variant="contained" type="submit">
                    Add Location
                </Button>
                <Button variant="outlined">Cancel</Button>
            </Stack>
        </Box>
    );
};

export default LocationForm;
