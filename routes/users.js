var express = require('express');
var router = express.Router();

import userControl from '../moudles/users/user.server.controllar'

/* GET users listing. param:username*/
router.get('/',async function(req, res, next) {
    const {username}=req.body
    if(username){
        const tmp=await userControl.getUserByUsername(req.params.userName)
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
    const {username}=req.body
    console.log('username:'+username)
    if(!username){
        res.send({success:false,message:'No username'})
        return
    }
  const tmp=await userControl.getAccountInfo(username)
  res.send(tmp);
});
router.get('/wallet',async function(req, res, next) {
    const {username}=req.body
    console.log('username:'+username)
    if(!username){
        res.send({success:false,message:'No username'})
        return
    }
    const tmp=await userControl.getWallet(username)
    res.send(tmp);
});

module.exports = router;
