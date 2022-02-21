<template>
  <div>
    <div class="lun">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(v,i) in swiperArr" :key="i">
            <img :src="v" alt="ww">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  props: ['swiperArr'],
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
  created() {
     
  },
  mounted() {},
};
</script>
<style scoped lang="less">
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    img{
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  
  
</style>