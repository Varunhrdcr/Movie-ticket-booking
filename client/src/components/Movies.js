// src/components/Movies.js

import React from 'react';
import { Container, Typography } from '@mui/material';

const Movies = () => {
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Movies List
            </Typography>
            {/* Add movie listing logic here */}
        </Container>
    );
};

export default Movies;