<template>
  <div id="home">
    <nav-top class="home-nav"><div slot="conter">购物车</div></nav-top>
    <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabcontrol1"
        v-show="tabShow"
      ></tab-control>
    <scroll class="wrapper" ref="scroll" :probe-type="3" :pullUpLoad="true" @finishPullUp="finishPullUp" @scrollTop="contentScroll">
      <home-swiper :banners="banners" @swiperImg="swiperImg"></home-swiper>
      <recommended :recommends="recommends"></recommended>
      <most-popular />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabcontrol2"
      ></tab-control>
      <!-- <goods-list :goods-list="getGoodsData[currentIndex].list"></goods-list> -->
      <!-- 使用计算属性 -->
      <goods-list :goods-list="showGoods" ></goods-list>
    </scroll>
    <back-top v-show="isBackTop" @click.native="backTopClick" ></back-top>
  </div>
</template>

<script>
import NavTop from "../../components/common/navbar/NavTop.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from '../../components/content/backTop/BackTop.vue';

import TabControl from "../../components/content/tabcontrol/TabControl";
import { getHomeMultidata, getGoodslist } from "../../network/home";
import GoodsList from "./childcomps/GoodsList.vue";

import HomeSwiper from "./childcomps/HomeSwiper.vue";
import MostPopular from "./childcomps/MostPopular.vue";
import Recommended from "./childcomps/Recommended.vue";

import { debounce } from "../../common/utils";  

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      getGoodsData: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentIndex: "pop",
      taboffsetTop:0,
      isBackTop:false,
      tabShow:false,
      scrollY:0,
    };
  },
  components: {
    NavTop,
    HomeSwiper,
    Recommended,
    MostPopular,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  computed: {
    showGoods() {
      return this.getGoodsData[this.currentIndex].list;
    },
  },
  mounted() {
    // 兄弟组件之间通信(goodslistitem.vue 和 home.vue) 用了事件总线 
    // 1.
    this.$bus.$on('itemImgLoad',this.debounce(this.$refs.scroll.refresh,200)) 
    // 2.
    // const refresh = debounce(this.$refs.scroll.refresh,200);
    // this.$bus.$on('itemImgLoad',() => {
    //   refresh()
    // })

  },
  created() {
    
    this.getHomeMultidata();

    this.getGoodslist("pop");
    this.getGoodslist("new");
    this.getGoodslist("sell");
    
  },
  methods: {
    // 网络请求：
    getHomeMultidata() {
      getHomeMultidata().then((ret) => {
        this.banners = ret.data.data.banner.list;
        this.recommends = ret.data.data.recommend.list;
      });
    },
    getGoodslist(type) {
      const page = this.getGoodsData[type].page + 1;
      getGoodslist(type, page).then((ret) => {
        this.getGoodsData[type].list.push(...ret.data.data.list);
        this.getGoodsData[type].page += 1;

        // 上拉加载s
        this.$refs.scroll.scroll.finishPullUp() 
      });
    },
    // 监听事件 ： 
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentIndex = "pop";
          break;
        case 1:
          this.currentIndex = "new";
          break;
        case 2:
          this.currentIndex = "sell";
          break;
      }
      this.$refs.tabcontrol2.currentIndex = index
      this.$refs.tabcontrol1.currentIndex = index
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position) {
      // 点击回到顶部
      this.isBackTop = (position.y) < -1200

      this.tabShow = position.y < -this.$refs.tabcontrol2.$el.offsetTop
      
    }, 
    finishPullUp() {
      this.getGoodslist(this.currentIndex)
    },
    debounce(func,delay) {
      let timer = null
      return function(...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          // console.log(this);
          func.apply(this,args)
          // console.log(args);
        },delay)
      }
    },
    swiperImg() {
      this.taboffsetTop = this.$refs.tabcontrol2.$el.offsetTop
      // console.log(this.taboffsetTop);
    }
  },
  activated() {
    // '活跃的状态 activated' 
    // 有时候就算使用了 keep-alive 当我从详情页跳转到 首页还会是回到顶部，所以使用 路由离开时，和进入时这两个回调函数
    this.$refs.scroll.scrollTo(0,this.scrollY,100)
  },
  deactivated() {
    // '不活跃的 状态 deactivated'
    this.scrollY = this.$refs.scroll.scroll.y
  },
  destroyed(){
    console.log('组件销毁');
  }
  
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-high-text);
  color: var(--color-background);

    /* position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index:10 */
  }
  .wrapper {
    position: absolute;
    top:44px;
    right:0;
    left:0;
    bottom:49px;
    overflow: hidden;
    /* height: 1300px; */
  }
  
</style>