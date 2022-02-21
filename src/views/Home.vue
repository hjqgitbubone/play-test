<template>
  <div class="home">
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <van-tabbar route>
        <van-tabbar-item replace icon="home-o" to="/index">首页</van-tabbar-item>
        <van-tabbar-item replace icon="search" to="/fen">分类</van-tabbar-item>
        <van-tabbar-item replace icon="friends-o" to="/shopcar">购物车</van-tabbar-item>
        <van-tabbar-item replace icon="setting-o" to="/mine">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
    data() {
    return {
    };
  },
};
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  section{
    flex: 1;
    background: #f7f7f7;
  }
  footer{
    width: 100%;
    height: 1.2rem;
    background: yellow;
    display: flex;

  }
}
</style>
