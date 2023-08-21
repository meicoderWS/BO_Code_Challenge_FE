import { useEffect, useState } from 'react';
import useAxiosRequest from '../../hooks/useAxiosRequest';
import { Typography, Box, Stack, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import LanguegeIcon from '@mui/icons-material/Language';

const LocationList = () => {
    const { loading, data, error, makeRequest } = useAxiosRequest();
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        makeRequest('get');
        if (data) {
            setLocations(data);
        }
    }, []);
    return (
        <Box>
            <Typography>Location List</Typography>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Stack spacing={2}>
                    {locations.map((location) => (
                        <Box key={location.id}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <BadgeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={`Name: ${location.name}`} />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <LanguegeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={`Coord: ${location.latitude},  ${location.longitude}`} />
                                </ListItem>
                            </List>
                        </Box>
                    ))}
                </Stack>
            )}
            {error && <p>Error: {error.message}</p>}
        </Box>
    );
};

export default LocationList;
