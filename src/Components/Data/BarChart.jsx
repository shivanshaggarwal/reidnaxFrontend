import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Typography,
} from "@mui/material";

import LoadAnimation from '../LoadAnimation/index';

import MaterialTable from "@material-table/core";
import axios from 'axios';

// import CountUp from "react-countup";

const BarChart = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures that useEffect runs only once (on mount)

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/barchart'); // Replace with your API endpoint
            console.log(response, "lmldwklfn.....")
            setData(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const columns = [
        { title: "S.No", field: "serialNo", width: "10rem" },
        { title: "Interaction Title", field: "interactionTitle", width: "12rem" },
        { title: "Percentage", field: "percentage", width: "10rem" }
    ];

    const interactionData = data;


    // const navigate = useNavigate();

    return (
        <>
            <Box>
                {/* <Grid container spacing={1}> */}
                {/* <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Card sx={{ backgroundColor: "#DFFCF0", marginBottom: "1rem" }}>
                            <CardContent sx={{ color: "#1F845A" }}>
                                <Typography variant="h5" component="div">
                                    Total Candidates
                                </Typography>
                                <Typography variant="h6" component="div">
                                    <CountUp end={100} />
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ backgroundColor: "#FFEDEB" }}>
                            <CardContent sx={{ color: "#CA3521" }}>
                                <Typography variant="h5" component="div">
                                    Total Interactions
                                </Typography>
                                <Typography variant="h6" component="div">
                                    <CountUp end={100} />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid> */}
                {/* <Grid item xs={12} sm={6} md={9} lg={9}> */}
                <Box xs={12} sm={12} md={12} lg={12}>
                    {loading ? (
                        <LoadAnimation />
                    ) : (
                        <MaterialTable
                            title={<Typography variant='h5'>Interactions</Typography>}
                            columns={columns}
                            data={interactionData}
                            options={{
                                actionsColumnIndex: -1,
                                addRowPosition: "first",
                                tableLayout: "fixed",
                                headerStyle: { fontWeight: "bold", fontSize: "1rem" },
                            }}
                        />
                    )}
                </Box>
                {/* </Grid> */}
                {/* </Grid> */}
            </Box>
        </>
    )
}

export default BarChart;