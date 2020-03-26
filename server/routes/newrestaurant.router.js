const express = require("express");
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const newRestaurant = req.body;
    const queryText = `insert into restaurants ("name", "description") values ($1, $2);`;
    const queryValues = [
        newRestaurant.name,
        newRestaurant.description
    ];
    pool.query(queryText, queryValues)
      .then(() => {
        res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing insert restaurant query', err);
        console.log(newRestaurant.name)
        res.sendStatus(500);
      });
  });

  router.post('/', (req, res) => {
    const newRestaurantAddress = req.body;
    const queryText = `insert into restaurants ("street", "city", "state", "zip") values ($1, $2, $3. $4);`;
    const queryValues = [
        newRestaurantAddress.street,
        newRestaurantAddress.city,
        newRestaurantAddress.state,
        newRestaurantAddress.zip,
    ];
    pool.query(queryText, queryValues)
      .then(() => {
        res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing insert restaurant query', err);
        console.log(newRestaurant.name)
        res.sendStatus(500);
      });
  });

  module.exports = router;