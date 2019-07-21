const socket = require('socket.io-client')('wss://testnet.bitmex.com/realtime')

console.log('ws connect start!');
socket.on('connect',function (socket) {
    console.log('ws connected!')
})

socket.on('connecting',function (socket) {
    console.log('ws connecting!')
})