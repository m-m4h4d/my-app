import * as React from 'react';
import { alpha, Box, Container, Stack, Typography } from '@mui/material';

export default function About() {
  return (
    <Box
      id="about"
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
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="span"
            variant="h1"
            textAlign="center"
            sx={{
              fontSize: 'clamp(3rem, 10vw, 4rem)',
              color: (theme) =>
                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
            }}
          >
            About Us
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            MiCK is a comprehensive knowledge base that houses ~1.6 million microbial gene sequences associated with chemoresistance in multiple cancers. These sequences encompass 29 different gene types linked to chemoresistance and drug metabolism, meticulously curated from recent literature and databases.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
