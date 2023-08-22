import { Typography, Stack } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchLocations } from '../../redux/locationSlice';
import LocationItem from '../LocationItem/LocationItem';
import LocationSearchForm from '../LocationSearchForm/LocationSearchForm';

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
        <>
            <Typography variant="h6">Location List - Search</Typography>
            <LocationSearchForm />

            <Stack spacing={2} sx={{ paddingBlock: '2rem' }}>
                {locations.map((location) => (
                    <LocationItem key={location.id} name={location.name} latitude={location.latitude} longitude={location.longitude} />
                ))}
            </Stack>
        </>
    );
};

export default LocationList;
