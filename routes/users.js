var express = require('express');
var router = express.Router();

import userControl from '../moudles/users/user.server.controllar'

/* GET users listing. param:username*/
router.get('/',async function(req, res, next) {
    const {username}=req.query
    if(username){
        const tmp=await userControl.getUserByUsername(username)
        delete tmp.data.apiKey
        res.send(tmp);
        console.log('username:'+username)
    }else{
        const data=await userControl.getUsers()
        res.send(data);
    }
});

/* GET accountInfo by userName listing. */
router.get('/info',async function(req, res, next) {
    const {username}=req.query
    console.log('username:'+username)
    if(!username){
        res.send({success:false,message:'No username'})
        return
    }
  const tmp=await userControl.getAccountInfo(username)
  res.send(tmp);
});
router.get('/wallet',async function(req, res, next) {
    const {username}=req.query
    console.log('username:'+username)
    if(!username){
        res.send({success:false,message:'No username'})
        return
    }
    const tmp=await userControl.getWallet(username)
    res.send(tmp);
});
router.get('/walletHistory',async function(req, res, next) {
    const {username}=req.query
    console.log('username:'+username)
    if(!username){
        res.send({success:false,message:'No username'})
        return
    }
    const tmp=await userControl.getWalletHistory(username)
    res.send(tmp);
});

module.exports = router;
