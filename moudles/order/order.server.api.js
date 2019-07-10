import { axios } from '../../lib/request'
import crypto from 'crypto'
import Qs from 'qs'

const reqOreder= async function (apiKey,options) {
    // console.log(apiKey)
    const {key,apiSecret}=apiKey[0]
    // console.log(key)
    const verb = 'GET'
    const params={
        symbol:'XBTUSD',
        filter:{},
        columns:[],
        count:100,
        reverse:true,
        startTime:'',
        endTime:'',
        ...options
    }
    const path = '/api/v1/order'+'?'+Qs.stringify(params)
    const expires = Math.round(new Date().getTime() / 1000) + 60          // 1 min in the future
    const data =''
    const postData=JSON.stringify(data)
    console.log(verb + path + expires + data)
    const signature = crypto.createHmac('sha256', apiSecret).update(verb + path + expires + data).digest('hex');

    const headers = {
        'content-type' : 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'api-expires': expires,
        'api-key': key,
        'api-signature': signature
    }

    const requestOptions = {
        headers: headers,
        // url:'https://www.bitmex.com'+path,
        url:'https://testnet.bitmex.com'+path,
        // url:'https://www.baidu.com',
        method: 'GET',
        body:postData
    };
    const res=await axios(requestOptions)

    return res
}

const updateOrder= async function (apiKey,options) {
    // console.log(apiKey)
    const {key,apiSecret}=apiKey[0]
    // console.log(key)
    const verb = 'PUT'
    const params={
        symbol:'XBTUSD',
        filter:{},
        columns:[],
        count:100,
        reverse:true,
        startTime:'',
        endTime:'',
        ...options
    }
    const path = '/api/v1/order'
    const expires = Math.round(new Date().getTime() / 1000) + 60          // 1 min in the future
    const data =''
    const postData=JSON.stringify(data)
    console.log(verb + path + expires + data)
    const signature = crypto.createHmac('sha256', apiSecret).update(verb + path + expires + data).digest('hex');

    const headers = {
        'content-type' : 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'api-expires': expires,
        'api-key': key,
        'api-signature': signature
    }

    const requestOptions = {
        headers: headers,
        // url:'https://www.bitmex.com'+path,
        url:'https://testnet.bitmex.com'+path,
        // url:'https://www.baidu.com',
        method: 'GET',
        body:postData
    };
    const res=await axios(requestOptions)

    return res
}

export const orderApis={
    reqOreder:reqOreder,
}
