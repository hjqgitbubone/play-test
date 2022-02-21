<template>
  <div>
    <div class="touBox">
      <label><input type="checkbox" @click="allcheck" :checked="allchecked"/>全选</label>
    </div>
    <div class="dlBox">
      <div class="box" v-for="(v,i) in newArr" :key="i">
        <div class="zuo"><input type="checkbox" :checked="v.check" @click="soloFn(v)"/></div>
        <div class="you">
          <van-card
            :num="v.num"
            :price="v.price"
            :title="v.title"
            :thumb="v.images[0]"
          >
            <template #tags>
              <van-tag plain type="danger">标签</van-tag>
              <van-tag plain type="danger">标签</van-tag>
            </template>
            <template #footer>
              <van-button @click="lowFn(v)" :disabled="v.num == 1">-</van-button>
              <van-button @click="addFn(v)">+</van-button>
            </template>
          </van-card>
        </div>
      </div>
    </div>
    <div>
       <p>总数:{{totalSum}}---总价:{{totalShu}}</p>
    </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
        newArr:[],
        allchecked:false,
        money:0,
        allPrice:0
    };
  },
  computed: {
    ...mapState("shop", ["shopArr"]),
    totalSum(){
        //总价
        let sum = 0
        let newList = [...this.newArr]
        newList.forEach(v=>{
            if(v.check){
                sum +=v.num*v.price 
            }
        })
        return sum
    },
     totalShu(){
        //总价
        let shu = 0
        let newList = [...this.newArr]
        newList.forEach(v=>{
            if(v.check){
                shu +=v.num
            }
        })
        return shu
    }  
  },

  methods: {
      lowFn(v){
          v.num--
          this.$store.dispatch('shop/carFn',this.newArr)
      },
      addFn(v){
          v.num++
          this.$store.dispatch('shop/carFn',this.newArr)
      },
      //全选
      allcheck(){
          this.allchecked = !this.allchecked
          let newList = [...this.newArr]
          let flag = newList.map(v=>{
              v.check = this.allchecked
              return v
          })
          this.$store.dispatch('shop/carFn',flag)

      },
       //单选
      soloFn(v){
        v.check =!v.check
         let newList = [...this.newArr]
        let flag =  newList.every(v=>{
             return v.check
         })
         this.allchecked= flag
         this.$store.dispatch('shop/carFn',newList)
      },
     
    
  },
  created() {
    this.newArr = this.shopArr
    let flag =  this.newArr.every(v=>{
            return v.check
    })
    this.allchecked= flag
    this.$store.dispatch('shop/carFn',this.newArr)

        
  }
 
};
</script>
<style scoped lang="less">
.touBox {
  width: 100%;
  height: 1rem;
}
.dlBox {
  width: 100%;
  height: 15rem;
  overflow: auto;
  background: white;
  .box {
    width: 100%;
    height: 3.5rem;
    background: #f7f7f7;
    display: flex;
    margin-top: 15px;
    .zuo {
      width: 10%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .you {
      width: 90%;
      height: 100%;
    }
  }
}
</style>