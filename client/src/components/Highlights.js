import * as React from 'react';
import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material';
import { AutoFixHighRounded, ConstructionRounded, QueryStatsRounded, SettingsSuggestRounded, SupportAgentRounded } from '@mui/icons-material';

const items = [
    {
        icon: <QueryStatsRounded />,
        title: 'Perform search on genes of their interest using the names of the genes'
    },
    {
        icon: <ConstructionRounded />,
        title: 'Use drug name to find all the target gene sequences and their effects'
    },
    {
        icon: <AutoFixHighRounded />,
        title: 'Search the effect to find out which gene will cause such effects'
    },
    {
        icon: <SupportAgentRounded />,
        title: 'In FAQ’s users can view some of the most frequently asked questions'
    },
    {
        icon: <SettingsSuggestRounded />,
        title: 'In download interface, users have access to download different datasets '
    }
];

export default function Highlights() {
    return (
        <Box
            id="highlights"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: '#06090a',
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    <Typography component="h2" variant="h4">
                        Highlights
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'grey.400' }}>
                        <b>In MiCK, users can:</b>
                    </Typography>
                </Box>
                <Grid container spacing={2.5} justifyContent="center">
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} align="center">
                            <Stack
                                direction="column"
                                color="inherit"
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    border: '1px solid',
                                    borderColor: 'grey.800',
                                    background: 'transparent',
                                    backgroundColor: 'grey.900',
                                }}
                            >
                                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                                <div>
                                    <Typography fontWeight="medium" gutterBottom>
                                        {item.title}
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
