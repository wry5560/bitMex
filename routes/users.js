var express = require('express');
var router = express.Router();
import userControl from '../moudles/users/user.server.controllar'

/* GET users listing. */
router.get('/',async function(req, res, next) {
  const data=await userControl.getUsers()
  res.send(data);
});

/* GET user by userName listing. */
router.get('/:userName',async function(req, res, next) {
  console.log(req.params.userName)
  const tmp=await userControl.getUserByUsername(req.params.userName)
  delete tmp.data.apiKey
  res.send(tmp);
});

/* GET accountInfo by userName listing. */
router.get('/:userName/info',async function(req, res, next) {
  console.log('/:userName/info')
  const tmp=await userControl.getAccountInfo(req.params.userName)
  res.send(tmp);
});
router.get('/:userName/wallet',async function(req, res, next) {
    console.log('/:userName/wallet')
    const tmp=await userControl.getWallet(req.params.userName)
    res.send(tmp);
});

module.exports = router;
