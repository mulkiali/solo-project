const express = require("express");
const router = express.Router();
const pool = require('../modules/pool');


router.get('/:id', (req, res) => {
    console.log('in get id', req.params);
    const id = req.params.id
    const queryText = `SELECT restaurants.name, restaurants.description, addresses.city, addresses.street, addresses.state, addresses.zip FROM restaurants JOIN addresses ON restaurants.id = addresses.restaurant_id
    `  
    pool.query(queryText, [id] )
    .then(response => res.send(response.rows))
    .catch(error => {
        console.log('Error making SELECT for results:', error);
        res.sendStatus(500);
    });

});


router.post("/", (req, res) => {
    const addFavorite = req.body;
    console.log('from favorite POST', req.body);
    
    const queryText = `INSERT INTO favorites (user_id, restaurant_id) VALUES ($1, $2)`;
    pool
      .query(queryText, [addFavorite])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log("error in POST", error);
        res.sendStatus(500);
      });
  });

module.exports = router;