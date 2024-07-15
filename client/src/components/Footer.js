import * as React from 'react';
import { Box, Container, useTheme, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { ll, dl } from '../images';

const logoStyle = {
    width: '52%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
};

export default function Footer() {
    const theme = useTheme();

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 1,
                gap: { xs: 4, sm: 8 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-around',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box sx={{ width: { xs: '100%', sm: '60%' }, justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            {theme.palette.mode === 'light' ? (
                                <>
                                    <img src={ll} alt="Hero" style={logoStyle} />
                                </>
                            ) : (
                                <>
                                    <img src={dl} alt="Hero" style={logoStyle} />
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
                        mt: 2
                    }}
                >
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} component={Link} to='/'>
                        Home
                    </MuiLink>
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} component={Link} to='/search'>
                        Search
                    </MuiLink>
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} component={Link} to='/downloads'>
                        Downloads
                    </MuiLink>
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} component={Link} to='/about'>
                        About Us
                    </MuiLink>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                        mt: 2
                    }}
                >
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} component={Link} to='/faq'>
                        FAQs
                    </MuiLink>
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} component={Link} to='/team'>
                        Team
                    </MuiLink>
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} component={Link} to='/stats'>
                        Statistics
                    </MuiLink>
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} component={Link} to='/highlights'>
                        Highlights
                    </MuiLink>
                </Box>
            </Box>
        </Container>
    );
}
