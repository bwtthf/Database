const express = require('express');
const db = require('../db')

const router = express.Router();

router.get('/getBestSeller', (req, res, next) => {

    sql_str = "SELECT food_name, count(quantity), food_category \
    FROM Food_sales AS FS, Food_menu AS FM \
    WHERE FS.food_id = FM.food_id \
    GROUP BY FM.food_name, FM.food_category \
    ORDER BY count(quantity) DESC \
    LIMIT 1;"

    db.raw(sql_str)
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/getLeastPopular', (req, res, next) => {
    
    sql_str = "SELECT food_name, count(quantity), food_category \
    FROM Food_sales AS FS, Food_menu AS FM \
    WHERE FS.food_id = FM.food_id \
    GROUP BY FM.food_name, FM.food_category \
    ORDER BY count(quantity) \
    LIMIT 1; "

    db.raw(sql_str)
        .then((results) => {
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/topThreeFoodCategories', (req, res, next) => {

    sql_str = "SELECT sum(quantity), food_category \
    FROM Food_sales AS FS, Food_menu AS FM \
    WHERE FS.food_id = FM.food_id \
    GROUP BY FM.food_category \
    ORDER BY sum(quantity); "

    db.raw(sql_str)
        .then((results) => {
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});


module.exports = router;