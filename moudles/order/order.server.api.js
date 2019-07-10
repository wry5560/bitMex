import { axios } from '../../lib/request'
import crypto from 'crypto'
import Qs from 'qs'
var request = require('request');
const Agent = require("socks5-https-client/lib/Agent")

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
        method: verb,
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
    const params={}
    const path = '/api/v1/order'
    const expires = Math.round(new Date().getTime() / 1000) + 60          // 1 min in the future
    const data ={
        orderID:'',          //Order ID
        origClOrdID:'',      //Client Order ID. See POST /order
        clOrdID:'',          //Optional new Client Order ID, requires origClOrdID.
        orderQty:null,     //Optional order quantity in units of the instrument (i.e. contracts).
        leavesQty:null,    //Optional leaves quantity in units of the instrument (i.e. contracts). Useful for amending partially filled orders.
        price:null,       //Optional limit price for 'Limit', 'StopLimit', and 'LimitIfTouched' orders.
        stopPx:null,      //Optional trigger price for 'Stop', 'StopLimit', 'MarketIfTouched', and 'LimitIfTouched' orders. Use a price below the current price for stop-sell orders and buy-if-touched orders.
        pegOffsetValue:null,    //Optional trailing offset from the current price for 'Stop', 'StopLimit', 'MarketIfTouched', and 'LimitIfTouched' orders; use a negative offset for stop-sell orders and buy-if-touched orders. Optional offset from the peg price for 'Pegged' orders.
        text:'',            //Optional amend annotation. e.g. 'Adjust skew'.
        ...options
    }
    const postData=JSON.stringify(data)
    // console.log(verb + path + expires + data)
    const signature = crypto.createHmac('sha256', apiSecret).update(verb + path + expires + postData).digest('hex');

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
        method: verb,
        data:postData
    };
    const res=await axios(requestOptions)

    return res
}

const createOrder= async function (apiKey,options) {
    // console.log(apiKey)
    const {key,apiSecret}=apiKey[0]
    // console.log(key)
    const verb = 'POST'
    const params={}
    const path = '/api/v1/order'
    const expires = Math.round(new Date().getTime() / 1000) + 60          // 1 min in the future
    const data ={
        // symbol:'',          //Instrument symbol. e.g. 'XBTUSD'.
        // side:'',            //Order side. Valid options: Buy, Sell. Defaults to 'Buy' unless orderQty is negative.
        // orderQty:'',          //Order quantity in units of the instrument (i.e. contracts).
        // price:null,       //Optional limit price for 'Limit', 'StopLimit', and 'LimitIfTouched' orders.
        // displayQty:null,  //Optional quantity to display in the book. Use 0 for a fully hidden order.
        // clOrdID:'',       //Optional Client Order ID. This clOrdID will come back on the order and any related executions.
        // stopPx:null,      //Optional trigger price for 'Stop', 'StopLimit', 'MarketIfTouched', and 'LimitIfTouched' orders. Use a price below the current price for stop-sell orders and buy-if-touched orders.
        // pegOffsetValue:null,    //Optional trailing offset from the current price for 'Stop', 'StopLimit', 'MarketIfTouched', and 'LimitIfTouched' orders; use a negative offset for stop-sell orders and buy-if-touched orders. Optional offset from the peg price for 'Pegged' orders.
        // pegPriceType:'',     //Optional peg price type. Valid options: LastPeg, MidPricePeg, MarketPeg, PrimaryPeg, TrailingStopPeg.
        // ordType:'Limit',     //Order type. Valid options: Market, Limit, Stop, StopLimit, MarketIfTouched, LimitIfTouched, Pegged. Defaults to 'Limit' when price is specified. Defaults to 'Stop' when stopPx is specified. Defaults to 'StopLimit' when price and stopPx are specified.
        // timeInForce:'',      //Time in force. Valid options: Day, GoodTillCancel, ImmediateOrCancel, FillOrKill. Defaults to 'GoodTillCancel' for 'Limit', 'StopLimit', and 'LimitIfTouched' orders.
        // execInst:'',        //Optional execution instructions. Valid options: ParticipateDoNotInitiate, AllOrNone, MarkPrice, IndexPrice, LastPrice, Close, ReduceOnly, Fixed. 'AllOrNone' instruction requires displayQty to be 0. 'MarkPrice', 'IndexPrice' or 'LastPrice' instruction valid for 'Stop', 'StopLimit', 'MarketIfTouched', and 'LimitIfTouched' orders.
        // text:'',            //Optional amend annotation. e.g. 'Adjust skew'.
        ...options
    }
    const postData=JSON.stringify(data)
    console.log(verb + path + expires + postData)
    const signature = crypto.createHmac('sha256', apiSecret).update(verb + path + expires + postData).digest('hex');

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
        method:verb,
        data:postData,
        // agentClass: Agent
    };
    // request(requestOptions, function(error, response, body) {
    //     console.log('request start')
    //     if (error) { console.log(error); }
    //     console.log(body);
    //     console.timeEnd()
    // });
    const res=await axios(requestOptions)

    return res
}

