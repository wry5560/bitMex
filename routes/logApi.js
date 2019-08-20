var logger = require('../lib/log4js').celveLogger;
import websocketlogControl from '../moudles/logs/websocketlogs.server.controllar'

var express = require('express');
var router = express.Router();

router.post('/',async function(req, res, next) {
    console.log(req.body)
    logger.info(req.body)
});

router.post('/websocket',async function(req, res, next) {
    // console.log(req.body)
    const {message}=req.body
    try{
        const data = await websocketlogControl.createWebsocketlog(message)
        res.send({data,success:true});
    }catch(e) {
        res.send({message:e,success:false});
    }
    logger.info(req.body)
});

module.exports = router;