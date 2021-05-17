<template>
  <div class="detail">
    <detail-nav-bar class="nav-bar"></detail-nav-bar>
    <scroll :probeType=3 :pullUpLoad=true class="content" ref="scroll">
      <detail-swiper :top-imgs=topImgs @ImgLoad=ImgLoad></detail-swiper>
      <detail-base-info :goods=goods></detail-base-info>
      <detail-shop-info :shop=shop></detail-shop-info>
      <detail-goods-info :detail-info=detailInfo @imageLoad=imageLoad></detail-goods-info>
      <detail-param-info :params-info=paramsInfo ></detail-param-info>
      <detail-comment-info :comments-info=commentsInfo></detail-comment-info>
    </scroll>
  </div>
</template> 

<script>
import DetailNavBar from './childcomps/DetailNavBar.vue'
import {getDetail,Goods,Shop,ParamsInfo } from "../../network/detail"
import DetailSwiper from './childcomps/DetailSwiper.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import DetailBaseInfo from './childcomps/DetailBaseInfo.vue'
import DetailShopInfo from './childcomps/DetailShopInfo.vue'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo.vue'
import DetailParamInfo from './childcomps/DetailParamInfo.vue'
import DetailCommentInfo from './childcomps/DetailCommentInfo.vue'
export default {
  name:'Detail',
  components: { DetailNavBar, DetailSwiper, Scroll, DetailBaseInfo, DetailShopInfo, DetailGoodsInfo, DetailParamInfo, DetailCommentInfo},
  data() {
    return{
      iid:null,
      topImgs:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramsInfo:{},
      commentsInfo:{}
    } 
  },
  created() {
    // 保存id 信息
    this.iid = this.$route.params.iid
    
    getDetail(this.iid).then(ret => {
      console.log(ret);
      let data = ret.data.result

      // 保存轮播图信息
      this.topImgs = data.itemInfo.topImages

      // 保存商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 保存店铺信息
      this.shop = new Shop(data.shopInfo)

      // 保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 保存商品参数
      this.paramsInfo = data.itemParams
      // this.paramsInfo = new ParamsInfo(data.itemParams.info.set,data.itemParams.rule.tables)
      // this.paramsTables = this.paramsInfo.rule.tables

      // 保存评论信息
      // this.commentsInfo = data.rate
      if(data.rate.list) {
        this.commentsInfo = data.rate.list[0];
      }
    })
    
  },
  methods:{
    ImgLoad() {
      this.$refs.scroll.refresh()
    },
    imageLoad() {
      this.$refs.scroll.refresh()
    }
  }
} 
</script>

<style scoped>
.detail {
  height: 100vh;
  position: relative; 
  z-index: 30;
  background-color: #fff;
}
  .content {
    height: calc(100% - 44px);
  }
  .nav-bar {
    position: relative;
    z-index: 10;
    background-color: #fff;
  } 
</style>