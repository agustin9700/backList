var express = require('express');
var router = express.Router();
var {apiClanWar,apiClanWar2} = require('../controllers/index')


/* GET home page. */
router.get('/api',apiClanWar );
router.get('/api2',apiClanWar2 );

module.exports = router;
