import * as React from 'react';
import { CardActions, Button, Box, Card, CardContent, Container, Divider, Grid, Typography } from '@mui/material';

const tiers = [
  {
    title: 'MiCK-50',
    description: 'Download database clustered at 50% identity'
  },
  {
    title: 'MiCK-75',
    description: 'Download database clustered at 75% identity'
  },
  {
    title: 'MiCK-80',
    description: 'Download database clustered at 80% identity'
  },
  {
    title: 'MiCK-90',
    description: 'Download database clustered at 90% identity'
  },
  {
    title: 'MiCK-100',
    description: 'Download database clustered at 100% identity'
  },
  {
    title: 'Metadata',
    description: 'Download information of genes, drugs and effects'
  },
];

export default function Downloads() {
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
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: tier.title === 'Professional' ? '1px solid' : undefined,
                '&:hover': {
                  borderColor: 'primary.main',
                  background: 'linearGradient(#033363, #021F3B)',
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
                    color: '',
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
                  variant="outlined"
                  component="a"
                  target="_blank"
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
