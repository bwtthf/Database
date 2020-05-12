const express = require('express');
const db = require('../db')

const router = express.Router();


router.post('/queryPerishableAndNonPerishableItems', (req, res, next) => {

    if (JSON.stringify(req.body) != '{}') {
        if (req.body.date_ordered_start != '' && req.body.date_ordered_stop != '') {
            sql_str = "SELECT SUM(I.total_price) AS total_price, \
                        EXTRACT(YEAR FROM I.date_ordered) AS year \
                        FROM Inventory I \
                        WHERE I.date_ordered BETWEEN ? AND ? \
                        GROUP BY year \
                        ORDER BY year;"
            db.raw(sql_str, [req.body.date_ordered_start, req.body.date_ordered_stop])
                .then((results) => {
                    res.json(results.rows);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            sql_str = "SELECT SUM(I.total_price) AS total_price, \
                        EXTRACT(YEAR FROM I.date_ordered) AS year \
                        FROM Inventory I \
                        GROUP BY year \
                        ORDER BY year;"
            db.raw(sql_str)
                .then((results) => {
                    res.json(results.rows);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    } else {
        sql_str = "SELECT SUM(I.total_price) AS total_price, \
                    EXTRACT(YEAR FROM I.date_ordered) AS year \
                    FROM Inventory I \
                    GROUP BY year \
                    ORDER BY year;"
        db.raw(sql_str)
            .then((results) => {
                res.json(results.rows);
            })
            .catch((error) => {
                console.log(error);
            });
    }

});

router.post('/queryPerishableItems', (req, res, next) => {

    if (JSON.stringify(req.body) != '{}') {
        if (req.body.date_ordered_start != '' && req.body.date_ordered_stop != '') {
            sql_str = "SELECT SUM(I.total_price) AS total_price, \
                        EXTRACT(YEAR FROM I.date_ordered) AS year, EXTRACT(MONTH FROM I.date_ordered) AS month \
                        FROM Perishables P \
                        LEFT JOIN Inventory I ON P.item_id=I.item_id \
                        WHERE I.date_ordered BETWEEN ? AND ? \
                        GROUP BY year, month \
                        ORDER BY year, month;"
            db.raw(sql_str, [req.body.date_ordered_start, req.body.date_ordered_stop])
                .then((results) => {
                    res.json(results.rows);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            sql_str = "SELECT SUM(I.total_price) AS total_price, \
                        EXTRACT(YEAR FROM I.date_ordered) AS year, EXTRACT(MONTH FROM I.date_ordered) AS month \
                        FROM Perishables P \
                        LEFT JOIN Inventory I ON P.item_id=I.item_id \
                        GROUP BY year, month \
                        ORDER BY year, month;"
            db.raw(sql_str)
                .then((results) => {
                    res.json(results.rows);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    } else {
        sql_str = "SELECT SUM(I.total_price) AS total_price, \
                    EXTRACT(YEAR FROM I.date_ordered) AS year, EXTRACT(MONTH FROM I.date_ordered) AS month \
                    FROM Perishables P \
                    LEFT JOIN Inventory I ON P.item_id=I.item_id \
                    GROUP BY year, month \
                    ORDER BY year, month;"
        db.raw(sql_str)
            .then((results) => {
                res.json(results.rows);
            })
            .catch((error) => {
                console.log(error);
            });
    }

});

router.post('/queryNonPerishableItems', (req, res, next) => {

    if (JSON.stringify(req.body) != '{}') {
        if (req.body.date_ordered_start != '' && req.body.date_ordered_stop != '') {
            sql_str = "SELECT SUM(I.total_price) AS total_price, \
                        EXTRACT(YEAR FROM I.date_ordered) AS year, EXTRACT(MONTH FROM I.date_ordered) AS month \
                        FROM Non_perishables Np \
                        LEFT JOIN Inventory I ON Np.item_id=I.item_id \
                        WHERE I.date_ordered BETWEEN ? AND ? \
                        GROUP BY year, month \
                        ORDER BY year, month;"
            db.raw(sql_str, [req.body.date_ordered_start, req.body.date_ordered_stop])
                .then((results) => {
                    res.json(results.rows);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            sql_str = "SELECT SUM(I.total_price) AS total_price, \
                        EXTRACT(YEAR FROM I.date_ordered) AS year, EXTRACT(MONTH FROM I.date_ordered) AS month \
                        FROM Non_perishables Np \
                        LEFT JOIN Inventory I ON Np.item_id=I.item_id \
                        GROUP BY year, month \
                        ORDER BY year, month;"
            db.raw(sql_str)
                .then((results) => {
                    res.json(results.rows);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    } else {
        sql_str = "SELECT SUM(I.total_price) AS total_price, \
                    EXTRACT(YEAR FROM I.date_ordered) AS year, EXTRACT(MONTH FROM I.date_ordered) AS month \
                    FROM Non_perishables Np \
                    LEFT JOIN Inventory I ON Np.item_id=I.item_id \
                    GROUP BY year, month \
                    ORDER BY year, month;"
        db.raw(sql_str)
            .then((results) => {
                res.json(results.rows);
            })
            .catch((error) => {
                console.log(error);
            });
    }
});


module.exports = router;
