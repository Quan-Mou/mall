<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll :probe-type="3" :pullUpLoad="true" class="wraper"  ref="scroll">
      <detail-swiper :swiper-img="swiperImg" @swiperImgLoad="swiperImgLoad"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop=shop></detail-shop-info>
    </scroll>
  </div>
  
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar.vue'
import {getDetail, Goods,Shop} from "../../network/detail"
import DetailSwiper from './childcomps/DetailSwiper.vue'
import DetailBaseInfo from './childcomps/DetailBaseInfo.vue'
import DetailShopInfo from './childcomps/DetailShopInfo.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
export default {
  name:'Detail',
  components: { DetailNavBar, DetailSwiper, DetailBaseInfo, DetailShopInfo, Scroll },
  data() {
    return {
      iid:null,
      swiperImg:[],
      goods:{},
      shop:{}
    } 
  },
  created() {
    // 保存路由传入的的id
    this.iid = this.$route.params.iid;
    
    // 根据 iid 得到 详情数据 
    getDetail(this.iid).then(ret => {
      console.log(ret); 
      const data = ret.data.result
      // 保存轮播图数据
      this.swiperImg = data.itemInfo.topImages

      // 获取保存商品数据
      this.goods = new Goods(data.columns,data.itemInfo,data.shopInfo.services)
      console.log(this.goods);

      // 获取保存商铺信息
      this.shop = new Shop(data.shopInfo)
    })
  },
  methods:{
    swiperImgLoad() {
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
  .detail {
    position: relative;
    height: 100vh;
    z-index: 25;
    background-color:#fff;
  }
  .wraper {
    /* position: absolute;
    top:44px;
    left:0;
    right: 0; */
    height: calc(100% - 44px);
  }
</style>