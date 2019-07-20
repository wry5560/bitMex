const io = require('socket.io-client')
const socket = io.connect('ws://123.207.167.163:9010/ajaxchattest')

console.log('ws connect start!');
socket.on('connect',function (socket) {
    console.log('ws connected!')
})

socket.on('connecting',function (socket) {
    console.log('ws connecting!')
})