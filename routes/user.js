const express = require('express');
const router = express.Router();

router.post('/registration', (req, res, next) => {
    res.send('REGISTER');
});

router.post('/login', (req, res, next) => {
    res.send('LOGIN');
});

router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

module.exports = router;
