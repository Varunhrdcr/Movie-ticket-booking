// src/components/Home.js

import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
        // Implement search logic here (e.g., filtering movies)
    };

    const startVoiceSearch = () => {
        const recognition = new window.SpeechRecognition() || window.webkitSpeechRecognition();
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setSearchTerm(transcript);
            console.log('Voice Search Result:', transcript);
        };
        recognition.start();
    };

    return (
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
            <Typography variant="h4" gutterBottom>
                Welcome to Movie Ticket Booking!
            </Typography>
            
            {/* Centered Search Bar */}
            <TextField
                label="Search Movies"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '300px', marginBottom: '20px' }}
            />
            <div>
                <Button variant="contained" color="primary" onClick={handleSearch}>
                    Search
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={startVoiceSearch} 
                    style={{ marginLeft: '10px' }}
                >
                    🎤 Voice Search
                </Button>
            </div>
        </Container>
    );
};

export default Home;