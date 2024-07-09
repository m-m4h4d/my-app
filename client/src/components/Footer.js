import * as React from 'react';
import { Box, Container, Link, useTheme } from '@mui/material';
import { ll, dl } from '../assets/images';

const logoStyle = {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '999px 0 0 999px',
};

export default function Footer() {
    const theme = useTheme();

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box sx={{ width: { xs: '100%', sm: '60%' }, justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ ml: '-15px', justifyContent: 'center', alignItems: 'center' }}>
                            {theme.palette.mode === 'light' ? (
                                <>
                                    <img src={dl} alt="Hero" style={logoStyle} />
                                </>
                            ) : (
                                <>
                                    <img src={ll} alt="Hero" style={logoStyle} />
                                </>
                            )}
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Link color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('hero')}>
                        Home
                    </Link>
                    <Link color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('highlights')}>
                        Highlights
                    </Link>
                    <Link color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('search')}>
                        Search
                    </Link>
                    <Link color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('downloads')}>
                        Downloads
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Link color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('about')}>
                        About us
                    </Link>
                    <Link color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('faq')}>
                        FAQs
                    </Link>
                    <Link color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('team')}>
                        Team
                    </Link>
                    <Link color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('statistics')}>
                        Statistics
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}
