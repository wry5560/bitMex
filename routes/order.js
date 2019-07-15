var express = require('express');
var router = express.Router();
import orderControl from '../moudles/order/order.server.controllar'

/* GET users listing. */
router.get('/',async function(req, res, next) {
    console.log('get order')
    if(!req.query.username)res.send({success:false,message:'No username'})
  const data=await orderControl.getOrder(req.query.username)
  res.send(data);
});

router.post('/',async function(req, res, next) {
    console.log('poet order')
    console.log(req.body)
    const {username,postType,...options}=req.body
    console.log('username:'+username)
    console.log('postType:'+postType)
    console.log('options:'+JSON.stringify(options))
    if(!username){
        res.send({success:false,message:'No username'})
        return
    }
    let data=null

    switch (postType) {
        case 'create':
            data=await orderControl.createOrder(username,options)
            res.send(data);
            break
        case 'update':
            data=await orderControl.updateOrder(username,options)
            res.send(data);
            break
        case 'delete':
            data=await orderControl.delOrder(username,options)
            res.send(data);
            break
        case 'delete all':
            data=await orderControl.delAllOrder(username,options)
            res.send(data);
            break
        case 'cancelAllAfter':
            data=await orderControl.cancelAllAfter(username,options)
            res.send(data);
            break
        case 'closePosition':
            data=await orderControl.closePosition(username,options)
            res.send(data);
            break
        default:
            data=await orderControl.createOrder(username,options)
            res.send(data);
            break
    }
});
module.exports = router;
