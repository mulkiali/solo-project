const express = require("express");
const router = express.Router();
const pool = require('../modules/pool');


router.get('/:id', (req, res) => {
    console.log('in get favorites id', req.params);
    const id = req.params.id
    const queryText = 'SELECT restaurants.name, restaurants.description, addresses.city, addresses.street, addresses.state, addresses.zip FROM restaurants JOIN addresses ON restaurants.id = addresses.restaurant_id WHERE restaurants.id = $1'  
    pool.query(queryText, [id] )
    .then(results => res.send(results.rows))
    .catch(error => {
        console.log('Error making SELECT for results:', error);
        res.sendStatus(500);
    });

});


router.post("/", (req, res) => {
    const favorites = req.body;
    newFavorite.id = nextId++;
    newFavorite.push(favorites);
    console.log('from favorite POST', req.body);
    const queryText = 'INSERT INTO favorites (user_id, restaurant_id) VALUES ($1, $2)';
    console.log('in post addfave',favorites)
    pool.query(queryText, [favorites])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log("error in POST", error);
        res.sendStatus(500);
      });
  });

module.exports = router;