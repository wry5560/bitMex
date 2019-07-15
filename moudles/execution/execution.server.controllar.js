import execution from './execution.server.service'
import {executionApis} from './execution.server.api'
import usersControl from '../users/user.server.controllar'

const executionControl={
    getTradeHistory:async (userName,options)=>{
        // console.log(userName)
        const apiKey=await usersControl.getUserApiKey(userName)
        console.log('apiKey'+JSON.stringify(apiKey))
        if(apiKey.success){
            // console.log(userApis)
            // console.log('apikey:'+res.data)
            const res=await executionApis.reqTradeHistory(apiKey.data,options)
            console.log('TradeHistory:'+JSON.stringify(res))
            return res
        }
    },
}

export default  executionControl
