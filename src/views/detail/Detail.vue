<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :swiper-img="swiperImg"></detail-swiper>
    {{iid}}
  </div>
  
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar.vue'
import {getDetail} from "../../network/detail"
import DetailSwiper from './childcomps/DetailSwiper.vue'
export default {
  name:'Detail',
  components: { DetailNavBar, DetailSwiper },
  data() {
    return {
      iid:null,
      swiperImg:[]
    } 
  },
  created() {
    // 保存路由传入的的id
    this.iid = this.$route.params.iid;
    
    // 根据 iid 得到 详情数据 
    getDetail(this.iid).then(ret => {
      console.log(ret); 
      const data = ret.data
      // 保存轮播图数据
      this.swiperImg = data.result.itemInfo.topImages
    })
  }
}
</script>

<style>

</style>