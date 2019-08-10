import mongoClient from '../../mongoose/mongoClient'
const mongoose = require('mongoose')
const {Schema} = mongoose
import moment from 'moment'


const loginInfoSchema = new Schema({
    userName: String,
    host:String,
    date: {type:String,default:moment().format('YYYY-MM-DD HH:mm:ss')},
}, {
    collection: 'loginInfos'
})

const loginInfoModel = mongoClient.model('loginInfos',loginInfoSchema)

export default loginInfoModel


