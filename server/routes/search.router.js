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
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let queryText = 'DELETE FROM restaurants WHERE id=$1;';
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

router.put('/:id', (req, res) => {
    const queryText = 'UPDATE "restaurants" WHERE restaurants.id= $1;'
    pool.query(queryText)
      .then( (response) => {
        res.sendStatus(200);
      })
      .catch( (error) => {
        console.log(`Error updating`, error);
        res.sendStatus(500);
      })
   })
   
   
module.exports = router;
