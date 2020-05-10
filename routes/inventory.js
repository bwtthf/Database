const express = require('express');
const db = require('../db')

const router = express.Router();

router.post('/sell', (req, res, next) => {
    res.send('sell');
});

router.post('/postOneNonPerishableItem', (req, res, next) => {
    console.log(req);
    if (req.body.item_id === ''){

        sql_str = "INSERT INTO Inventory(total_price, date_ordered, date_received) VALUES (?, ?, ?)"

        item = req.body.item;
        condition = req.body.condition;
        date_ordered = req.body.date_ordered.year + '-' + req.body.date_ordered.month + '-' + req.body.date_ordered.day;
        date_received = req.body.date_received.year + '-' + req.body.date_received.month + '-' + req.body.date_received.day;
        
        db.raw(sql_str, [req.body.total_price, date_ordered, date_received])
            .then((results) => {

                db.raw('SELECT item_id FROM Inventory ORDER BY item_id DESC LIMIT 1;').then((item_id) => {

                    sql_str = "INSERT INTO non_perishables(item_id, item, condition) VALUES (?, ?, ?)"

                    db.raw(sql_str, [item_id.rows[0].item_id, item, condition]).then((results) => {
                        res.json(results);
                    }).catch((error) => {
                        console.log(error);
                        res.json({});
                    });

                }).catch((error) => {
                    console.log(error);
                    res.json({});
                });

            }).catch((error) => {
                console.log(error);
                res.json({});
            });
        
    } else{
        res.json({});
    }
});

router.get('/non_perishable', (req, res, next) => {
    res.send('non_perishable');
});

router.get('/getAllNonPerishable', (req, res, next) => {

    sql_str = "SELECT I.item_id, I.total_price, \
                to_char(I.date_ordered, 'YYYY-MM-DD') AS date_ordered, \
                to_char(I.date_received, 'YYYY-MM-DD') AS date_received, \
                Np.item, Np.condition \
                FROM Inventory I LEFT JOIN Non_perishables Np ON I.item_id=Np.item_id;"

    db.raw(sql_str)
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error)
        });
});

router.get('/perishable', (req, res, next) => {
    res.send('perishable');
});

module.exports = router;
