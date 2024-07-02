import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import { WbSunnyRounded, ModeNightRounded } from '@mui/icons-material';

function ToggleColorMode({ mode, toggleColorMode }) {
  return (
    <Box sx={{ maxWidth: '32px' }}>
      <Button
        variant="text"
        onClick={toggleColorMode}
        size="small"
        aria-label="button to toggle theme"
        sx={{ minWidth: '32px', height: '32px', p: '4px' }}
      >
        {mode === 'dark' ? (
          <WbSunnyRounded fontSize="small" />
        ) : (
          <ModeNightRounded fontSize="small" />
        )}
      </Button>
    </Box>
  );
}

ToggleColorMode.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default ToggleColorMode;
