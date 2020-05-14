const express = require('express');
const db = require('../db')

const router = express.Router();



router.post('/addOrUpdateItemToSales', (req, res, next) => {
    console.log(req.body);

    let receipt_id = req.body.receipt_id;
    let employee_id = req.body.employee_id;
    let time_stamp = (req.body.time_stamp) ? req.body.time_stamp : null;
    let total_sales = req.body.total_sales;
    if (req.body.receipt_id != null || req.body.receipt_id != '') {

        let sql_str = "INSERT INTO Sales\
        (receipt_id, employee_id, time_stamp, total_sales, date) \
        VALUES(?, ?, NOW(), ?, NOW())";
        db.raw(sql_str,[receipt_id,employee_id,total_sales])
            .then((results) => {
                // console.log(results.rows);
                res.json(results.rows);
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        let sql_str = "UPDATE Sales \
                        SET employee_id=?, total_sales=?\
                        WHERE receipt_id=?;"
        db.raw(sql_str, [employee_id, total_sales, receipt_id])
            .catch((error) => {
                console.log(error);
            });
    }

});


router.post('/getSalesBySalesId', (req, res, next) => {
    let sales_id = req.body.sales_id;
    let sql_str = "SELECT S.receipt_id, S.employee_id, S.total_sales, \
                    to_char(S.time_stamp, 'YYYY-MM-DD') AS time_stamp \
                    FROM Sales S \
                    WHERE S.receipt_id=? \
                    LIMIT 1;"

    db.raw(sql_str, [sales_id])
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});


module.exports = router;
