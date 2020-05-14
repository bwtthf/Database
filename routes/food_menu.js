const express = require('express');
const db = require('../db')

const router = express.Router();

router.get('/getAllFoods', (req, res, next) => {

    let sql_str = "SELECT * FROM Food_menu F;"

    db.raw(sql_str)
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.post('/deleteFood', (req, res, next) => {
    let food_id = req.body.food_id

    let sql_str = "DELETE FROM Food_menu WHERE food_id=?;"
    db.raw(sql_str, [food_id])
        .then((results) => {
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});

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

router.get('/topThreeFoodTimePeriod', (req, res, next) => {
    sql_str = "### NOT SURE HOW TO TYPE QUERY"

    db.raw(sql_str, [req.body.item_id])
        .then((results) => {
            res.json(results.rows);
        })
        .catcj((error) => {
            console.log(error);
            res.json({});
        })
});

router.get('/bestSellerForHoliday', (req, res, next) => {
    sql_str = "### NOT SURE HOW TO TYPE QUERY"

    db.raw(sql_str, [req.body.item_id])
        .then((results) => {
            res.json(results.rows);
        })
        .catcj((error) => {
            console.log(error);
            res.json({});
        })
});









module.exports = router;