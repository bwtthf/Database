const express = require('express');
const db = require('../db')

const router = express.Router();


router.get('/getAllSeasonalDrinks', (req, res, next) => {
    sql_str = "SELECT S.drink_id, \
                to_char(S.date_active_start, 'YYYY-MM-DD') AS date_active_start, \
                to_char(S.date_active_end, 'YYYY-MM-DD') AS date_active_end, \
                D.drink_name, D.drink_price, D.drink_category, D.alcoholic, \
                to_char(D.date_added, 'YYYY-MM-DD') AS date_added \
                FROM Seasonal_drinks S LEFT JOIN Drink_menu D ON S.drink_id=D.drink_id;"

    db.raw(sql_str)
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});


module.exports = router;
