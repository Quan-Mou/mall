<template>
  <tab-bar>
      <!-- 如果不是一个变量，没有必要加 : v-bind -->
      <!-- 可以动态添加字体颜色 -->
      <tab-bar-items path='/home' >
        <img  slot="tabbar-img-active" src="../../assets/img/tabbar/home_active.svg" alt="">
        <img  slot="tabbar-img" src="../../assets/img/tabbar/home.svg" alt="">
        <div slot="tabbar-text">首页</div>
      </tab-bar-items>
      <tab-bar-items path='/category'>
        <img slot="tabbar-img-active" src="../../assets/img/tabbar/category_active.svg" alt="">
        <img  slot="tabbar-img" src="../../assets/img/tabbar/category.svg" alt="">
        <div slot="tabbar-text" >分类</div>
      </tab-bar-items>
      <tab-bar-items path='/cart'>
        <img  slot="tabbar-img-active" src="../../assets/img/tabbar/shopcart_active.svg" alt="">
        <img  slot="tabbar-img" src="../../assets/img/tabbar/shopcart.svg" alt="">
        <div slot="tabbar-text">购物车</div>
      </tab-bar-items>
      <tab-bar-items path='/profile' >
        <img  slot="tabbar-img-active" src="../../assets/img/tabbar/profile_active.svg" alt="">
        <img  slot="tabbar-img" src="../../assets/img/tabbar/profile.svg" alt="">
        <div slot="tabbar-text">我的</div>
      </tab-bar-items>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItems from 'components/common/tabbar/TabBarItems.vue'
export default {
  components:{
    TabBar,
    TabBarItems
  }
}
</script>

<style>

</style>