import axios from 'axios'

import {settings} from '../config/dev-setting'
const {apiBaseUrl,testApiBaseUrl}= settings


// 创建 axios 实例
const service = axios.create({
    baseURL:process.env.NODE_ENV === 'production'
        ? apiBaseUrl :testApiBaseUrl,

    timeout: 60000 // 请求超时时间
})

service.defaults.withCredentials = true

const err = (error) => {
    if (error.response) {
        // 发送请求后，服务端返回的响应码不是 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // 发送请求但是没有响应返回
        console.log(error.request);
    } else {
        // 其他错误
        console.log('Error', error.message);
    }
    console.log(error.config);
}

// request interceptor
service.interceptors.request.use(config => {
    // if (token) {
    //     config.headers[ 'Access-Token' ] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
    // }
    return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
    return response.data
}, err)

export {
    service as axios
}
