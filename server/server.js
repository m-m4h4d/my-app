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

// Search route
app.get('/search', (req, res) => {
    const query = req.query.q ? req.query.q.toLowerCase() : '';
    const results = [];
    if (query) {
        console.log(req.query);
        fs.createReadStream(path.join(__dirname, 'data', 'Database_Data.csv'))
            .pipe(csv())
            .on('data', (data) => {
                if (data.Drug.toLowerCase().includes(query)) {
                    results.push(data);
                }
            })
            .on('end', () => {
                console.log(results);
                res.json(results);
            });
    } else {
        res.json({ message: 'No search query provided' });
    }
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
