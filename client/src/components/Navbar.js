import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, AppBar, Toolbar, Button, Container, Divider, Typography, MenuItem, Drawer, useTheme } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { ToggleColorMode } from './';
import { ll, dl } from '../images';
import { Link } from 'react-router-dom';

const logoStyle = {
    width: '50px',
    height: 'auto',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
};

function Navbar({ mode, toggleColorMode }) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor:
                                theme.palette.mode === 'light'
                                    ? 'rgba(255, 255, 255, 0.4)'
                                    : 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                ml: 0,
                                pl: 0
                            }}
                        >
                            {theme.palette.mode === 'light' ? (
                                <>
                                    <img src={ll} alt="Hero" style={logoStyle} />
                                </>
                            ) : (
                                <>
                                    <img src={dl} alt="Hero" style={logoStyle} />
                                </>
                            )}
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                                <MenuItem
                                    component={Link} to="/" underline="none"
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Home
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    component={Link} to="/stats" underline="none"
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Statistics
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    component={Link} to="/highlights" underline="none"
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Highlights
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    component={Link} to="/search" underline="none"
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Search
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    component={Link} to="/downloads" underline="none"
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Downloads
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    component={Link} to="/faq" underline="none"
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        FAQs
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    component={Link} to="/about" underline="none"
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        About Us
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    component={Link} to="/team" underline="none"
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Team
                                    </Typography>
                                </MenuItem>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                        </Box>
                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <Menu />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'end',
                                            flexGrow: 1,
                                        }}
                                    >
                                        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                                    </Box>
                                    <br />
                                    <Divider />
                                    <br />
                                    <MenuItem component={Link} to="/" underline="none">
                                        Home
                                    </MenuItem>
                                    <MenuItem component={Link} to="/stats" underline="none">
                                        Statistics
                                    </MenuItem>
                                    <MenuItem component={Link} to="/highlights" underline="none">
                                        Highlights
                                    </MenuItem>
                                    <MenuItem component={Link} to="/search" underline="none">
                                        Search
                                    </MenuItem>
                                    <MenuItem component={Link} to="/downloads" underline="none">
                                        Downloads
                                    </MenuItem>
                                    <MenuItem component={Link} to="/faq" underline="none">
                                        FAQs
                                    </MenuItem>
                                    <MenuItem component={Link} to="/about" underline="none">
                                        About Us
                                    </MenuItem>
                                    <MenuItem component={Link} to="/team" underline="none">
                                        Team
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

Navbar.propTypes = {
    mode: PropTypes.oneOf(['dark', 'light']).isRequired,
    toggleColorMode: PropTypes.func.isRequired,
};

export default Navbar;
