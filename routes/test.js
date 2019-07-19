var express = require('express');
var router = express.Router();

/* GET users listing. param:username*/
router.get('/',async function(req, res, next) {
    console.log('global.test',global.test)
    global.test='hahahhaha'
        res.send(global.test);
});


module.exports = router;
