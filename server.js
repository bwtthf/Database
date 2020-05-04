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


var knex = require('knex')({
	client: 'pg',
	connection: {
		connectionString: process.env.DATABASE_URL,
		ssl: true
	},
});





app.get('/', (req, res) => {
    try {
        knex.select('id')
            .from('Employee')
            .then(function (rows) {
                console.log(rows);
            })
            .catch(function (error) {
                console.error(error)
            });
        console.log("ok");
    } catch (error) {
        console.log(`Error seeding data: ${error}`);
    }
    finally {
        console.log("entering and leaving the finally block");
    }
    // console.log(results);
    res.send({
        name: process.env.DB_NAME,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS
    });
});

app.use('/user', user);

// Start listening
var server = app.listen(process.env.PORT || 8080, () => {
    var port = server.address().port;
    console.log("App is now running on port", port);
});
