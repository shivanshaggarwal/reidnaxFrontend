import React from 'react';
import {
    Box,
    Typography,
    // Avatar,
    // Grid,
    // Card,
    // CardActionArea,
    // CardContent,
    // CardMedia,
    // CardActions,
    Button,
    Divider
} from '@mui/material';

import styles from './Workspace.module.css';

// Icons
import AddIcon from '@mui/icons-material/Add';


import noPreview from '../../assets/Images/NoPreview.svg';

import Moment from 'moment';

import { useNavigate } from 'react-router-dom';
import BarChart from './BarChart';

const Workspace = () => {

    const date = Moment().format("Do MMM YYYY");
    const weekday = Moment().format("dddd");

    const navigate = useNavigate();

    return (
        <>
            <Box>
                <Box className={styles.header} mb={2}>
                    <Typography variant='h5'>
                        My Chart Space
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", display: "flex", flexWrap: "wrap", float: "right", fontSize: { xs: "13px", sm: "16px", md: "18px" }, textAlign: "end" }} color="secondary" variant='h6'>
                        {date}, {weekday}
                    </Typography>
                </Box>
                <Divider />
                <Box mt={2}>
                    <BarChart />
                </Box>
            </Box>
        </>
    )
}

export default Workspace;