import axios from 'axios'
var logger = require('./log4js').logger;

import {settings} from '../config/dev-setting'
const {apiBaseUrl,testApiBaseUrl}= settings
const Agent = require("socks5-https-client/lib/Agent")

// 创建 axios 实例
const service = axios.create({
    baseURL:process.env.NODE_ENV === 'production'
        ? apiBaseUrl :testApiBaseUrl,

    timeout: 100000, // 请求超时时间
    // headers:{
    //     'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'
    // },
    // retry:4,
    // retryDelay:500,
    httpAgent:settings.isTest ? new Agent({}):null,
    httpsAgent:settings.isTest ? new Agent({}):null
})

service.defaults.withCredentials = true

// service.defaults.timeout = 60000;
// service.defaults.retry = 4;
// service.defaults.retryDelay = 500;

const err = (error) => {
    if (error.response) {
        // 发送请求后，服务端返回的响应码不是 2xx
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        logger.error(error.response.data);
        logger.error(error.response.status);
        logger.error(error.response.headers);

        return {error:error}
    } else if (error.request) {
        // 发送请求但是没有响应返回
        // var config = error.config;
        // // If config does not exist or the retry option is not set, reject
        // if(!config || !config.retry) {
        //     logger.error("can't find config retry",error)
        //     // console.log('timeout')
        //
        //     return Promise.reject(err);
        // }
        //
        // // Set the variable for keeping track of the retry count
        // config.__retryCount = config.__retryCount || 0;
        //
        // // Check if we've maxed out the total number of retries
        // if(config.__retryCount >= config.retry) {
        //     // Reject with the error
        //     logger.error('__retryCount > config.retry !!timeout!!!')
        //     // console.log('timeout')
        //     return Promise.reject(err);
        // }
        //
        // // Increase the retry count
        // config.__retryCount += 1;
        //
        // // Create new promise to handle exponential backoff
        // var backoff = new Promise(function(resolve) {
        //     setTimeout(function() {
        //         resolve();
        //     }, config.retryDelay || 1);
        // });
        //
        // // Return the promise in which recalls axios to retry the request
        // return backoff.then(function() {
        //     logger.error('timeout! retry...',config)
        //     logger.error('config.__retryCount',config.__retryCount)
        //     // console.log('timeout! retry...')
        //     return service(config);
        // });

        console.log(error.request);
    } else {
        // 其他错误
        logger.error('Error', error.message)
        // console.log('Error', error.message);
    }
    console.log(error.config);
}

// request interceptor
service.interceptors.request.use(config => {
    // if (token) {
    //     config.headers[ 'Access-Token' ] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
    // }
    config={
    ...config,
    retry: 5,
    retryDelay: 1000
    }
    logger.debug(config)
    return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
    return response.data
}, err)

export {
    service as axios
}
