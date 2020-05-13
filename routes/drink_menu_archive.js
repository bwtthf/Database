const express = require('express');
const db = require('../db')

const router = express.Router();


router.get('/getAllDrinksInDrinkMenuArchive', (req, res, next) => {
    let sql_str = "SELECT D.drink_id, D.drink_name, D.drink_price, D.drink_category, \
                    to_char(D.date_added, 'YYYY-MM-DD') AS date_added, \
                    to_char(D.date_deleted, 'YYYY-MM-DD') AS date_deleted, \
                    D.is_seasonal, D.alcoholic \
                    FROM Drink_menu_archive D;"
    db.raw(sql_str)
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});


router.post('/deleteDrinkFromDrinkMenuArchive', (req, res, next) => {
    let sql_str = "DELETE FROM Drink_menu_archive WHERE drink_id=?;";
    db.raw(sql_str, [req.body.drink_id])
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});


module.exports = router;
