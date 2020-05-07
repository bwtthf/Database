const express = require('express');
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

router.get('/perishable', (req, res, next) => {
    res.send('perishable');
});

module.exports = router;
