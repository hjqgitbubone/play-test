<template>
  <div class="indexBox">
      <div class="lun">
            <IndexLun :swiperArr="lunArr"/>
      </div>
      <div class="shopList">
          <ul>
              <li v-for="(v,i) in shopArr" :key="i" @click="navFn(i)" :class="iu ==i?'on':'li'">{{v.title}}</li>
          </ul>
      </div>
    <div class="xia">
        <dl v-for="(v,i) in shopArr[iu].items" :key="i" @click="goInfo(v.gid)">
            <dt>
                <img :src="v.image" alt="dd">
            </dt>
            <dd>
                <p class="p1">{{v.title}}</p>
                <p>{{v.price}}</p>
            </dd>
        </dl>
    </div>

  </div>
</template>

<script>
import IndexLun from '../../components/indexLun.vue'
import {getIndexList,getSwiper} from '../../api/index'
export default {
  components: {
      IndexLun
  },
  props: {},
  data() {
    return {
        shopArr:[[{items:''}]],
        iu:0,
        lunArr: [], //轮播图
    };
  },
  computed: {},
  methods: {
      navFn(i){
          this.iu = i
      },
      //跳转详情
      goInfo(ids){
          this.$router.push({
              path:'/info',
              query:{id:ids}
          })
      }
  },
  created() {
      getIndexList().then(res=>{
          if(res.data.code == 200){
              this.shopArr = res.data.data
          }
      })
      //lunbotu
       getSwiper().then((res) => {
      if (res.data.code == 200) {
        this.lunArr = res.data.data;
      }
    });
  },
  mounted() {},
};
</script>
<style scoped lang="less">                                             
    .indexBox{
        width: 100%;
        height: 100%;
        
        .lun{
            width: 100%;
            height: 4.9rem;
        }
        .shopList{
            width: 100%;
            height: 1.2rem;
            overflow: auto;
            ul{
                width: 100%;
                height: 1.2rem;
                display: flex;
                align-items: center;
                justify-content: space-around;
                // overflow-x:auto ;
                // li{
                //     white-space: nowrap;
                //     margin-left: 20px;
                // }
            }
             
        }
        .xia{
            width: 100%;
            height: 10rem;
            overflow: auto;
            display: flex;
            flex-wrap: wrap;
            background: #f7f7f7;
            dl{
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                flex-direction: column;
                margin-top: 20px;
                dt{
                    width: 150px;
                    height: 150px;
                    img{
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                }
                dd{
                    .p1{
                        width: 100px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
            }
        }   
       
    }
    .on{
        color: red;
        font-size: 20px;
        font-weight: bold;
        border-bottom: 2px solid red;
    }

</style>