<template>
  <div>
    <dl class="dls">
      <dt>
        <Lun :swiperArr="dataimg"/>
      </dt>
      <dd>
        <p>{{ dataArr.title }}</p>
        <p>{{ dataArr.price }}</p>
      </dd>
    </dl>
    <p class="pp1">
      <button @click="addCar">加入购物车</button>
    </p>
  </div>
</template>

<script>
import { getInfoList } from "../../api/index";
import Lun from '../../components/Lunbo.vue'
export default {
  components: {
    Lun
  },
  props: {},
  data() {
    return {
      dataArr: [{ images: [] }],
      dataimg: [],
    };
  },
  computed: {},
  methods: {
    addCar() {
      //console.log(11);
      this.$store.dispatch('shop/setShop',this.dataArr)
      this.$router.push('/shopcar')
    },
  },
  created() {
    // console.log(this.$route.query.id)
    let chuanid = this.$route.query.id;
    const params = {
      gid: chuanid,
      type: "details",
    };
    getInfoList(params).then((res) => {
      console.log(res.data.data);
      this.dataArr = res.data.data;
      this.dataimg = res.data.data.images; //防止报 reading"0"错误 许琳伟大哥作
    });
  },
};
</script>
<style scoped lang="less">
.dls {
  width: 100%;
  height: 4rem;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.pp1{
    margin-top: 400px;
}
</style>