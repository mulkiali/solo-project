const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.get('/:id', (req, res) => {
    // return selected genres
    console.log('in get id', req.params);
    const id = req.params.id
    const queryText = 'SELECT restaurants.name, restaurants.description, addresses.street, addresses.city, addresses.state, addresses.zip FROM restaurants JOIN addresses on addresses.restaurant_id= restaurants.id  WHERE restaurants.id = $1;';
    pool.query(queryText, [id])
        .then( (response) => {
            res.send(response.rows);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;