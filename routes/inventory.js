const express = require('express');
const db = require('../db')

const router = express.Router();

router.post('/sell', (req, res, next) => {
    res.send('sell');
});

router.post('/buy', (req, res, next) => {
    res.send('buy');
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
            console.error(error)
        });
});

router.get('/perishable', (req, res, next) => {
    res.send('perishable');
});

module.exports = router;
