import qs from 'qs'
import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://vueshop.glbuys.com',
    timeout: 25000
  });

  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // config.data=(config.data instanceof FormData)?config.data:qs.stringify(config.data)
    if(config.data && !(config.data  instanceof FormData)){
        config.data = qs.stringify(config.data)
    }
    config.params ={
        ...config.params,
        token:"1ec949a15fb709370f"
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  export default instance