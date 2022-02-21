const state= {
    shopArr:[]
}
const mutations= {
    asnycShop(state,params){
      // console.log('值',params);
        let nList = [...state.shopArr]
        let flag = nList.some(v=>{
            if(v.gid == params.gid){
                v.num++
            }
            return v.gid == params.gid
        })
        if(!flag){
            nList.push({...params,check:false,id:Math.random(),num:1})
        }
        state.shopArr=nList
    },
    //刷新不变
    carChangeFn(state,params){
        state.shopArr = params
    }
}
const actions= {
    setShop(context,params){
         //console.log('异步',params);
        context.commit('asnycShop',params)
    },
    //用来购物车刷新不变
    carFn(context,params){
        context.commit('carChangeFn',params)
    }
}
export default {
    namespaced:true,
    state,mutations,actions
}