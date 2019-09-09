import mongoClient from '../../mongoose/mongoClient'
const mongoose = require('mongoose')
const {Schema} = mongoose


const accountsSchema = new Schema({
    userName: String,
    email:String,
    apiKey: Array,
    celveType:String
}, {
    collection: 'accounts'
})

const accountsModel = mongoClient.model('accounts',accountsSchema)

export default accountsModel


