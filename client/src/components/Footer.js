// src/components/Footer.js

import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ marginTop: 'auto', padding: '20px', backgroundColor: '#333', color: '#fff' }}>
            <Container maxWidth="lg">
                <Typography variant="body1" align="center">
                    © {new Date().getFullYear()} Movie Ticket Booking. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;