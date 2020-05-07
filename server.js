const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const db = require('./db')
const inventory = require('./routes/inventory');

// We need to use environment variables
// This setup dotenv with the configuration file
dotenv.config();

// We use Express as our backend
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/public/";
app.use(express.static(distDir));

app.use('/inventory', inventory);

// Test database connection use only
// db.raw('SELECT * FROM Employee;')
//     .then((results) => {
//         console.log(results.rows);
//     })
//     .catch((error) => {
//         console.error(error)
//     });

// app.get('/', (req, res) => {
// });


app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: distDir });
});


// Start listening
var server = app.listen(process.env.PORT || 8080, () => {
    var port = server.address().port;
    console.log("App is now running on port", port);
});
