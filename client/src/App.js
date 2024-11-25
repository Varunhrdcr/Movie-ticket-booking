// src/App.js

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Movies from './components/Movies';
import Booking from './components/Booking';
import About from './components/About';

const theme = createTheme({
    palette: {
        mode: 'dark', // Set dark mode here
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact component={Home} />
                    <Route path="/movies" component={Movies} />
                    <Route path="/booking" component={Booking} />
                    <Route path="/about" component={About} />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;