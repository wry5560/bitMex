import order from './order.server.service'
import {orderApis} from './order.server.api'
import usersControl from '../users/user.server.controllar'

const orderControl={
    getOrder:async (userName,options)=>{
        console.log(userName)
        const apiKey=await usersControl.getUserApiKey(userName)
        console.log(JSON.stringify(apiKey))
        if(apiKey.success){
            // console.log(userApis)
            // console.log('apikey:'+res.data)

            const order=await orderApis.reqOreder(apiKey.data,options)
            console.log('order:'+JSON.stringify(order))
            return order
        }
    },
}

export default  orderControl