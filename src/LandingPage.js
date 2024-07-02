import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppAppBar, Statistics, Hero, Highlights, Pricing, Features, Team, About, FAQ, Footer } from './components';
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
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Statistics />
        <Divider />
        <Highlights />
        <Divider />
        <Features />
        <Divider />
        <Pricing />
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
