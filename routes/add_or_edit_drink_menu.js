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
    let date_active_start = (req.body.date_active_start) ? req.body.date_active_start : null;
    let date_active_end = (req.body.date_active_end) ? req.body.date_active_end : null;
    let is_seasonal = (req.body.date_active_start != null && req.body.date_active_end != null && req.body.date_active_start != '' && req.body.date_active_end != '') ? 't' : 'f';

    if (req.body.drink_id === null || req.body.drink_id === '') {

        let sql_str = "SELECT drink_id FROM \
                        (SELECT drink_id FROM Drink_menu \
                        UNION ALL SELECT drink_id FROM Drink_menu_archive) AS D \
                        ORDER BY drink_id DESC LIMIT 1;"
        db.raw(sql_str)
            .then((results) => {
                // console.log(results.rows);
                if (results.rows.length > 0) {
                    let temp_drink_id = parseInt(results.rows[0].drink_id) + 1;

                    let sql_insertion_str = "INSERT INTO Drink_menu\
                                            (drink_id, drink_name, drink_price, is_seasonal, date_added, alcoholic, drink_category) \
                                            VALUES(?, ?, ?, ?, NOW(), ?, ?)";
                    db.raw(sql_insertion_str, [temp_drink_id, drink_name, drink_price, is_seasonal, alcoholic, drink_category])
                        .then((results) => {
                            // console.log(results.rows);

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
                } else{
                    res.json(results.rows);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        let sql_str = "UPDATE Drink_menu \
                        SET drink_name=?, drink_price=?, drink_category=?, is_seasonal=?, alcoholic=? \
                        WHERE drink_id=?;"
        db.raw(sql_str, [drink_name, drink_price, drink_category, is_seasonal, alcoholic, drink_id])
            .then((results) => {
                // console.log(results.rows);

                sql_str = "SELECT drink_id FROM Seasonal_drinks WHERE drink_id=?";
                db.raw(sql_str, [drink_id])
                    .then((results) => {
                        // console.log(results.rows);

                        if (results.rows.length === 0 && is_seasonal === 't') {
                            //add
                            sql_str = "INSERT INTO Seasonal_drinks VALUES (?, ?, ?);";
                            db.raw(sql_str, [drink_id, date_active_start, date_active_end])
                                .then((results) => {
                                    // console.log(results.rows);
                                    res.json(results.rows);
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        } else if (results.rows.length > 0 && results.rows[0].drink_id != null && results.rows[0].drink_id != '' && results.rows[0].drink_id != undefined && is_seasonal === 'f') {
                            //delete
                            sql_str = "DELETE FROM Seasonal_drinks WHERE drink_id=?;";
                            db.raw(sql_str, [drink_id])
                                .then((results) => {
                                    // console.log(results.rows);
                                    res.json(results.rows);
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        } else if (results.rows.length > 0 && results.rows[0].drink_id != null && results.rows[0].drink_id != '' && results.rows[0].drink_id != undefined && is_seasonal === 't') {
                            //update
                            sql_str = "UPDATE Seasonal_drinks SET date_active_start=?, date_active_end=? WHERE drink_id=?;";
                            db.raw(sql_str, [date_active_start, date_active_end, drink_id])
                                .then((results) => {
                                    // console.log(results.rows);
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

            })
            .catch((error) => {
                console.log(error);
            });
    }

});


router.post('/getDrinkByDrinkId', (req, res, next) => {
    let drink_id = req.body.drink_id;
    let sql_str = "SELECT D.drink_id, D.drink_name, D.drink_price, D.alcoholic, D.drink_category, \
                    to_char(S.date_active_start, 'YYYY-MM-DD') AS date_active_start, \
                    to_char(S.date_active_end, 'YYYY-MM-DD') AS date_active_end \
                    FROM Drink_menu D \
                    LEFT JOIN Seasonal_drinks S ON D.drink_id=S.drink_id \
                    WHERE D.drink_id=? \
                    LIMIT 1;"

    db.raw(sql_str, [drink_id])
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});


module.exports = router;
