var express = require('express');
var router = express.Router();

import executionControl from '../moudles/execution/execution.server.controllar'

/* GET users listing. param:username*/
router.get('/tradeHistory',async function(req, res, next) {
    const {username}=req.query
    if(username){
        const tmp=await executionControl.getTradeHistory(username)
        res.send(tmp);
        console.log('username:'+username)
    }else{

        res.send(data);
    }
});

/* GET accountInfo by userName listing. */

module.exports = router;
