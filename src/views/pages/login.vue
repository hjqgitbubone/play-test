<template>
<div>
    <van-form @submit="onSubmit">
  <van-field
    v-model="cellphone"
    name="cellphone"
    label="用户名"
    placeholder="用户名"
    :rules="[
        { required: true, message: '手机号不能为空' },
        {pattern:/^1[3-9]\d{9}$/, message: '手机号格式不正确'}
    ]"
  />
  <van-field
    v-model="password"
    type="password"
    name="password"
    label="密码"
    placeholder="密码"
    :rules="[
            { required: true, message: '密码格式不正确'},
            {pattern:/^\d{6,8}$/, message: '密码格式不正确'}
    ]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">登录</van-button>
  </div>
</van-form>
</div>
</template>

<script>
import {getLogin} from '../../api/index'
import { Toast } from 'vant';
export default {
components: {},
props: {},
data() {
return {
      cellphone: '',
      password: '',
}
},
computed: {},
methods: {
     onSubmit(values) {
      console.log('submit', values);
      const params = {
          cellphone:values.cellphone,
          password: values.password,
      }
    
        getLogin(params).then((res)=>{
            //console.log(res);
            //console.log(res.data.data.nickname);
            if(res.data.code == 200){
                Toast('登陆成功');
                //VUEX 异步存值
                this.$store.dispatch('user/setUser',res.data.data.nickname)
                this.$router.push('/index')
            }
        })
    },
},
created() {

},
mounted() {

},
}
</script>
<style scoped>

</style>