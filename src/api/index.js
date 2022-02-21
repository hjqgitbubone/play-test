import request from '../utils/request'
//登录接口
//get 用params   其他用data
export const getLogin = (data={}) => {
    return request({
        url:'/api/home/user/pwdlogin',
        method:'post',
        data
    })
}
//轮播图 
export const getSwiper = () =>{
    return request({
        url:'/api/home/index/slide',
        method: 'get',
    })
}
//首页数据
export const getIndexList = () =>{
    return request({
        url:'/api/home/index/goodsLevel',
        method: 'get',
    })
}
//详情数据接口
export const getInfoList = (params={}) =>{
    //console.log('1212',params);
    return request({
        url:'/api/home/goods/info',
        method: 'get',
        params
    })
}
