import loginUsersModel from './loginUsers.server.service'
// import {userApis} from './user.server.api'
var logger = require('../../lib/log4js').logger;

const loginUsersControl={
    getLoginUsers:async ()=>{
        try{
            const allUsers = await loginUsersModel.find()
            logger.info('getAll LoginUsers:'+JSON.stringify(allUsers))
            return allUsers
        }catch (e) {
            // console.error(e)
            logger.error(e)
        }
    },
    getUserByUsername:async (userName)=>{
            const user= await loginUsersModel.find({userName:userName})
            logger.info('get  LoginUser:'+JSON.stringify(user))
            return user
            // if(!user[0]){
            //     return {
            //         status:'error',
            //         message:'User not found!'
            //     }
            // }
            // return{
            //     status:'success',
            //     data:user[0]
            // }
    },
    updatePassword:async (userName, password)=>{
        const res= await loginUsersModel.update({userName:userName},{password:password})
        logger.info('update  password:'+JSON.stringify(res))
        return res
        // if(!user[0]){
        //     return {
        //         status:'error',
        //         message:'User not found!'
        //     }
        // }
        // return{
        //     status:'success',
        //     data:user[0]
        // }
    },
}

    export default  loginUsersControl
