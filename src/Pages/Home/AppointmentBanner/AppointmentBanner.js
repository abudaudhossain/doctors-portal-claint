import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png"

const appointmentBg = {
    background: `url(${bg}) no-repeat center center `,
    backgroundSize: 'cover',
    backgroundColor: "rgba(5, 15, 49, 0.9)",
    backgroundBlendMode: "darken, luminosity",
    minHeight: "64vh",
    width: "100%",
    color: "white",
    marginTop: "250px"
}

const AppointmentBanner = () => {
    return (
        <div>

            <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Box sx={{display: 'flex',alignItems: 'center' }}>
                        <Grid item xs={5}>
                            <img
                                style={{ width: "100%", marginTop: "-158px" }}
                                src={doctor} alt="" />
                        </Grid>
                        <Grid item xs={7}>
                            <Typography sx={{ color: 'info.main' }} variant="h5" gutterBottom>
                                APPOINTMENT
                            </Typography>
                            <Typography sx={{my: 3,}} variant="h3" gutterBottom>
                                Make an appointment Today
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio delectus quasi dicta praesentium provident harum at, optio incidunt dolorum?
                            </Typography>
                            <Button sx={{mt: 3}} variant="contained">Contained</Button>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;