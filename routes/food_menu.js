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
    sql_str = "SELECT food_name, food_category, sum(quantity) \
    FROM Food_sales as FS, Food_menu as FM, Sales as S \
    WHERE FS.food_id = FM.food_id AND S.Receipt_id = FS.Receipt_id AND S.Date BETWEEN '2019-01-01' AND '2019-12-31' \
    GROUP BY food_name, food_category, quantity \
    ORDER BY quantity DESC \
    LIMIT 3;"

    db.raw(sql_str)
        .then((results) => {
            console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/bestSellerForHoliday', (req, res, next) => {
    sql_str = "SELECT food_name, food_category, sum(quantity) \
    FROM Food_sales AS FS, Food_menu AS FM, Sales AS S \
    WHERE FS.food_id = FM.food_id AND S.Receipt_id = FS.Receipt_id AND S.time_stamp \
    BETWEEN '2019-12-31 17:00:00' AND '2019-12-31 23:00:00' \
    GROUP BY food_name, food_category, quantity \
    ORDER BY quantity DESC \
    LIMIT 1;"

    db.raw(sql_str)
        .then((results) => {
            console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});









module.exports = router;