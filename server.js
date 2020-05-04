const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const db = require('./db')
const user = require('./routes/user');

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

app.use('/user', user);

app.get('/', (req, res) => {
    db.raw('SELECT * FROM Employee WHERE id=6;')
        .then((results) => {
            res.json(results.rows);
        })
        .catch((error) => {
            console.error(error)
        });
});

app.get('/register', (req, res) => {});
app.get('/login', (req, res) => {});

// Start listening
var server = app.listen(process.env.PORT || 8080, () => {
    var port = server.address().port;
    console.log("App is now running on port", port);
});
