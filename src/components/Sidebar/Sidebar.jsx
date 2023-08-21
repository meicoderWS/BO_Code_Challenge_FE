import { Typography, Button, Stack, TextField, Box } from '@mui/material';
import { useState } from 'react';
import useAxiosRequest from '../../hooks/useAxiosRequest';
const Sidebar = () => {
    const [name, setName] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const { loading, data, error, makeRequest } = useAxiosRequest();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, latitude, longitude);
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
        <Box
            sx={{
                padding: '2rem'
            }}
        >
            <Stack direction="column" spacing={5}>
                <Stack direction="column">
                    <Typography variant="h3" component="h1" gutterBottom>
                        Base Operation
                    </Typography>
                    <Typography variant="subtitle1">Code Challenge</Typography>
                </Stack>
                <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={2} direction="column">
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
            </Stack>
        </Box>
    );
};

export default Sidebar;
