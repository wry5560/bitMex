var logger = require('../lib/log4js').celveLogger;

var express = require('express');
var router = express.Router();

router.post('/',async function(req, res, next) {
    console.log(req.body)
    logger.info(req.body)
});
module.exports = router;