// const session = require('express-session');
var express = require('express');
var router = express.Router();
var md5 = require('md5-node');
var logger = require('../lib/log4js').logger;
import loginUsersControl from  '../moudles/loginUsers/loginUsers.server.controllar'

// 用户登录
router.post('/',async function(req, res){
    const loginUser = await loginUsersControl.getUserByUsername(req.body.username)
    // logger.info('loginUser',loginUser[0])
    // logger.info('req.body',req.body)
    if ( !loginUser || loginUser.length == 0 || loginUser[0].password !== req.body.password){
        res.json({
            success:false,
            message:'账号或密码错误'
        })
    }else {
        req.session.userName = req.body.username; // 登录成功，设置 session
        res.json({
            message:'验证成功',
            user:loginUser[0],
            success:true
        });
    }
});

router.post('/password',async function(req, res){
    const loginUser = await loginUsersControl.getUserByUsername(req.body.username)
    // logger.info('loginUser',loginUser[0])
    // logger.info('req.body',req.body)
    if ( !loginUser || loginUser.length == 0 || loginUser[0].password !== req.body.password){
        res.json({
            success:false,
            message:'账号或密码错误'
        })
    }else {
        const result = await loginUsersControl.updatePassword(req.body.username,req.body.newpassword)
        if (result.ok){
            res.json({
                success: true,
                message:'更新成功！'
            })
        }else {
            res.json({
                success: false,
                message:'更新不成功！请重试！'
            })
        }
    }
});

module.exports = router;
