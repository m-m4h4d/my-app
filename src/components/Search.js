import * as React from 'react';
import { Box, Button, Container, Stack, TextField, Typography, Menu, MenuItem, styled, alpha } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import axios from 'axios';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            },
        },
    },
}));

const drugs = [
    { name: 'Capecitabine' },
    { name: 'FU' },
    { name: 'Gemcitabine' },
    { name: 'Irinotecan' },
    { name: 'Oxaliplatin' },
    { name: 'Riluzole' },
    { name: 'Romidepsin' }
];

export default function Search() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedDrug, setSelectedDrug] = React.useState('Drug');
    const [searchResults, setSearchResults] = React.useState([]);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (drug) => {
        setAnchorEl(null);
        if (drug) {
            setSelectedDrug(drug.name);
        }
    };

    const handleDeselect = () => {
        setSelectedDrug('Drug');
        setAnchorEl(null);
    };

    const handleSearch = () => {
        const query = selectedDrug !== 'Drug' ? selectedDrug : '';
        axios.get(`/search?q=${query}`)
            .then(response => {
                setSearchResults(response.data);
            })
            .catch(error => {
                console.error('There was an error searching the data!', error);
            });
    };

    return (
        <Box
            id="search"
            sx={(theme) => ({
                width: '100%',
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
                <Typography component="h2" variant="h4" color="text.primary">
                    MiCK Search Page
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Search page allows a keyword search against the sequences of MiCK database.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Type keywords like 5-FU, Irinotecan, Capecitabine, Gemcitabine, or Oxaliplatin.
                </Typography>
                <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        alignSelf="center"
                        spacing={1}
                        useFlexGap
                        sx={{ pt: 2, width: '100%' }}
                    >
                        <div>
                            <Button
                                id="demo-customized-button"
                                aria-controls={open ? 'demo-customized-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                variant="contained"
                                disableElevation
                                onClick={handleClick}
                                endIcon={<KeyboardArrowDown />}
                            >
                                {selectedDrug}
                            </Button>
                            <StyledMenu
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={() => handleClose(null)}
                            >
                                <MenuItem onClick={handleDeselect}>
                                    None
                                </MenuItem>
                                {drugs.map((drug, index) => (
                                    <MenuItem key={index} onClick={() => handleClose(drug)}>
                                        {drug.name}
                                    </MenuItem>
                                ))}
                            </StyledMenu>
                        </div>
                        <TextField
                            id="outlined-basic"
                            hiddenLabel
                            fullWidth
                            size='medium'
                            variant="outlined"
                            aria-label="Type Keywords..."
                            placeholder="Type Keywords..."
                            inputProps={{
                                autoComplete: 'on',
                                'aria-label': 'Type Keywords...',
                            }}
                        />
                        <Button variant="contained" color="primary" onClick={handleSearch}>
                            Search
                        </Button>
                    </Stack>
                </Stack>
                {searchResults.length > 0 && (
                    <Box
                        sx={(theme) => ({
                            mt: { xs: 8, sm: 10 },
                            pt: { xs: 4, sm: 6 },
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
                        <Typography variant="h6" color="text.primary">
                            Search Results:
                        </Typography>
                        {searchResults.map((result, index) => (
                            <Typography key={index} variant="body2" color="text.secondary">
                                {result.FullName} ({result.Drug}) - {result.Effect}
                            </Typography>
                        ))}
                    </Box>
                )}
            </Container>
        </Box>
    );
}
