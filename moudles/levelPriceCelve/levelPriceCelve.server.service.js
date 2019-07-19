import mongoClient from '../../mongoose/mongoClient'
const mongoose = require('mongoose')
const {Schema} = mongoose

const levelPriceCelveSchema = new Schema({
    type: {type:String,default:'Limit'},
    celveType:{type:String,default:'Single'},
    side: String,
    username: [String,Array],
    startPrice: Number,
    qt:Number,
    level: Number,
    levelPrice: Number,
    nextPrcie: Number,
    actions: {type:Array,default:[]},
    offset: {type: Number,default: 0},
    state: {type:Boolean,default:true},
}, {
    collection: 'levelPriceCelve'
})

const levelPriceCelveModel = mongoClient.model('levelPriceCelve',levelPriceCelveSchema)
// levelPriceCelveModel.close=function () {
//     mongoClient.close()
// }

export default levelPriceCelveModel
