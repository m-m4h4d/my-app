const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to handle JSON requests
app.use(express.json());
app.use(cors());

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../build')));

// Search route with pagination
app.get('/search', (req, res) => {
    const query = req.query.q ? req.query.q.toLowerCase() : '';
    const page = parseInt(req.query.page, 10) || 0; // Default to page 0
    const limit = parseInt(req.query.limit, 10) || 100; // Default to 100 entries per page
    const results = [];
    let count = 0;

    // Read the CSV file and apply search and pagination
    fs.createReadStream(path.join(__dirname, 'data', 'Database_Data - Copy.csv'))
        .pipe(csv())
        .on('data', (data) => {
            if (query === '' || data.Drug.toLowerCase().includes(query)) {
                if (count >= page * limit && count < (page + 2) * (limit * 2)) {
                    results.push(data);
                }
                count++;
            }
        })
        .on('end', () => {
            console.log(results);
            res.json({
                page,
                limit,
                totalCount: count,
                data: results,
            });
        });
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
