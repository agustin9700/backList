var express = require('express');
var router = express.Router();
var {apiClanWar,apiClanWar2,apiClanWar3,apiClanWar4} = require('../controllers/index')


/* GET home page. */
router.get('/api',apiClanWar );
router.get('/api2',apiClanWar2 );
router.get('/api3',apiClanWar3 );
router.get('/api4',apiClanWar4 );


module.exports = router;
