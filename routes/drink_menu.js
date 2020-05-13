const express = require('express');
const db = require('../db')

const router = express.Router();


router.get('/getAllDrinks', (req, res, next) => {

    let sql_str = "SELECT * FROM Drink_menu D;"

    db.raw(sql_str)
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});


router.post('/deleteDrink', (req, res, next) => {
    let drink_id = req.body.drink_id

    let sql_str = "DELETE FROM Seasonal_drinks WHERE drink_id=?;"
    db.raw(sql_str, [drink_id])
        .then((results) => {
            // console.log(results.rows);

            let sql_str = "DELETE FROM Drink_menu WHERE drink_id=?;"
            db.raw(sql_str, [drink_id])
                .then((results) => {
                    // console.log(results.rows);
                    res.json(results.rows);
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });

});


module.exports = router;
