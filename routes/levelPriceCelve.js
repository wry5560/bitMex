// import levelPriceCelveControl from "../moudles/levelPriceCelve/levelPriceCelve.server.controllar";

var express = require('express');
var router = express.Router();
import levelPriceCelveControl from '../moudles/levelPriceCelve/levelPriceCelve.server.controllar'

/* GET users listing. */
router.get('/',async function(req, res, next) {
    // console.log('get levelPriceCelve')
    if( req.query.type ==='running' ){
        try{
            const data = await levelPriceCelveControl.getAllRunning()
            res.send({data, success:true});
            return
        }catch (e) {
            res.send({message:e,success:false});
            return
        }
    }
    try{
        const data = await levelPriceCelveControl.getAll()
        res.send({data, success:true});
        return
    }catch (e) {
        res.send({message:e,success:false});
        return
    }
    return
});

router.post('/',async function(req, res, next) {
    // console.log('poet levelPriceCelve')
    console.log(req.body)
    const {postType,_id,...options}=req.body
    console.log('postType:'+postType)
    console.log('options:'+JSON.stringify(options))
    let data=null
    switch (postType) {
        case 'insert':
            try{
                data=await levelPriceCelveControl.insertCelve(options)
                res.send({data,success:true});
            }catch(e) {
            res.send({message:e,success:false});
            }
            break
        case 'update':
            try{
            data=await levelPriceCelveControl.updateCelve(_id,options)
            res.send({data,success:true});
            }catch(e) {
            res.send({message:e,success:false});
            }
            break
        case 'remove':
            try{
                data=await levelPriceCelveControl.removeCelve(_id)
                res.send({data,success:true});
            }catch(e) {
                res.send({message:e,success:false});
            }
            break
        case 'stop':
            try{
                data=await levelPriceCelveControl.stopCelve(_id,options)
                res.send({data,success:true});
            }catch(e) {
                res.send({message:e,success:false});
            }
            break
        default:
            break
    }
});
module.exports = router;
