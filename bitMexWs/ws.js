const WebSocket =require('ws')
import bitMexSignature from './bitmex_signature'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { reqUsers,  reqOrders, postOrders, postLevelPriceCelve, getLevelPriceCelve } from './api'
import {settings} from '../config/dev-setting'
const {isTest} = settings
const wsuri =isTest ?  'wss://testnet.bitmex.com/realtime' : 'wss://www.bitmex.com/realtime'
const ws = new WebSocket(wsuri)
console.log('ws start connect!')
// 发送
ws.on('open', () => {
    console.log('ws was open!')
})

// 接受
ws.on('message', (message) => {
    console.log('ws message!',message)
})

// 错误
ws.on('error', (error) => {
    console.log('ws was error!',error)
})