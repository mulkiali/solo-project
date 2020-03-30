const express = require("express");
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
  console.log('req.user:', req.user);
  console.log('is authenticated?', req.isAuthenticated());
  if(req.isAuthenticated()){
    let queryText = 'select * from restaurants'
        pool.query(queryText)
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for results:', error);
            res.sendStatus(500);
        });
      }else res.sendStatus(403);
 
});

// router.delete('/:id', (req, res) => {
//     let reqId = req.params.id;
//     console.log('Delete request for id', reqId);
//     let queryText = `DELETE FROM restaurants where id = $1`;
//     pool.query(queryText, [reqId])
//       .then((result) => {
//         console.log('Item deleted');
//         res.sendStatus(200);
//       })
//       .catch((error) => {
//         console.log(`Error making database query ${queryText}`, error);
//         res.sendStatus(500); 
//       })
// })


   
module.exports = router;
