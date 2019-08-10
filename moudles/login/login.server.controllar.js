import loginInfoModel from './login.server.service'
// import {userApis} from './user.server.api'
var logger = require('../../lib/log4js').logger;

const loginInfoControl={
    createLoginInfo:async (params)=>{
        try{
            const res = await loginInfoModel.create(params)
            logger.info('loginInfo res:'+JSON.stringify(res))
            return res
        }catch (e) {
            // console.error(e)
            logger.error(e)
        }
    },
}

    export default  loginInfoControl
