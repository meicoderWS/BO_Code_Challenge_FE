import { Typography, Stack, Box, ButtonGroup, Button } from '@mui/material';

import LocationList from '../LocationList/LocationList';
import { useState } from 'react';
import LocationForm from '../LocationForm/LocationForm';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListIcon from '@mui/icons-material/List';

const Sidebar = () => {
    const [viewForm, setViewForm] = useState(false);
    const [viewList, setViewList] = useState(true);

    const handleViewForm = (e) => {
        e.preventDefault();
        setViewList(false);
        setViewForm(true);
    };

    const handleViewList = (e) => {
        e.preventDefault();
        setViewForm(false);
        setViewList(true);
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
                <ButtonGroup variant="contained" disableElevation aria-label="outlined primary button group" sx={{ justifyContent: 'center' }}>
                    <Button startIcon={<AddBoxIcon />} onClick={handleViewForm}>
                        New Location
                    </Button>
                    <Button endIcon={<ListIcon />} onClick={handleViewList}>
                        List Locations
                    </Button>
                </ButtonGroup>
            </Stack>
            {viewList && <LocationList />}
            {viewForm && <LocationForm />}
        </Box>
    );
};

export default Sidebar;
