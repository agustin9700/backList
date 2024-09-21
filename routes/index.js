var express = require('express');
var router = express.Router();
var {apiClanWar,apiClanWar2,apiClanWar3} = require('../controllers/index')


/* GET home page. */
router.get('/api',apiClanWar );
router.get('/api2',apiClanWar2 );
router.get('/api3',apiClanWar3 );


module.exports = router;
