import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg}) no-repeat center center`,
    backgroundSize: 'cover',
    minHeight: "90vh",
    width: "100%",
}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid style={{ height: "90vh" }} sx={{ display: 'flex', alignItems: 'center' }} container spacing={5}>
                    <Grid item xs={12} md={5}>
                        <Typography variant='h3'>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography sx={{my:3}} variant='h6'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, fugiat voluptatum! Ipsam deleniti ratione, aliquid reprehenderit inventore deserunt quo. Aliquid.
                        </Typography>
                        <Button variant="contained">Appoinment</Button>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <img src={chair} width="100%" alt="chair" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;