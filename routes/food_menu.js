const express = require('express');
const db = require('../db')

const router = express.Router();

router.get('/getBestSeller', (req, res, next) => {

    sql_str = "SELECT food_name \
    FROM Food_sales AS FS, Food_menu as FM \
    WHERE FS.food_id = FM.food_id \
    ORDER BY quantity DESC \
    LIMIT 1;"

    db.raw(sql_str)
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});



module.exports = router;