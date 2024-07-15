import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Divider } from '@mui/material';
import { Navbar, Hero, Statistics, Downloads, Search, Team, FAQ, Footer, About, Highlights } from './components';
import getLPTheme from './getLPTheme';

export default function LandingPage() {
    const [mode, setMode] = React.useState('light');
    const LPtheme = createTheme(getLPTheme(mode));

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <Router>
            <ThemeProvider theme={LPtheme}>
                <CssBaseline />
                <Navbar mode={mode} toggleColorMode={toggleColorMode} />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/downloads" element={<Downloads />} />
                    <Route path="/stats" element={<Statistics />} />
                    <Route path="/highlights" element={<Highlights />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/team" element={<Team />} />
                </Routes>
                <Divider />
                <Footer />
            </ThemeProvider>
        </Router>
    );
}
