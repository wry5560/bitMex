var express = require('express');
var router = express.Router();
import orderControl from '../moudles/order/order.server.controllar'

/* GET users listing. */
router.get('/:username',async function(req, res, next) {
    console.log('111')
  const data=await orderControl.getOrder(req.params.username)
  res.send(data);
});


module.exports = router;
