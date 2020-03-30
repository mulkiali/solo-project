const express = require("express");
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
  console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    if(req.isAuthenticated()){
    let queryText = `SELECT restaurants.id, restaurants.name, restaurants.description, restaurants.image, favorites.visited FROM restaurants
    JOIN favorites ON favorites.restaurant_id = restaurants.id
    JOIN "user" ON favorites.user_id = "user".id where favorites.user_id=${req.user.id}`;  
    pool.query(queryText)
    .then(results => res.send(results.rows))
    .catch(error => {
        console.log('Error making SELECT for results:', error);
        res.sendStatus(500);
    });
  }else
  res.sendStatus(403)
});

router.post("/", (req, res) => {
    const user = req.body.user
    const newFavorite = req.body.id
    console.log('from favorite POST', req.body.id);
    console.log('from favorite POST user', req.body.user);
    if(req.isAuthenticated()){
    let queryText = 'INSERT INTO "favorites" (user_id, restaurant_id) VALUES ($1, $2)';
    // console.log('in post addfavorite', newFavorite )
    pool.query(queryText, [user, newFavorite] )
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log("error in POST", error);
        res.sendStatus(500);
      });
    }else res.sendStatus(403)
});


router.put('/:id', (req, res) => {
    console.log('params', req.params.id)
    const queryText = `UPDATE "favorites" SET "visited" = ${req.body.visit} WHERE "restaurant_id" = ${req.params.id}`;
    pool.query(queryText).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in PUT ${error}`);
        res.sendStatus(500);
    })
});

router.delete('/:id', (req, res) => {
  let reqId = req.params.id;
  console.log('Delete request for id', reqId);
  let queryText = `DELETE FROM favorites where restaurant_id = $1`;
  pool.query(queryText, [reqId])
    .then((result) => {
      console.log('Item deleted');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${queryText}`, error);
      res.sendStatus(500); 
    })
})


module.exports = router;