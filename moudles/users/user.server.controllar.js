import accountsModel from './user.server.service'
import {userApis} from './user.server.api'
var logger = require('../../lib/log4js').logger;

const usersControl={
    getUsers:async ()=>{
        try{
            const allUsers = await accountsModel.find()
            logger.info('getAll accounts:'+JSON.stringify(allUsers))
            return allUsers
        }catch (e) {
            // console.error(e)
            logger.error(e)
        }
    },
    getUserByUsername:async (userName)=>{
            const user= await accountsModel.find({userName:userName})
            logger.info('get  accounts:'+JSON.stringify(user))
            if(!user[0]){
                return {
                    status:'error',
                    message:'User not found!'
                }
            }
            return{
                status:'success',
                data:user[0]
            }
    },
    getUserApiKey:async (userName)=>{
            const user= await accountsModel.find({userName:userName})
            logger.info('get  account:'+JSON.stringify(user))
            if(!user[0]){
                return{
                    success:false,
                    message:'User not found!'
                }
            }
            return{
                success:true,
                data:user[0].apiKey
            }
    },
    getAccountInfo:async (userName)=>{
        const res=await usersControl.getUserApiKey(userName)
        if(res.success){
            // console.log(userApis)
            // console.log('apikey:'+res.data)
            const account=await userApis.reqAccount(res.data)
            // console.log('account:'+JSON.stringify(account))
            return account
        }
    },
    getWallet:async (userName)=>{
        const res=await usersControl.getUserApiKey(userName)
        if(res.success){
            // console.log(userApis)
            // console.log('apikey:'+res.data)
            const wallet=await userApis.reqWallet(res.data)
            console.log('wallet:'+JSON.stringify(wallet))
            return wallet
        }
    },
    getWalletHistory:async (userName)=>{
        const res=await usersControl.getUserApiKey(userName)
        if(res.success){
            // console.log(userApis)
            // console.log('apikey:'+res.data)
            const walletHistory=await userApis.reqWalletHistory(res.data)
            console.log('walletHistory:'+JSON.stringify(walletHistory))
            return walletHistory
        }
    }
}

    export default  usersControl
