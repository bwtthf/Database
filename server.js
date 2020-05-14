const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const db = require('./db')
const inventory_analytics = require('./routes/inventory_analytics');
const inventory_non_perishables = require('./routes/inventory_non_perishables');
const inventory_perishables = require('./routes/inventory_perishables');
const employee = require('./routes/employee');
const foodmenu = require('./routes/food_menu');
const drink_menu = require('./routes/drink_menu');
const seasonal_drinks = require('./routes/seasonal_drinks');
const drink_menu_archive = require('./routes/drink_menu_archive');
const add_or_edit_drink_menu = require('./routes/add_or_edit_drink_menu');
const sales = require('./routes/sales');
const add_or_edit_sales = require('./routes/add_or_edit_sales');
const food_sales = require('./routes/food_sales');
const drink_sales = require('./routes/drink_sales');
const hourly_sales = require('./routes/hourly_sales');

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

app.use('/inventory_analytics', inventory_analytics);
app.use('/inventory_non_perishables', inventory_non_perishables);
app.use('/inventory_perishables', inventory_perishables);
app.use('/employee', employee);
app.use('/foodmenu',foodmenu);
app.use('/drink_menu', drink_menu);
app.use('/seasonal_drinks', seasonal_drinks);
app.use('/drink_menu_archive', drink_menu_archive);
app.use('/add_or_edit_drink_menu', add_or_edit_drink_menu);
app.use('/sales', sales);
app.use('/add_or_edit_sales', add_or_edit_sales);
app.use('/food_sales', food_sales);
app.use('/drink_sales', drink_sales);
app.use('/hourly_sales', hourly_sales);

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
