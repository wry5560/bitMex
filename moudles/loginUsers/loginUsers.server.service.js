import mongoClient from '../../mongoose/mongoClient'
const mongoose = require('mongoose')
const {Schema} = mongoose


const loginUsersSchema = new Schema({
    userName: String,
    password:{type:String,default:'ce0bfd15059b68d67688884d7a3d3e8c'},
    accounts: Array,
}, {
    collection: 'loginUsers'
})

const loginUsersModel = mongoClient.model('loginUsers',loginUsersSchema)

export default loginUsersModel


