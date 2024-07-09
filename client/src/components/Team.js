import * as React from 'react';
import { Card, CardContent, CardHeader, Typography, Box, Container, Grid } from '@mui/material';
import { Download, Principal, Author, Husnain } from '../images';

const members = [
    {
        avatar: Author,
        name: 'Muhammad Shahzaib',
        occupation: 'Author',
        email: "kshahzaib9937@gmail.com"
    },
    {
        avatar: Principal,
        name: 'Dr. Masood Ur Rehman Kayani',
        occupation: 'Principal Investigator',
        email: "m.kayani@sines.nust.edu.pk"
    },
    {
        avatar: Husnain,
        name: 'Husnain',
        occupation: 'Database Developer'
    },
    {
        avatar: Download,
        name: 'Dr. Farzana Jabeen',
        occupation: 'Lead Web Developer'
    },
];

export default function Team() {
    return (
        <Container
            id="team"
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
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                <Typography component="h2" variant="h4" color="text.primary">
                    Team
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {members.map((member, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: 'flex' }}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                flexGrow: 1,
                                p: 1,
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    p: 1,
                                    alignItems: 'center',
                                    textAlign: 'left'
                                }}
                            >
                                <img src={member.avatar} alt={member.name} style={{ borderRadius: '10%', maxWidth: '30%', objectFit: 'cover' }} />
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                                    <CardHeader
                                        title={member.name}
                                        subheader={member.occupation}
                                    />
                                    <CardContent>
                                        <Typography variant="body1" color="text.secondary">
                                            {member.email}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
