import { Typography, Box, Stack, List, ListItem, ListItemIcon, ListItemText, Container } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import LanguegeIcon from '@mui/icons-material/Language';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchLocations } from '../../redux/locationSlice';

const LocationList = () => {
    const dispatch = useDispatch();
    const { locations, status } = useSelector((state) => state.location);

    useEffect(() => {
        dispatch(fetchLocations());
    }, []);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }
    return (
        <Container sx={{ paddingBlock: '2rem' }}>
            <Typography variant="h6">Location List</Typography>

            <Stack spacing={2} sx={{ paddingBlock: '2rem' }}>
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
        </Container>
    );
};

export default LocationList;
