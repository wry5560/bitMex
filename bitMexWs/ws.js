const WebSocket =require('ws')

const ws = new WebSocket('wss://testnet.bitmex.com/realtime')
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