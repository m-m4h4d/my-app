import * as React from 'react';
import { Card, CardContent, CardHeader, Typography, Box, Container, Grid, Link } from '@mui/material';
import { PS, AS } from '../assets';

const members = [
  {
    avatar: AS,
    name: 'Muhammad Shahzaib',
    occupation: 'Author',
    email: "kshahzaib9937@gmail.com"
  },
  {
    avatar: PS,
    name: 'Dr. Masood Ur Rehman Kayani',
    occupation: 'Principal Investigator',
    email: "m.kayani@sines.nust.edu.pk"
  }
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
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  pt: 1,
                  pb: 1
                }}
              >
                <img src={member.avatar} alt={member.name} style={{ borderRadius: '10%', maxWidth: '30%', objectFit: 'cover' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <CardHeader
                    title={member.name}
                    subheader={member.occupation}
                  />
                  <Typography variant='h6' sx={{ ml: 2 }} color="text.secondary">
                    Contact:
                  </Typography>
                  <CardContent>
                    <Typography variant="body1" color="text.secondary">
                      <Link>{member.email}</Link>
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
