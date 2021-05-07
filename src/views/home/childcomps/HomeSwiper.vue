<template>
  <div class="home-swiper">
    <swiper>
          <swiper-item v-for="(items,index) in banners" :key="index">
            <a :href="items.link">
              <img :src="items.image" alt="">
            </a>
          </swiper-item>
  </swiper>
  </div>
    
</template>

<script>
  import Swiper from "../../../components/common/swiper/Swiper"
  import SwiperItem from "../../../components/common/swiper/SwiperItem"


export default {
  props:{
    banners:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem,
  }
}
</script>

<style scoped>
  /* .home-swiper {
    margin-top: 44px;
  } */
</style>