import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Navbar, Statistics, Hero, Highlights, Downloads, Search, Team, About, FAQ, Footer } from './components';
import getLPTheme from './getLPTheme';

export default function LandingPage() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Navbar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Divider />
        <Statistics />
        <Divider />
        <Highlights />
        <Divider />
        <Search />
        <Divider />
        <Downloads />
        <Divider />
        <About />
        <Divider />
        <FAQ />
        <Divider />
        <Team />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
