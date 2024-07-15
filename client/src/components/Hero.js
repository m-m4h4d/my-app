import * as React from 'react';
import { alpha, Box, Container, Stack, Typography } from '@mui/material';

export default function Hero() {
    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: '100%',
                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
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
                    pb: { xs: 8, sm: 10 },
                }}
            >
                <Stack spacing={2} useFlexGap sx={{ width: '100%' }}>
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 'clamp(3rem, 10vw, 4rem)',
                        }}
                    >
                        Welcome to the&nbsp;
                    </Typography>
                    <Typography
                        component="span"
                        variant="h1"
                        textAlign="center"
                        sx={{
                            fontSize: 'clamp(3rem, 10vw, 4rem)',
                            textAlign: 'center',
                            alignSelf: 'center',
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            color: (theme) =>
                                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                        }}
                    >
                        Microbial Chemoresistance Knowledgebase (MiCK)
                    </Typography>
                    <Typography
                        variant='h6'
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        Cancer remains one of the most formidable health challenges globally, with millions of new cases and deaths reported annually. Chemoresistance significantly impacts the efficacy of cancer treatment, often leading to treatment failure and disease progression. MiCK is dedicated to addressing the challenge of chemoresistance in cancer by serving as a resource for microbial gene sequences associated with treatment efficacy. Our goal is to facilitate researchers and healthcare professionals in further understanding and mitigation of chemoresistance across various cancer types.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}
