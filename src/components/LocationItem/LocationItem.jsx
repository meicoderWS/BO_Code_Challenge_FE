import { Box, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import LanguegeIcon from '@mui/icons-material/Language';
import PropTypes from 'prop-types';
import { useState } from 'react';

const LocationItem = ({ name, latitude, longitude }) => {
    const [selected, setSelected] = useState(false);
    const theme = useTheme();
    const handleClick = (e) => {
        e.preventDefault();
        console.log('clicked');
        setSelected(!selected);
    };

    const boxSX = {
        '&:hover': {
            boxShadow: 10,
            cursor: 'pointer'
        }
    };

    return (
        <Box boxShadow={3} borderRadius={8} padding={2} bgcolor={selected ? theme.palette.primary.main : 'white'} color={selected ? 'white' : 'black'} sx={boxSX} onClick={handleClick}>
            <List>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <BadgeIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Name: ${name}`} />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <LanguegeIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Latitude: ${latitude}`} />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <LanguegeIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Longitude:  ${longitude}`} />
                </ListItem>
            </List>
        </Box>
    );
};

LocationItem.propTypes = {
    name: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string
};

export default LocationItem;
