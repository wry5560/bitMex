import config from './config'
import mongoose from 'mongoose'

const {mongoUrl} = config

/**
 * 配置 MongoDb options
 */

    let options = {
        useNewUrlParser: true,
        poolSize: 5, // 连接池中维护的连接数
        reconnectTries: Number.MAX_VALUE,
        keepAlive: 120,
    };


let mongoClient = mongoose.createConnection(mongoUrl,options);

/**
 * Mongo 连接成功回调
 */
mongoClient.on('connected', function () {
    console.log('Mongoose connected to ' ,mongoUrl, JSON.stringify(options));
});
/**
 * Mongo 连接失败回调
 */
mongoClient.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
/**
 * Mongo 关闭连接回调
 */
mongoClient.on('disconnected', function () {
    console.log('Mongoose disconnected');
});


/**
 * 关闭 Mongo 连接
 */
function close() {
    mongoClient.close();
}

export default mongoClient
