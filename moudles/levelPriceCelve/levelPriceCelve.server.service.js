import mongoClient from '../../mongoose/mongoClient'
const mongoose = require('mongoose')
const {Schema} = mongoose

const levelPriceCelveSchema = new Schema({
    type: {type:String,default:'Limit'},
    celveType:{type:String,default:'Single'},
    levelStopType:{type:String,default:'normal'},
    autoStop:{type:Boolean,default:false},
    stopLevel:{type:Number,default:0},
    totalTimes:{type:Number,default:0},
    reduceTimes:{type:Number,default:0},
    currentPosition:{type:Number,default:0},
    startPosition:{type:Number,default:0},
    buyQt:Number,
    preBuyQt:Number,
    sellQt:Number,
    preSellQt:Number,
    side: String,
    username: [String,Array],
    startPrice: Number,
    firstTime:{type:Boolean,default:true},
    qt:Number,
    level: Number,
    preLevel:{type:Number,default:-1},
    currentLevel:{type:Number,default:0},
    nextLevel:{type:Number,default:1},
    levelPrice: Number,
    buyStopPrice:Number,
    sellStopPrice:Number,
    stopPrice:Number,
    preStopPrice:Number,
    prePrice:Number,
    currentPrice:Number,
    nextPrice: Number,
    actions: {type:Array,default:[]},
    offset: {type: Number,default: 0.5},
    state: {type:Boolean,default:true},
}, {
    collection: 'levelPriceCelve'
})

const levelPriceCelveModel = mongoClient.model('levelPriceCelve',levelPriceCelveSchema)
// levelPriceCelveModel.close=function () {
//     mongoClient.close()
// }

export default levelPriceCelveModel
