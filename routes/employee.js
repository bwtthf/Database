const express = require('express');
const db = require('../db')

const router = express.Router();

router.get('/employee1', (req, res, next) => {
    res.send('employee1');
});

module.exports = router;