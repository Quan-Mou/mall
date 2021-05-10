<template>
  <div class="home-swiper">
    <swiper>
          <swiper-item v-for="(items,index) in banners" :key="index">
            <a :href="items.link">
              <img :src="items.image" alt="" @load="swiperLoad">
            </a>
          </swiper-item>
  </swiper>
  </div>
    
</template>

<script>
  import Swiper from "../../../components/common/swiper/Swiper"
  import SwiperItem from "../../../components/common/swiper/SwiperItem"


export default {
  data() {
    return {
      isSwiperLoad:false
    }
  },
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
  },
  methods:{
    swiperLoad() {
      if(!this.isSwiperLoad) {
        this.$emit('swiperImg')
        this.isSwiperLoad = true
      }
    }
  }
}
</script>

<style scoped>
  /* .home-swiper {
    margin-top: 44px;
  } */
</style>