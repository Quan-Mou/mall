<template>
  <div class="detail">
    <detail-nav-bar class="nav-bar" @navClick="navClick" ref="nav"></detail-nav-bar>
    <scroll
      :probetype="3"
      :pull-up-load="false"
      class="content"
      ref="scroll"
      @scrollTop="scrollTop"
    >
      <detail-swiper :top-imgs="topImgs" @ImgLoad="ImgLoad"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
        ref="goodsData"
      ></detail-goods-info>
      <detail-param-info
        :params-info="paramsInfo"
        ref="params"
      ></detail-param-info>
      <detail-comment-info
        :comments-info="commentsInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goodsList="recommendList" ref="goods"></goods-list>
    </scroll>
    <back-top v-show="isBackTop" @click.native="backTopClick"></back-top>
    <detail-bottom @addToCart="addToCart"></detail-bottom>
  </div>
</template> 
 
<script>
import DetailNavBar from "./childcomps/DetailNavBar.vue";
import { getDetail, Goods, Shop, getRecommend } from "../../network/detail";
import DetailSwiper from "./childcomps/DetailSwiper.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailBaseInfo from "./childcomps/DetailBaseInfo.vue";
import DetailShopInfo from "./childcomps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childcomps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childcomps/DetailParamInfo.vue";
import DetailCommentInfo from "./childcomps/DetailCommentInfo.vue";
import GoodsList from "../home/childcomps/GoodsList.vue";

import { debounce } from "../../common/utils";
import BackTop from '../../components/content/backTop/BackTop.vue';
import {imgLoadMixin,BackTopMixin} from "../../common/mixin"
import DetailBottom from './childcomps/DetailBottom.vue';

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    Scroll,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    BackTop,
    DetailBottom
  },
  data() {
    return {
      iid: null,
      topImgs: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentsInfo: {},
      recommendList: [],
      detailTopYs: [],
      product:{}
    };
  },
  // 回到顶部使用了混入
  mixins:[BackTopMixin],
  created() {
    // 保存id 信息
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then((ret) => {
      let data = ret.data.result;

      // 保存轮播图信息
      this.topImgs = data.itemInfo.topImages;

      // 保存商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 保存店铺信息
      this.shop = new Shop(data.shopInfo);

      // 保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 保存商品参数
      this.paramsInfo = data.itemParams;

      // 保存评论信息
      // this.commentsInfo = data.rate
      if (data.rate.list) {
        this.commentsInfo = data.rate.list[0];
      }

      // 推荐数据
      getRecommend().then((ret) => {
        let data = ret.data.data;
        this.recommendList = data.list;
      });
    });

  },
  methods: {
    ImgLoad() {
      this.$refs.scroll.refresh()
    },
    imageLoad() {
      this.$refs.scroll.refresh()
      this.detailTopYs.push(0)
    this.detailTopYs.push(this.$refs.params.$el.offsetTop)
    this.detailTopYs.push(this.$refs.comment.$el.offsetTop)
    this.detailTopYs.push(this.$refs.goods.$el.offsetTop)
    this.detailTopYs.push(Number.MAX_VALUE)
    },
    navClick(index) {
      // this.$refs.scroll.scrollTo(0, -this.navTopYs[index] , 200);
      this.$refs.scroll.scrollTo(0,-this.detailTopYs[index],200)
    },
    scrollTop(position) {
      this.isBackTop = (position.y) < -1200
      const positionY = -position.y
      let length = this.detailTopYs.length;
      for (let i = 0; i<length; i++) {
        if (((i < length - 1 && positionY >= this.detailTopYs[i] && positionY < this.detailTopYs [i + 1] || (i === length - 1 && positionY >= this.detailTopYs[i])))) {
          this.$refs.nav.currentIndex = i
        }
      }


        // for (let i = 0 ; i< this.detailTopYs.length - 1; i++) {
      //   if (positionY >= this.detailTopYs[i] && positionY < this.detailTopYs[i + 1]) {
      //         this.$refs.nav.currentIndex = i
      //   }
      // }
      
      
    },
    addToCart() {
      // 获取商品信心
      let product = {}
      product.img = this.topImgs[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.newPrice
      product.iid = this.iid
      console.log(product);
      // console.log('点击了添加购物车');

      // 使用 vuex管理 购物车数据
      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product)
    }
  },
  mounted() {

  },
  updated() {
    // 获取各个组件的offsetTop值，存在一个数组里面 
    this.$refs.scroll.refresh()
  },
  destroyed() {
      
  },
};
</script>

<style scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 30;
  background-color: #fff;
}
.content {
  /* height: calc(100% - 44px -58px); */
  height: calc(100% - 102px);
  overflow: hidden;
}
.nav-bar {
  position: relative;
  z-index: 1000;

  background-color: #fff;
}
</style>