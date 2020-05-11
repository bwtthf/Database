const express = require('express');
const db = require('../db')

const router = express.Router();


router.get('/getAllNonPerishableItems', (req, res, next) => {

    sql_str = "SELECT Np.item_id, I.total_price, \
                to_char(I.date_ordered, 'YYYY-MM-DD') AS date_ordered, \
                to_char(I.date_received, 'YYYY-MM-DD') AS date_received, \
                Np.item, Np.condition \
                FROM Non_perishables Np LEFT JOIN Inventory I ON Np.item_id=I.item_id \
                ORDER BY date_ordered DESC;"

    db.raw(sql_str)
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});


router.post('/getOneNonPerishableItem', (req, res, next) => {
    // console.log(req.body);
    sql_str = "SELECT I.item_id, I.total_price, \
                to_char(I.date_ordered, 'YYYY-MM-DD') AS date_ordered, \
                to_char(I.date_received, 'YYYY-MM-DD') AS date_received, \
                Np.item, Np.condition \
                FROM Inventory I LEFT JOIN Non_perishables Np ON I.item_id=Np.item_id \
                WHERE I.item_id=?;"
    
    db.raw(sql_str, [req.body.item_id])
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
            res.json({});
        });
});


router.post('/postOneNonPerishableItem', (req, res, next) => {
    // console.log(req);
    if (req.body.item_id === ''){

        sql_str = "INSERT INTO Inventory(total_price, date_ordered, date_received) VALUES (?, ?, ?)"

        item = req.body.item;
        condition = (req.body.condition) ? req.body.condition : null;
        date_ordered = (req.body.date_ordered) ? req.body.date_ordered.year + '-' + req.body.date_ordered.month + '-' + req.body.date_ordered.day : null;
        date_received = (req.body.date_received) ? req.body.date_received.year + '-' + req.body.date_received.month + '-' + req.body.date_received.day : null;
        
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


router.post('/deleteOneNonPerishableItem', (req, res, next) => {
    // console.log(req);
    item_id = req.body.item_id;

    db.raw("DELETE FROM non_perishables WHERE item_id = ?;", [item_id])
        .then((results) => {

            db.raw("DELETE FROM Inventory WHERE item_id = ?;", [item_id])
                .then((results) => {
                    res.json(results);
                }).catch((error) => {
                    console.log(error);
                    res.json({});
                });

        }).catch((error) => {
            console.log(error);
            res.json({});
        });
});


router.post('/updateOneNonPerishableItem', (req, res, next) => {
    // console.log(req);
    item_id = req.body.item_id;
    total_price = req.body.total_price;
    date_ordered = (req.body.date_ordered) ? req.body.date_ordered.year + '-' + req.body.date_ordered.month + '-' + req.body.date_ordered.day : null;
    date_received = (req.body.date_received) ? req.body.date_received.year + '-' + req.body.date_received.month + '-' + req.body.date_received.day : null;
    item = req.body.item;
    condition = (req.body.condition) ? req.body.condition : null;

    sql_str_1 = "UPDATE Non_perishables \
                    SET item = ?, condition = ? \
                    WHERE item_id = ?";

    sql_str_2 = "UPDATE Inventory \
                    SET total_price = ?, date_ordered = ?, date_received = ? \
                    WHERE item_id = ?";

    db.raw(sql_str_1, [item, condition, item_id]).then((results) => {

        db.raw(sql_str_2, [total_price, date_ordered, date_received, item_id]).then((results) => {
            res.json(results);
        }).catch((error) => {
            console.log(error);
            res.json({});
        });

    }).catch((error) => {
        console.log(error);
        res.json({});
    });
});


router.post('/queryNonPerishableItems', (req, res, next) => {
    // console.log(req.body);

    if(req.body.item != '' && req.body.date_ordered_start != '' && req.body.date_ordered_stop != ''){
        sql_str = "SELECT Np.item_id, I.total_price, \
                    to_char(I.date_ordered, 'YYYY-MM-DD') AS date_ordered, \
                    to_char(I.date_received, 'YYYY-MM-DD') AS date_received, \
                    Np.item, Np.condition \
                    FROM Non_perishables Np LEFT JOIN Inventory I ON Np.item_id=I.item_id \
                    WHERE Np.item LIKE ? AND (date_ordered between ? AND ?) \
                    ORDER BY date_ordered DESC;"
        db.raw(sql_str, ['%'+req.body.item+'%', req.body.date_ordered_start, req.body.date_ordered_stop])
            .then((results) => {
                // console.log(results.rows);
                res.json(results.rows);
            })
            .catch((error) => {
                console.log(error);
            });
    } else if(req.body.date_ordered_start != '' && req.body.date_ordered_stop != ''){
        sql_str = "SELECT Np.item_id, I.total_price, \
                    to_char(I.date_ordered, 'YYYY-MM-DD') AS date_ordered, \
                    to_char(I.date_received, 'YYYY-MM-DD') AS date_received, \
                    Np.item, Np.condition \
                    FROM Non_perishables Np LEFT JOIN Inventory I ON Np.item_id=I.item_id \
                    WHERE date_ordered between ? AND ? \
                    ORDER BY date_ordered DESC;"
        db.raw(sql_str, [req.body.date_ordered_start, req.body.date_ordered_stop])
            .then((results) => {
                // console.log(results.rows);
                res.json(results.rows);
            })
            .catch((error) => {
                console.log(error);
            });
    } else if(req.body.item != ''){
        sql_str = "SELECT Np.item_id, I.total_price, \
                    to_char(I.date_ordered, 'YYYY-MM-DD') AS date_ordered, \
                    to_char(I.date_received, 'YYYY-MM-DD') AS date_received, \
                    Np.item, Np.condition \
                    FROM Non_perishables Np LEFT JOIN Inventory I ON Np.item_id=I.item_id \
                    WHERE Np.item LIKE ? \
                    ORDER BY date_ordered DESC;"
        db.raw(sql_str, ['%'+req.body.item+'%'])
            .then((results) => {
                // console.log(results.rows);
                res.json(results.rows);
            })
            .catch((error) => {
                console.log(error);
            });
    }else{
        sql_str = "SELECT Np.item_id, I.total_price, \
                    to_char(I.date_ordered, 'YYYY-MM-DD') AS date_ordered, \
                    to_char(I.date_received, 'YYYY-MM-DD') AS date_received, \
                    Np.item, Np.condition \
                    FROM Non_perishables Np LEFT JOIN Inventory I ON Np.item_id=I.item_id \
                    ORDER BY date_ordered DESC;"
        db.raw(sql_str)
            .then((results) => {
                // console.log(results.rows);
                res.json(results.rows);
            })
            .catch((error) => {
                console.log(error);
            });
    }

});


module.exports = router;
