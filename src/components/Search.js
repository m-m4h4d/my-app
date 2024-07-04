import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, Stack, TextField, Typography, Menu, MenuItem, styled, TableContainer, Paper, Table, TableCell, TableHead, TableRow, TableFooter, TablePagination, useTheme, IconButton, TableBody, alpha, CircularProgress } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight, FirstPage, LastPage } from '@mui/icons-material';
import axios from 'axios';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

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
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgb(0, 0, 0) 0px 0px 0px 1px, rgb(0, 0, 0) 0px 10px 15px -3px, rgb(0, 0, 0) 0px 4px 6px -2px',
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
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
}));

const drugs = [
    { name: 'Capecitabine' },
    { name: 'FU' },
    { name: 'Gemictabine' },
    { name: 'Irinotecan' },
    { name: 'Oxaliplatin' },
    { name: 'Riluzole' },
    { name: 'Romidepsin' }
];

export default function Search() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [args, setArgs] = React.useState([]);
    const [selectedDrug, setSelectedDrug] = React.useState('Drug');
    const [searchResults, setSearchResults] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [totalCount, setTotalCount] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const [smallLoading, setSmallLoading] = React.useState(false);
    
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

    const handleSearch = async () => {
        const drugQuery = selectedDrug !== 'Drug' ? selectedDrug : '';
        const keywords = args ? args : '';
        const page = 0;
        const limit = rowsPerPage;

        setLoading(true);

        await axios.get('http://localhost:5000/search', {
            params: {
                q: drugQuery,
                keywords: keywords,
                page: page,
                limit: limit
            }
        })
            .then(response => {
                console.log('Search results:', response.data.page, response.data.limit, response.data.totalCount);
                setSearchResults(response.data.data);
                setPage(response.data.page);
                setRowsPerPage(response.data.limit);
                setTotalCount(response.data.totalCount);
            })
            .catch(error => {
                console.error('There was an error searching the data!', error);
            })
            .finally(() => {
                setLoading(false)
            });
    };

    // const emptyRows =
    //     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - searchResults.length) : 0;

    const handleChangePage = async (event, newPage) => {
        setPage(newPage);
        const drugQuery = selectedDrug !== 'Drug' ? selectedDrug : '';
        const keywords = args ? args : '';
        const limit = rowsPerPage;

        setSmallLoading(true);

        await axios.get('http://localhost:5000/search', {
            params: {
                q: drugQuery,
                keywords: keywords,
                page: newPage,
                limit: limit
            }
        })
            .then(response => {
                console.log('Search results:', response.data.page, response.data.limit, response.data.totalCount);
                setSearchResults(response.data.data);
            })
            .catch(error => {
                console.error('There was an error searching the data!', error);
            })
            .finally(() => {
                setSmallLoading(false)
            });
    };

    const handleChangeRowsPerPage = async (event) => {
        const newLimit = parseInt(event.target.value, 10);
        const drugQuery = selectedDrug !== 'Drug' ? selectedDrug : '';
        const keywords = args ? args : '';

        setLoading(true);
        setRowsPerPage(newLimit);
        setPage(0);

        await axios.get('http://localhost:5000/search', {
            params: {
                q: drugQuery,
                keywords: keywords,
                page: 0,
                limit: newLimit
            }
        })
            .then(response => {
                console.log('Search results:', response.data.page, response.data.limit, response.data.totalCount);
                setSearchResults(response.data.data);
            })
            .catch(error => {
                console.error('There was an error searching the data!', error);
            })
            .finally(() => {
                setLoading(false)
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
                            value={args}
                            onChange={(event) => setArgs(event.target.value)}
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
                <Box
                    align='center'
                    sx={(theme) => ({
                        mt: { xs: 8, sm: 10 },
                        justifyContent: 'space-between',
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
                    {loading && <CircularProgress style={{ marginBottom: '1rem', marginTop: '1rem' }} />}
                    {!loading && searchResults.length > 0 && (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>AccessionNo</TableCell>
                                        <TableCell align='center'>Type</TableCell>
                                        <TableCell align='center'>Drug</TableCell>
                                        <TableCell align='center'>Full Name</TableCell>
                                        <TableCell align='center'>Original_Accession</TableCell>
                                        <TableCell align='center'>Effect</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {searchResults.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((result, index) => (
                                        <TableRow key={index}>
                                            <TableCell align='center'>{result.AccessionNo}</TableCell>
                                            <TableCell align='center'>{result.Type}</TableCell>
                                            <TableCell align='center'>{result.Drug}</TableCell>
                                            <TableCell align='center'>{result.FullName}</TableCell>
                                            <TableCell align='center'>{result.Original_Accession}</TableCell>
                                            <TableCell align='center'>{result.Effect}</TableCell>
                                        </TableRow>
                                    ))}
                                    {/* {emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )} */}
                                </TableBody>
                                <TableFooter>
                                    <TableRow style={{ height: '3rem' }}>
                                        <TableCell align='right' style={{ margin: 0, padding: 0 }}>
                                            {smallLoading && <CircularProgress size='2rem' />}
                                        </TableCell>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 20, 50]}
                                            colSpan={5}
                                            count={totalCount}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            slotProps={{
                                                select: {
                                                    inputProps: {
                                                        'aria-label': 'rows per page',
                                                    },
                                                    native: true,
                                                },
                                            }}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    )}
                </Box>
            </Container>
        </Box>
    );
}
