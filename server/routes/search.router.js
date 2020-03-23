const express = require("express");
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
        pool.query(`select * from restaurants`)
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for results:', error);
            res.sendStatus(500);
        });
 
});

module.exports = router;
