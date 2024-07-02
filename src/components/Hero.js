import * as React from 'react';
import { alpha, Box, Button, Container, Link, Stack, TextField, Typography } from '@mui/material';
import { Pd0, Pd1, Pl0, Pl1 } from '../assets';

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
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
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
            Welcome to the&nbsp;
          </Typography>
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
            Microbial Chemoresistance Knowledgebase (MiCK)
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Cancer remains one of the most formidable health challenges globally, with millions of new cases and deaths reported annually. Chemoresistance significantly impacts the efficacy of cancer treatment, often leading to treatment failure and disease progression. MiCK is dedicated to addressing the challenge of chemoresistance in cancer by serving as a resource for microbial gene sequences associated with treatment efficacy. Our goal is to facilitate researchers and healthcare professionals in further understanding and mitigation of chemoresistance across various cancer types.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autoComplete: 'off',
                'aria-label': 'Enter your email address',
              }}
            />
            <Button variant="contained" color="primary">
              Start now
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
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
          <img src={Pl0} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          <img src={Pl1} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
        </Box>
      </Container>
    </Box>
  );
}
