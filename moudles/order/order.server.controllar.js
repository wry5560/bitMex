import order from './order.server.service'
import {orderApis} from './order.server.api'
import usersControl from '../users/user.server.controllar'

const orderControl={
    getOrder:async (userName,options)=>{
        // console.log(userName)
        const apiKey=await usersControl.getUserApiKey(userName)
        console.log('apiKey'+JSON.stringify(apiKey))
        if(apiKey.success){
            // console.log(userApis)
            // console.log('apikey:'+res.data)
            const res=await orderApis.reqOreder(apiKey.data,options)
            console.log('order:'+JSON.stringify(res))
            return res
        }
    },

    updateOrder:async (userName,options)=>{
        // console.log(userName)
        const apiKey=await usersControl.getUserApiKey(userName)
        console.log('apiKey'+JSON.stringify(apiKey))
        if(apiKey.success){
            // console.log(userApis)
            // console.log('apikey:'+res.data)
            const res=await orderApis.updateOrder(apiKey.data,options)
            console.log('update res:'+JSON.stringify(res))
            return res
        }
    },

    createOrder:async (userName,options)=>{
        // console.log(userName)
        const apiKey=await usersControl.getUserApiKey(userName)
        console.log('apiKey'+JSON.stringify(apiKey))
        if(apiKey.success){
            // console.log(userApis)
            // console.log('apikey:'+res.data)
            const res=await orderApis.createOrder(apiKey.data,options)
            console.log('create res:'+JSON.stringify(res))
            return res
        }
    },
    createMultiOrders:async (userName,options)=>{
        // console.log(userName)
        const apiKey=await usersControl.getUserApiKey(userName)
        console.log('apiKey'+JSON.stringify(apiKey))
        if(apiKey.success){
            // console.log(userApis)
            // console.log('apikey:'+res.data)
            const res=await orderApis.createMultiOrders(apiKey.data,options)
            console.log('create res:'+JSON.stringify(res))
            return res
        }
    },
    delOrder:async (userName,options)=>{
        // console.log(userName)
        const apiKey=await usersControl.getUserApiKey(userName)
        console.log('apiKey'+JSON.stringify(apiKey))
        if(apiKey.success){
            // console.log(userApis)
            // console.log('apikey:'+res.data)
            const res=await orderApis.delOrder(apiKey.data,options)
            console.log('delete res:'+JSON.stringify(res))
            return res
        }
    },

    delAllOrder:async (userName,options)=>{
        // console.log(userName)
        const apiKey=await usersControl.getUserApiKey(userName)
        console.log('apiKey'+JSON.stringify(apiKey))
        if(apiKey.success){
            // console.log(userApis)
            // console.log('apikey:'+res.data)
            const res=await orderApis.delOrderAll(apiKey.data,options)
            console.log('delete all res:'+JSON.stringify(res))
            return res
        }
    },

    cancelAllAfter:async (userName,options)=>{
        // console.log(userName)
        const apiKey=await usersControl.getUserApiKey(userName)
        console.log('apiKey'+JSON.stringify(apiKey))
        if(apiKey.success){
            // console.log(userApis)
            // console.log('apikey:'+res.data)
            const res=await orderApis.cancelAllAfter(apiKey.data,options)
            console.log('cancelAllAfter res:'+JSON.stringify(res))
            return res
        }
    },

    closePosition:async (userName,options)=>{
        // console.log(userName)
        const apiKey=await usersControl.getUserApiKey(userName)
        console.log('apiKey'+JSON.stringify(apiKey))
        if(apiKey.success){
            // console.log(userApis)
            // console.log('apikey:'+res.data)
            const res=await orderApis.closePosition(apiKey.data,options)
            console.log('closePosition res:'+JSON.stringify(res))
            return res
        }
    },

}

export default  orderControl