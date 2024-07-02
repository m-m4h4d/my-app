import * as React from 'react';
import { alpha, Box, Container, Typography, useTheme } from '@mui/material';
import { Pd0, Pd1, Pl0, Pl1 } from '../assets';

export default function Statistics() {
    const theme = useTheme();

    return (
        <Box
            id="statistics"
            sx={(theme) => ({
                width: '100%',
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Key Statistics
          </Typography>
                <Box
                    sx={(theme) => ({
                        mt: { xs: 8, sm: 10 },
                        alignSelf: 'center',
                        height: '100%',
                        width: '100%',
                        backgroundSize: 'cover',
                        borderRadius: '10px',
                        outline: '1px solid',
                        outlineColor:
                            theme.palette.mode === 'light'
                                ? alpha('#BFCCD9', 0.5)
                                : alpha('#9CCCFC', 0.1),
                        boxShadow:
                            theme.palette.mode === 'light'
                                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                    })}
                >
                    {theme.palette.mode === 'light' ? (
                        <>
                            <img src={Pl0} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                            <img src={Pl1} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                        </>
                    ) : (
                        <>
                            <img src={Pd0} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                            <img src={Pd1} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                        </>
                    )}
                </Box>
            </Container>
        </Box>
    );
}
