const express = require('express');
const db = require('../db')

const router = express.Router();


router.get('/getAllDistinctDrinkCatogories', (req, res, next) => {

    let sql_str = "SELECT DISTINCT drink_category FROM Drink_menu D;"

    db.raw(sql_str)
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});


router.post('/addOrUpdateItemToDrinkMenu', (req, res, next) => {
    // console.log(req.body);

    let drink_id = req.body.drink_id;
    let drink_name = req.body.drink_name;
    let drink_price = req.body.drink_price;
    let drink_category = req.body.drink_category;
    let alcoholic = (req.body.alcoholic === 'True' || req.body.alcoholic === 'true' || req.body.alcoholic === true) ? 't' : 'f';
    let date_active_start = req.body.date_active_start;
    let date_active_end = req.body.date_active_end;
    let is_seasonal = (req.body.date_active_start != null && req.body.date_active_end != null && req.body.date_active_start != '' && req.body.date_active_end != '') ? 't' : 'f';

    if (req.body.drink_id === null || req.body.drink_id === '') {

        let sql_str = "SELECT drink_id FROM Drink_menu ORDER BY drink_id DESC LIMIT 1;"
        db.raw(sql_str)
            .then((results) => {
                console.log(results.rows);
                let temp_drink_id = parseInt(results.rows[0].drink_id) + 1;

                let sql_insertion_str = "INSERT INTO Drink_menu\
                                            (drink_id, drink_name, drink_price, is_seasonal, date_added, alcoholic, drink_category) \
                                            VALUES(?, ?, ?, ?, NOW(), ?, ?)";
                db.raw(sql_insertion_str, [temp_drink_id, drink_name, drink_price, is_seasonal, alcoholic, drink_category])
                    .then((results) => {
                        console.log(results.rows);

                        if (is_seasonal === 't') {
                            let sql_insertion_str = "INSERT INTO Seasonal_drinks VALUES (?, ?, ?);"
                            db.raw(sql_insertion_str, [temp_drink_id, date_active_start, date_active_end])
                                .then((results) => {
                                    console.log(results.rows);
                                    res.json(results.rows);
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        } else {
                            res.json(results.rows);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                res.json(results.rows);
            })
            .catch((error) => {
                console.log(error);
            });
    } else{
    }

});


module.exports = router;
