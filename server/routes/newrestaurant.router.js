const express = require("express");
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const newRestaurant = req.body;
    const queryText = `insert into restaurants (name, description) values ($1, $2);`;
    const queryValues = [
        newRestaurant.name,
        newRestaurant.description
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing insert restaurant query', err);
        res.sendStatus(500);
      });
  });

  module.exports = router;