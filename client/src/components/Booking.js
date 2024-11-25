// src/components/Booking.js

import React from 'react';
import { Container, Typography } from '@mui/material';

const Booking = () => {
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Book Your Tickets Here!
            </Typography>
            {/* Add booking form logic here */}
        </Container>
    );
};

export default Booking;