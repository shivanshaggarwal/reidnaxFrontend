import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    Avatar,
    CardContent,
} from '@mui/material';

import CountUp from "react-countup";

// Icons
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TuneIcon from '@mui/icons-material/Tune';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const Chart = (props) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    beginAtZero: true,
                    callback: function (value) {
                        return value + '%';
                    }
                }
            }
        },
    };

    // Empty dependency array ensures that useEffect runs only once (on mount)
    const labels = props.chartData.map((item) => item.interactionTitle);

    const data = {
        labels,
        datasets: [
            {
                label: 'Bar Chart',
                data: props.chartData.map((item) => Number(item.percentage)),
                borderColor: 'rgb(25, 118, 210)',
                backgroundColor: 'rgba(25, 118, 210, 0.5)',
            },
        ],
    };

    return (
        <>
            <Box mt={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ margin: "auto" }}>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ margin: "auto" }}>
                        <Card elevation={2}>
                            <CardContent>
                                <Typography mb={3} variant="h6">
                                    Our Chart : <span style={{ color: "rgb(25, 118, 210)" }}>Data Counts</span>
                                </Typography>
                                <Bar options={options} data={data} />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Chart;