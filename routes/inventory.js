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
    db.raw('SELECT * FROM Inventory I LEFT JOIN Non_perishables Np ON I.item_id=Np.item_id;')
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
