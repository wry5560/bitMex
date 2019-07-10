import { axios } from '../../lib/request'
import crypto from 'crypto'
import Qs from 'qs'

const reqAccount= async function (apiKey) {
    // console.log(apiKey)
    const {key,apiSecret}=apiKey[0]
    // console.log(key)
    const verb = 'GET'
    const path = '/api/v1/user'
    const expires = Math.round(new Date().getTime() / 1000) + 60          // 1 min in the future
    const data =''

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

    };
    const res=await axios(requestOptions)

    return res
}

const reqWallet=async function (apiKey) {
    const {key,apiSecret}=apiKey[0]
    // console.log(key)
    const verb = 'GET'
    const params={currency:'XBt'}
    const path = '/api/v1/user/wallet'+'?'+Qs.stringify(params)
    const expires = Math.round(new Date().getTime() / 1000) + 60          // 1 min in the future
    const data =''
    console.log(verb + path + expires +data)
    const signature = crypto.createHmac('sha256', apiSecret).update(verb + path + expires +data).digest('hex');

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


    };
    const res=await axios(requestOptions)

    return res
}
export const userApis={
    reqAccount:reqAccount,
    reqWallet:reqWallet
}
