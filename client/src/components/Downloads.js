import * as React from 'react';
import { CardActions, Button, Box, Card, CardContent, Container, Divider, Grid, Typography } from '@mui/material';

const tiers = [
    {
        title: 'MiCK-50',
        description: 'Download database clustered at 50% identity',
        file: 'File_1.faa'
    },
    {
        title: 'MiCK-75',
        description: 'Download database clustered at 75% identity',
        file: 'File_2.faa'
    },
    {
        title: 'MiCK-80',
        description: 'Download database clustered at 80% identity',
        file: 'File_3.faa'
    },
    {
        title: 'MiCK-90',
        description: 'Download database clustered at 90% identity',
        file: 'File_4.faa'
    },
    {
        title: 'MiCK-100',
        description: 'Download database clustered at 100% identity',
        file: 'File_5.faa'
    },
    {
        title: 'Metadata',
        description: 'Download information of genes, drugs and effects',
        file: 'File_6.xlsx'
    },
];

export default function Downloads() {
    const [hoveredCard, setHoveredCard] = React.useState(null);

    const handleMouseEnter = (index) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <Container
            id="downloads"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
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
                    textAlign: { sm: 'center', md: 'center' },
                }}
            >
                <Typography component="h2" variant="h4" color="text.primary">
                    Downloads
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Download table that have Database data table
                </Typography>
            </Box>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {tiers.map((tier, index) => (
                    <Grid
                        item
                        key={tier.title}
                        xs={12}
                        sm={6}
                        md={4}
                    >
                        <Card
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4,
                                border: undefined,
                                borderColor: undefined,
                                background: undefined,
                                transition: 'all 0.2s ease-in-out',
                                color: '',
                                '&:hover': {
                                    border: '1px solid',
                                    borderColor: 'primary.main',
                                    background: 'linear-gradient(to bottom, #033363, #021F3B)',
                                    color: 'grey.100',
                                },
                                height: 'auto',
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        mb: 1,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography component="h3" variant="h6">
                                        {tier.title}
                                    </Typography>
                                </Box>
                                <Divider
                                    sx={{
                                        my: 2,
                                        opacity: 0.2,
                                        borderColor: 'grey.500',
                                    }}
                                />
                                {tier.description}
                            </CardContent>
                            <CardActions>
                                <Button
                                    fullWidth
                                    variant={hoveredCard === index ? "contained" : "outlined"}
                                    component="a"
                                    href={`../static/assets/${tier.file}`}
                                    download
                                >
                                    Download
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