const delOrder= async function (apiKey,options) {
    // console.log(apiKey)
    const {key,apiSecret}=apiKey[0]
    // console.log(key)
    const verb = 'DELETE'
    const params={}
    const path = '/api/v1/order'
    const expires = Math.round(new Date().getTime() / 1000) + 60          // 1 min in the future
    const data ={
        orderID:'',          //Order ID(s）
        clOrdID:'',       //Optional Client Order ID. This clOrdID will come back on the order and any related executions.
        text:'',            //Optional amend annotation. e.g. 'Adjust skew'.
        ...options
    }
    const postData=JSON.stringify(data)
    // console.log(verb + path + expires + data)
    const signature = crypto.createHmac('sha256', apiSecret).update(verb + path + expires + postData).digest('hex');

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
        method:verb,
        data:postData
    };
    const res=await axios(requestOptions)

    return res
}

const delOrderAll= async function (apiKey,options) {
    // console.log(apiKey)
    const {key,apiSecret}=apiKey[0]
    // console.log(key)
    const verb = 'DELETE'
    const params={}
    const path = '/api/v1/order/all'
    const expires = Math.round(new Date().getTime() / 1000) + 60          // 1 min in the future
    const data ={
        symbol:'',          //Optional symbol. If provided, only cancels orders for that symbol.
        filter:{},       //Optional filter for cancellation. Use to only cancel some orders, e.g. {"side": "Buy"}
        text:'',            //Optional amend annotation. e.g. 'Adjust skew'.
        ...options
    }
    const postData=JSON.stringify(data)
    // console.log(verb + path + expires + data)
    const signature = crypto.createHmac('sha256', apiSecret).update(verb + path + expires + postData).digest('hex');

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
        method:verb,
        data:postData
    };
    const res=await axios(requestOptions)

    return res
}

const cancelAllAfter= async function (apiKey,options) {
    // console.log(apiKey)
    const {key,apiSecret}=apiKey[0]
    // console.log(key)
    const verb = 'POST'
    const params={}
    const path = '/api/v1/order/cancelAllAfter'
    const expires = Math.round(new Date().getTime() / 1000) + 60          // 1 min in the future
    const data ={
        timeout:0,         //Timeout in ms. Set to 0 to cancel this timer.
        ...options
    }
    const postData=JSON.stringify(data)
    // console.log(verb + path + expires + data)
    const signature = crypto.createHmac('sha256', apiSecret).update(verb + path + expires + postData).digest('hex');

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
        method:verb,
        data:postData
    };
    const res=await axios(requestOptions)

    return res
}

const closePosition= async function (apiKey,options) {
    // console.log(apiKey)
    const {key,apiSecret}=apiKey[0]
    // console.log(key)
    const verb = 'POST'
    const params={}
    const path = '/api/v1/order/closePosition'
    const expires = Math.round(new Date().getTime() / 1000) + 60          // 1 min in the future
    const data ={
        symbol:'',         //Symbol of position to close..
        price:null,       //Optional limit price.
        ...options
    }
    const postData=JSON.stringify(data)
    // console.log(verb + path + expires + data)
    const signature = crypto.createHmac('sha256', apiSecret).update(verb + path + expires + postData).digest('hex');

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
        method:verb,
        data:postData
    };
    const res=await axios(requestOptions)

    return res
}
export const orderApis={
    reqOreder:reqOreder,
    updateOrder:updateOrder,
    createOrder:createOrder,
    delOrder:delOrder,
    delOrderAll:delOrderAll,
    cancelAllAfter:cancelAllAfter,
    closePosition:closePosition,

}
